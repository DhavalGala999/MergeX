'use client'

import { useEffect } from 'react'
import { EMAIL } from './content'
import { setupContactChooser } from './contactChooser'

export default function ContactDialog() {
  useEffect(() => setupContactChooser(), [])

  return (
    <dialog className="contact-dialog" id="contact-dialog" aria-labelledby="contact-dialog-title">
      <div className="cd-inner">
        <div className="cd-head">
          <h2 id="contact-dialog-title">Email us</h2>
          <button type="button" className="cd-close" data-cd="close" aria-label="Close">×</button>
        </div>
        <p className="cd-text">Choose how you&apos;d like to write to us. Your email opens with the details ready to fill in.</p>
        <div className="cd-address">
          <span data-cd="address">{EMAIL}</span>
          <button type="button" className="btn btn-outline btn-sm" data-cd="copy">Copy</button>
        </div>
        <div className="cd-actions">
          <a className="btn btn-primary" data-cd="gmail" href={`mailto:${EMAIL}`} target="_blank" rel="noopener noreferrer">Open in Gmail</a>
          <a className="btn btn-outline" data-cd="outlook" href={`mailto:${EMAIL}`} target="_blank" rel="noopener noreferrer">Open in Outlook</a>
          <a className="btn btn-outline" data-cd="app" href={`mailto:${EMAIL}`}>Use my mail app</a>
        </div>
      </div>
    </dialog>
  )
}
