import SiteHeader from '@/components/site/SiteHeader'
import DomainTabs from '@/components/site/DomainTabs'
import ContactDialog from '@/components/site/ContactDialog'
import { Icon } from '@/components/site/Icons'
import {
  ASSURANCES, COMPANY, CONSULT_MAILTO, DESCRIPTION, EMAIL, FAQS, LAYERS, NAV, SERVICES, SITE_URL, STEPS,
} from '@/components/site/content'

const ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: COMPANY,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/opengraph-image.png`,
  email: EMAIL,
  description: DESCRIPTION,
  areaServed: [
    { '@type': 'City', name: 'Mumbai' },
    { '@type': 'City', name: 'Pune' },
    { '@type': 'Country', name: 'India' },
  ],
  knowsAbout: ['ERPNext', ...SERVICES.map((s) => s.title)],
}

const OPERATIONS = [
  { op: 'Mixing', ws: 'Vessel 1', status: 'Completed', tone: 'ok', qty: '240 kg' },
  { op: 'Filling and sealing', ws: 'Line 2', status: 'In progress', tone: 'active', qty: '1,220' },
  { op: 'Cartoning', ws: 'Line 2', status: 'Pending', tone: 'wait', qty: '0' },
  { op: 'Final QC', ws: 'QC lab', status: 'Pending', tone: 'wait', qty: '–' },
]

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">ERPNext · Mobile apps · Web apps · Websites</span>
          <h1>ERP, apps and websites, built by people who know your industry.</h1>
          <p className="lead">
            We implement ERPNext and build the mobile apps, web apps and websites around it, or on their own.
            Every project starts from workflows we have already delivered in construction, manufacturing,
            warehousing, retail and four more domains.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#domains">Find your industry</a>
          </div>
          <ul className="assure">
            {ASSURANCES.map((item) => (
              <li key={item}><Icon name="check" />{item}</li>
            ))}
          </ul>
        </div>

        <div className="visual" role="img" aria-label="Example: a production work order in ERPNext and the shop-floor app that updates it">
          <div className="win" aria-hidden="true">
            <div className="win-bar">
              <span className="dots"><i /><i /><i /></span>
              <span className="crumb">Manufacturing / Work Order / <b>MFG-WO-2026-00041</b></span>
            </div>
            <div className="win-body">
              <div className="wo-head">
                <div>
                  <div className="wo-title">Face wash, 100 ml tube</div>
                  <div className="wo-sub">BOM-FW100-003 · Line 2 · Due 24 Oct</div>
                </div>
                <span className="pill pill-active">In process</span>
              </div>
              <div className="kpis">
                <div><span>Planned</span><b>2,400</b></div>
                <div><span>Produced</span><b>1,220</b></div>
                <div><span>Process loss</span><b>6</b></div>
                <div><span>Pending</span><b>1,174</b></div>
              </div>
              <div className="prog"><span /></div>
              <div className="prog-label"><span>51% complete</span><span>Updated from shop floor</span></div>
              <table className="ops">
                <thead>
                  <tr><th>Operation</th><th className="ws">Workstation</th><th>Status</th><th className="num">Qty</th></tr>
                </thead>
                <tbody>
                  {OPERATIONS.map((row) => (
                    <tr key={row.op}>
                      <td>{row.op}</td>
                      <td className="ws">{row.ws}</td>
                      <td><span className={`pill pill-${row.tone}`}>{row.status}</span></td>
                      <td className="num">{row.qty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="phone" aria-hidden="true">
            <div className="ph-screen">
              <div className="ph-top"><b>Job Card</b><span className="ph-sync">Synced</span></div>
              <div className="ph-body">
                <div className="ph-id">JOB-CARD-2026-00128</div>
                <div className="ph-op">Filling and sealing · Line 2</div>
                <div className="ph-label">Completed quantity</div>
                <div className="ph-qty"><i>−</i><span>1,220</span><i>+</i></div>
                <div className="ph-row"><span>Shift</span><b>A · 09:00–13:00</b></div>
                <div className="ph-actions"><span className="ph-btn ghost">Pause</span><span className="ph-btn">Save entry</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="section ruled" id="services">
      <div className="container">
        <div className="sec-head split">
          <div>
            <span className="eyebrow">What we build</span>
            <h2>Start with one product, or connect them all.</h2>
          </div>
          <p>You don&apos;t need an ERP to work with us. Each service stands on its own, and anything we build can connect to the rest of your business later.</p>
        </div>
        <div className="svc-grid">
          {SERVICES.map((s) => (
            <div key={s.title} className={s.core ? 'svc core' : 'svc'}>
              <div>
                {s.core && <span className="tag-core">Core expertise</span>}
                <h3>{s.title}</h3>
              </div>
              <p>{s.text}</p>
              <span className="for">{s.forWhom}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Domains() {
  return (
    <section className="section bg-2" id="domains">
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow">Domains</span>
          <h2>We have already built for your industry.</h2>
          <p>Eight domains where our team has delivered working systems. Choose yours to see what we have built and how the records flow.</p>
        </div>
        <DomainTabs />
      </div>
    </section>
  )
}

function ConnectedSystem() {
  return (
    <section className="section dark">
      <div className="container layers-grid">
        <div className="sec-head">
          <span className="eyebrow">One connected system</span>
          <h2>One team for every part of the system.</h2>
          <p>When the ERP, the app and the website come from different vendors, the problems sit in the gaps between them. We build every part, so your data is entered once and works everywhere.</p>
          <ul className="points">
            <li><Icon name="check" /><span><b>One plan, one point of contact</b>Design, build and integration agreed together.</span></li>
            <li><Icon name="check" /><span><b>Data entered once</b>An order from the website is the same order in your books.</span></li>
            <li><Icon name="check" /><span><b>One team accountable</b>When something breaks, there is nobody else to point at.</span></li>
          </ul>
        </div>
        <div className="stack" aria-label="The parts of a connected business system">
          {LAYERS.map((l) => (
            <div key={l.key} className={`layer ${l.key}`}>
              <div className="layer-name">{l.name}<small>{l.sub}</small></div>
              <div className="chips">{l.chips.map((c) => <span key={c}>{c}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="sec-head split">
          <div>
            <span className="eyebrow">How we work</span>
            <h2>Six stages, with a sign-off at each one.</h2>
          </div>
          <p>A dedicated project manager, weekly status reports and payments tied to milestones. You see working software every two weeks.</p>
        </div>
        <ol className="steps">
          {STEPS.map((s, i) => (
            <li key={s.title}>
              <div className="step-top">
                <span className="step-n">{i + 1}</span>
                <h3>{s.title}</h3>
                <span className="step-time">{s.time}</span>
              </div>
              <p>{s.text} <b>{s.lead}</b> {s.rest}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section className="section bg-2" id="faq">
      <div className="container faq-grid">
        <div className="sec-head">
          <span className="eyebrow">Questions</span>
          <h2>What people ask before they get in touch.</h2>
          <p>Something else on your mind? Email us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
        </div>
        <div>
          {FAQS.map((f, i) => (
            <details key={f.q} className="q" open={i === 0}>
              <summary>{f.q}<Icon name="chev" /></summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section dark" id="contact">
      <div className="container cta-grid">
        <div>
          <h2>Tell us what you need built.</h2>
          <p className="lead">An ERP, an app, a website, or something you can&apos;t quite name yet. The first consultation is free.</p>
          <div className="cta-row">
            <a className="btn btn-light" href={CONSULT_MAILTO}><Icon name="mail" />Get a free consultation</a>
          </div>
          <p className="mail-line">Or write to us directly at <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        </div>
        <div className="next">
          <h3>What happens next</h3>
          <ol>
            <li><span><b>We reply to your email</b>And set up a call to understand what you need.</span></li>
            <li><span><b>Free consultation</b>45 minutes with someone who knows your industry. For ERP, a process audit.</span></li>
            <li><span><b>Demo or estimate, then a fixed quote</b>Built around your workflow, with milestone payments.</span></li>
          </ol>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <a className="logo" href="#top" aria-label={`${COMPANY} home`}>{COMPANY}</a>
            <p>ERP, mobile apps, web apps and websites for businesses in Mumbai, Pune and across India.</p>
          </div>
          <div className="foot-col">
            <h4>On this page</h4>
            <ul>
              <li><a href="#services">What we build</a></li>
              <li><a href="#domains">Domains</a></li>
              {NAV.filter((n) => n.href !== '#contact').map((n) => (
                <li key={n.href}><a href={n.href}>{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="foot-col">
            <h4>Contact</h4>
            <ul>
              <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li>Mumbai · Pune</li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {year} {COMPANY}</span>
          <span>ERPNext · Mobile apps · Web apps · Websites</span>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION).replace(/</g, '\\u003c') }}
      />
      <SiteHeader />
      <main id="top">
        <Hero />
        <Services />
        <Domains />
        <ConnectedSystem />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <div className="action-bar">
        <a className="btn btn-primary" href={CONSULT_MAILTO}><Icon name="mail" />Get a free consultation</a>
      </div>
      <ContactDialog />
    </>
  )
}
