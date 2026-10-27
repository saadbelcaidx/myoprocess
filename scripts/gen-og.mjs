#!/usr/bin/env node
/**
 * Link-preview images (1200×630), rendered by headless Chrome from the homepage's own data:
 *   public/og/home.png        the homepage
 *   public/og/<slug>.png      one per client result
 *
 * A local tool: it needs Chrome on this machine, so it is not part of the build. The PNGs are committed.
 * Run: npm run gen:og
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn, execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'public', 'og');
const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9341;

const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const pull = (name) => {
  const m = html.match(new RegExp(`\\nconst ${name} = (\\[[\\s\\S]*?\\n\\]);`));
  if (!m) throw new Error(`${name} not found in index.html`);
  return new Function(`return ${m[1]}`)();
};
const CASES = pull('CASES');
const slug = (s) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');   // same rule as index.html
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const pad = (n) => String(n).padStart(2, '0');

const FONTS = 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@500;600&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=block';
const CSS = `
  :root { --paper: #faf9f5; --ink: #121212; --ink-2: #3a3a3a; --sub: #6c6a64; --mute: #9a978f; --rule: #dedad0; --ox: #6b1818; }
  * { box-sizing: border-box; margin: 0; }
  html, body { width: 1200px; height: 630px; overflow: hidden; }
  body { background: var(--paper); color: var(--ink); font-family: "Inter", sans-serif; -webkit-font-smoothing: antialiased; padding: 54px 64px 50px; display: flex; flex-direction: column; justify-content: space-between; }
  .top { display: flex; justify-content: space-between; align-items: baseline; }
  .wordmark { font-family: "Inter Tight", sans-serif; font-weight: 600; font-size: 30px; letter-spacing: -.01em; }
  .wordmark em { font-family: "Instrument Serif", serif; font-style: italic; font-weight: 400; color: var(--ox); font-size: 36px; margin-right: 1px; }
  .mono { font-family: "JetBrains Mono", monospace; font-size: 14px; letter-spacing: .14em; text-transform: uppercase; color: var(--sub); }
  h1 { font-family: "Instrument Serif", serif; font-weight: 400; font-size: 96px; line-height: .96; letter-spacing: -.015em; max-width: 1020px; text-wrap: balance; }
  h1 i { color: var(--ox); }
  .strip { display: flex; gap: 52px; border-top: 1px solid var(--rule); padding-top: 24px; }
  .strip div { display: flex; flex-direction: column; gap: 8px; }
  .strip b { font-family: "Inter Tight", sans-serif; font-weight: 600; font-size: 40px; letter-spacing: -.03em; line-height: 1; font-variant-numeric: tabular-nums; }
  .strip div:first-child b { color: var(--ox); }
  .strip span { font-size: 15px; color: var(--sub); }
  .kind { color: var(--ox); margin-bottom: 28px; }
  .kind.sys { color: var(--sub); }
  .fig { font-family: "Inter Tight", sans-serif; font-weight: 600; font-size: 150px; letter-spacing: -.04em; line-height: .9; color: var(--ox); font-variant-numeric: tabular-nums; }
  .measure { font-family: "Instrument Serif", serif; font-size: 46px; line-height: 1.08; letter-spacing: -.01em; margin-top: 24px; max-width: 980px; text-wrap: balance; }
  .foot { display: flex; justify-content: space-between; align-items: baseline; border-top: 1px solid var(--rule); padding-top: 22px; }
  .client { font-family: "Inter Tight", sans-serif; font-weight: 600; font-size: 28px; letter-spacing: -.01em; }
  .client span { color: var(--mute); font-weight: 500; }
`;
const shell = (body) => `<!doctype html><html lang="en"><head><meta charset="utf-8"><link rel="stylesheet" href="${FONTS}"><style>${CSS}</style></head><body>${body}</body></html>`;
const top = `<div class="top"><div class="wordmark"><em>m</em>yoProcess</div><div class="mono">myoprocess.com</div></div>`;

const home = shell(`${top}
<h1>We find your next customers and <i>business opportunities.</i></h1>
<div class="strip">
  <div><b>$17,000,000</b><span>in business opportunities generated</span></div>
  <div><b>$1 billion+</b><span>in B2B pipeline routed</span></div>
  <div><b>16</b><span>client results</span></div>
  <div><b>13</b><span>industries</span></div>
</div>`);

const casePage = (c, i) => shell(`${top}
<div class="mid">
  <div class="mono kind${c.kind === 'sys' ? ' sys' : ''}">No. ${pad(i + 1)} · ${esc(c.label)} · ${esc(c.industry)}</div>
  <div class="fig">${esc(c.figure)}</div>
  <div class="measure">${esc(c.measure)}</div>
</div>
<div class="foot"><div class="client">${esc(c.client)}${c.where ? ` <span>· ${esc(c.where)}</span>` : ''}</div><div class="mono">Client results · ${CASES.length}</div></div>`);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
function cdp(wsUrl) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(wsUrl);
    let id = 0; const pending = new Map(); const waiters = [];
    ws.onopen = () => resolve({
      send: (method, params = {}) => new Promise((res, rej) => { const i = ++id; pending.set(i, { res, rej }); ws.send(JSON.stringify({ id: i, method, params })); }),
      until: (method) => new Promise((res) => waiters.push({ method, res })),
      close: () => ws.close(),
    });
    ws.onerror = (e) => reject(new Error('websocket: ' + (e.message || 'failed')));
    ws.onmessage = (m) => {
      const d = JSON.parse(m.data);
      if (d.id && pending.has(d.id)) { const p = pending.get(d.id); pending.delete(d.id); d.error ? p.rej(new Error(d.error.message)) : p.res(d.result); }
      else if (d.method) for (let i = waiters.length - 1; i >= 0; i--) if (waiters[i].method === d.method) { waiters[i].res(d.params); waiters.splice(i, 1); }
    };
  });
}

async function main() {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'myoprocess-og-'));
  const jobs = [['home', home], ...CASES.map((c, i) => [slug(c.client), casePage(c, i)])];
  for (const [name, doc] of jobs) fs.writeFileSync(path.join(tmp, name + '.html'), doc);
  fs.mkdirSync(OUT, { recursive: true });
  const chrome = spawn(CHROME, ['--headless=new', `--remote-debugging-port=${PORT}`, `--user-data-dir=${path.join(tmp, 'profile')}`, '--no-first-run', '--no-default-browser-check', '--hide-scrollbars', '--window-size=1200,630', 'about:blank'], { stdio: 'ignore' });
  try {
    let target;
    for (let i = 0; i < 50 && !target; i++) {
      await sleep(200);
      try { target = await (await fetch(`http://127.0.0.1:${PORT}/json/new?about:blank`, { method: 'PUT' })).json(); } catch { /* not up yet */ }
    }
    if (!target) throw new Error('Chrome did not start at ' + CHROME);
    const page = await cdp(target.webSocketDebuggerUrl);
    await page.send('Page.enable'); await page.send('Runtime.enable');
    await page.send('Emulation.setDeviceMetricsOverride', { width: 1200, height: 630, deviceScaleFactor: 2, mobile: false });
    for (const [name] of jobs) {
      const loaded = page.until('Page.loadEventFired');
      await page.send('Page.navigate', { url: 'file://' + path.join(tmp, name + '.html') });
      await loaded;
      await page.send('Runtime.evaluate', { expression: 'document.fonts.ready.then(() => document.fonts.status)', awaitPromise: true });
      await sleep(250);
      const { data } = await page.send('Page.captureScreenshot', { format: 'png' });
      const file = path.join(OUT, name + '.png');
      fs.writeFileSync(file, Buffer.from(data, 'base64'));
      execFileSync('sips', ['--resampleWidth', '1200', file], { stdio: 'ignore' });   // rendered at 2×, delivered at 1200×630
      console.log('og', name, Math.round(fs.statSync(file).size / 1024) + ' KB');
    }
    page.close();
  } finally {
    const gone = new Promise((r) => chrome.once('exit', r));
    chrome.kill(); await gone;
    fs.rmSync(tmp, { recursive: true, force: true, maxRetries: 10, retryDelay: 200 });
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
