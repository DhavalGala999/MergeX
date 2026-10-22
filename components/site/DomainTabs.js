'use client'

import { Fragment, useRef, useState } from 'react'
import { DOMAINS } from './content'
import { Icon } from './Icons'

export default function DomainTabs() {
  const [active, setActive] = useState(DOMAINS[0].id)
  const tabRefs = useRef({})

  function select(id, focus) {
    setActive(id)
    const el = tabRefs.current[id]
    if (!el) return
    if (focus) el.focus()
    el.scrollIntoView({ block: 'nearest', inline: 'nearest' })
  }

  function onKeyDown(e, i) {
    const last = DOMAINS.length - 1
    let next = null
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = i === last ? 0 : i + 1
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = i === 0 ? last : i - 1
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = last
    if (next === null) return
    e.preventDefault()
    select(DOMAINS[next].id, true)
  }

  return (
    <div className="domains">
      <div className="tablist-wrap">
        <div className="tablist" role="tablist" aria-label="Domains">
          {DOMAINS.map((d, i) => (
            <button
              key={d.id}
              ref={(el) => { tabRefs.current[d.id] = el }}
              className="tab"
              type="button"
              role="tab"
              id={`t-${d.id}`}
              aria-controls={`p-${d.id}`}
              aria-selected={active === d.id}
              tabIndex={active === d.id ? 0 : -1}
              onClick={() => select(d.id, false)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              {d.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        {DOMAINS.map((d) => (
          <div
            key={d.id}
            className="panel"
            role="tabpanel"
            id={`p-${d.id}`}
            aria-labelledby={`t-${d.id}`}
            hidden={active !== d.id}
          >
            <div className="panel-head">
              <span className="eyebrow">{d.name}</span>
              <h3>{d.headline}</h3>
              {d.intro && <p>{d.intro}</p>}
            </div>

            {d.built && (
              <div>
                <span className="built-label">What we have built</span>
                <ul className="built">
                  {d.built.map((item) => (
                    <li key={item}><Icon name="check" />{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {d.flow && (
              <div>
                <p className="flow-cap">How the records flow</p>
                <div className="flow-wrap">
                  <div className="flow">
                    {d.flow.map((step, i) => (
                      <Fragment key={step}>
                        {i > 0 && <Icon name="arrow" bare />}
                        <span>{step}</span>
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
