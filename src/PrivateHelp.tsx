import { useEffect } from 'react';
import { track } from '@vercel/analytics';

export default function PrivateHelp() {
  useEffect(() => {
    document.title = 'Private Help With Saad';
  }, []);

  return (
    <>
      <header className="brandbar">
        <div className="brandbar-inner">
          <a href="/" className="wordmark">myoProcess</a>
          <span className="brandbar-tag">Saad Belcaid — Private</span>
        </div>
      </header>

      <main>
        <section className="hero">
          <p className="tagline">Private · 5 spots</p>
          <h1>I'm taking on 5 people directly.</h1>
        </section>

        <div className="note">
          <p>
            Quick context: myoProcess is doing well. There's a team running it
            now and an investor came in, so for the first time in a while I
            actually have free time.
          </p>
          <p>
            This is what I want to spend it on. It's the part I'm best at and
            enjoy most: taking someone who already gets the system and helping
            them get to the income they're actually after, a lot faster than
            they'd get there alone.
          </p>
          <p>
            That's really the whole thing. I compress the time. Instead of
            guessing for months about your niche, your offer, your copy, what's
            actually broken, you borrow the version of me that already walked it.
          </p>
          <p>
            It's not a course, and it's not a call you book. It's me working
            with you directly until you're actually moving.
          </p>
        </div>

        <hr className="divider" />

        <section className="section">
          <p className="engagement">
            5 spots. That's all the time I have for it right now.
          </p>
          <p className="note-cta">
            If you want one, message me and we'll figure out if it's a fit.
            That's the only step.
          </p>
          <a
            href="https://www.skool.com/ssmasters"
            target="_blank"
            rel="noreferrer noopener"
            className="dm-button"
            onClick={() => track('private_help_dm_click')}
          >
            Message me on Skool →
          </a>
        </section>

        <footer className="foot">
          <span>myoProcess · Saad Belcaid</span>
          <span className="geo">Cyprus · New York · Remote</span>
          <span className="right">© 2026</span>
        </footer>
      </main>
    </>
  );
}
