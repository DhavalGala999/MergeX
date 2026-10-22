'use client'

import { useState } from 'react'
import { COMPANY, CONSULT_MAILTO, NAV } from './content'

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container">
        <a className="logo" href="#top" aria-label={`${COMPANY} home`}>{COMPANY}</a>
        <nav className="nav" aria-label="Main">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="btn btn-primary btn-sm header-cta" href={CONSULT_MAILTO}>Get a free consultation</a>
          <button
            className="menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      <div className="mobile-menu" id="mobile-menu" hidden={!open}>
        <div className="container">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
        </div>
      </div>
    </header>
  )
}
