function App() {
  return (
    <>
      <header className="brandbar">
        <div className="brandbar-inner">
          <a href="/" className="wordmark">myoProcess</a>
          <span className="brandbar-tag">Saad Belcaid — Research &amp; Introductions</span>
        </div>
      </header>

      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="hero">
          <p className="tagline">Trusted in over $1B of B2B transactions, 2023–2025</p>
          <h1>
            Saad Belcaid routes capital, talent, and dealflow between operators who need to find each other.
          </h1>
          <p className="subline">
            Selective mandates across capital, growth, and strategic introductions.
          </p>
          <p className="proof-strip">
            Private Equity · Wealth · Banking · AI · Healthcare · Recruitment
          </p>
          <p className="memo-link">
            <a href="/memo">Read memorandum →</a>
          </p>
        </section>

        <hr className="divider" />

        {/* ── Current Signals ──────────────────────────────── */}
        <section className="section">
          <h2>
            Current Signals
            <span className="meta">April 2026</span>
          </h2>
          <div className="row-list">
            <div className="row signal">
              <span className="badge">3</span>
              <span className="value">UK wealth firms hiring succession advisors</span>
            </div>
            <div className="row signal">
              <span className="badge">2</span>
              <span className="value">AI companies expanding enterprise sales</span>
            </div>
            <div className="row signal">
              <span className="badge">1</span>
              <span className="value">Midwest bank increasing SBA appetite</span>
            </div>
            <div className="row signal">
              <span className="badge">4</span>
              <span className="value">FDA remediation windows opened this week</span>
            </div>
          </div>
          <p className="signals-foot">
            Updated 25 April 2026 ·{" "}
            <a href="mailto:saad@myoprocess.com">saad@myoprocess.com</a>{" "}
            if any of these are yours
          </p>
        </section>

        <hr className="divider" />

        {/* ── Recent Work ──────────────────────────────────── */}
        <section className="section">
          <h2>Recent Work</h2>
          <div className="row-list">
            <div className="row">
              <span className="label">Hippocratic AI</span>
              <span className="value">2 partners signed in 60 days</span>
            </div>
            <div className="row">
              <span className="label">Connect Group</span>
              <span className="value">$105K added in 90 days</span>
            </div>
            <div className="row">
              <span className="label">Crawford Thomas</span>
              <span className="value">$100K in 6 months</span>
            </div>
            <div className="row">
              <span className="label">Vention</span>
              <span className="value">$85K in under 60 days</span>
            </div>
            <div className="row">
              <span className="label">ForPlayers</span>
              <span className="value">€70K in 90 days</span>
            </div>
            <div className="row">
              <span className="label">FabuLingua</span>
              <span className="value">5 clients signed in 48 days</span>
            </div>
            <div className="row">
              <span className="label">Regent Peak Wealth Advisors</span>
              <span className="value">6 qualified intros in 46 days</span>
            </div>
            <div className="row">
              <span className="label">Elate Staffing</span>
              <span className="value">20 placements in 55 days</span>
            </div>
            <div className="row">
              <span className="label">HelpCare AI</span>
              <span className="value">4 enterprise healthcare deals</span>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ── Research ─────────────────────────────────────── */}
        <section className="section">
          <h2>Research</h2>

          <a href="/research/pre-fih-runway-gap" className="research-row">
            <span className="num">Issue 01</span>
            <span className="title">The Pre-FIH Runway Gap</span>
            <span className="date">April 2026</span>
          </a>

          <p className="research-coming-label">Coming</p>

          <div className="research-row coming">
            <span className="num">Issue 02</span>
            <span className="title">On Founder Liquidity Windows</span>
            <span className="date">soon</span>
          </div>
          <div className="research-row coming">
            <span className="num">Issue 03</span>
            <span className="title">Timing and Persuasion in B2B Markets</span>
            <span className="date">soon</span>
          </div>
          <div className="research-row coming">
            <span className="num">Issue 04</span>
            <span className="title">Thin Markets and High-Leverage Introductions</span>
            <span className="date">soon</span>
          </div>
        </section>

        <hr className="divider" />

        {/* ── Engagement ───────────────────────────────────── */}
        <section className="section">
          <p className="engagement">Currently accepting 2 new counterparties this quarter.</p>
          <div className="contact">
            <a href="mailto:saad@myoprocess.com">saad@myoprocess.com</a>
            <a href="https://linkedin.com/in/saadbelcaid" target="_blank" rel="noreferrer noopener">
              linkedin.com/in/saadbelcaid
            </a>
          </div>
        </section>

        <footer className="foot">
          <span>myoProcess · Saad Belcaid</span>
          <span className="geo">Cyprus · New York · Remote</span>
          <span className="right">© 2026</span>
        </footer>
        <p className="proof-quiet">Selected work across $1B+ transaction environments.</p>
      </main>
    </>
  );
}

export default App;
