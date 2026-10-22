const PATHS = {
  check: <path d="M5 10.5l3.2 3.2L15 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
  arrow: <path d="M4 10h11M11 6l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />,
  chev: <path d="M5.5 8l4.5 4.5L14.5 8" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />,
  mail: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="4.5" width="15" height="11" rx="2" />
      <path d="M3 5.5l7 5.5 7-5.5" />
    </g>
  ),
}

// bare: no .i sizing class, so the parent's CSS sizes it (used inside .flow)
export function Icon({ name, bare = false }) {
  return (
    <svg className={bare ? undefined : 'i'} viewBox="0 0 20 20" aria-hidden="true">
      {PATHS[name]}
    </svg>
  )
}
