// Many visitors have no default mail app, so a bare mailto click does nothing.
// This turns every mailto link on the page into a chooser: Gmail, Outlook,
// the mail app, or copy the address. Plain JS so the static preview can reuse it.
export function setupContactChooser() {
  const dialog = document.getElementById('contact-dialog')
  if (!dialog || typeof dialog.showModal !== 'function') return () => {}

  const pick = (key) => dialog.querySelector(`[data-cd="${key}"]`)
  const address = pick('address')
  const copyBtn = pick('copy')
  const enc = encodeURIComponent

  function onDocumentClick(e) {
    const link = e.target.closest('a[href^="mailto:"]')
    if (!link || dialog.contains(link)) return
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()

    const href = link.getAttribute('href')
    const url = new URL(href)
    const to = decodeURIComponent(url.pathname)
    const subject = url.searchParams.get('subject') || ''
    const body = url.searchParams.get('body') || ''

    pick('gmail').href = `https://mail.google.com/mail/?view=cm&fs=1&to=${enc(to)}&su=${enc(subject)}&body=${enc(body)}`
    pick('outlook').href = `https://outlook.live.com/mail/0/deeplink/compose?to=${enc(to)}&subject=${enc(subject)}&body=${enc(body)}`
    pick('app').href = href
    address.textContent = to
    copyBtn.textContent = 'Copy'
    dialog.showModal()
  }

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(address.textContent)
      copyBtn.textContent = 'Copied'
    } catch {
      const range = document.createRange()
      range.selectNodeContents(address)
      const selection = window.getSelection()
      selection.removeAllRanges()
      selection.addRange(range)
      copyBtn.textContent = 'Selected'
    }
  }

  function onDialogClick(e) {
    // A click on the backdrop lands on the dialog element itself
    if (e.target === dialog || e.target.closest('[data-cd="close"]')) dialog.close()
    else if (e.target.closest('[data-cd="copy"]')) copyAddress()
    else if (e.target.closest('[data-cd="gmail"], [data-cd="outlook"], [data-cd="app"]')) dialog.close()
  }

  document.addEventListener('click', onDocumentClick)
  dialog.addEventListener('click', onDialogClick)
  return () => {
    document.removeEventListener('click', onDocumentClick)
    dialog.removeEventListener('click', onDialogClick)
  }
}
