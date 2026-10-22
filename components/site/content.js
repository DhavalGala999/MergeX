export const COMPANY = 'Altivra'
export const EMAIL = 'sales.altivra@gmail.com'
export const SITE_URL = 'https://altivra.in'
export const TITLE = 'Altivra · ERP, mobile apps, web apps and websites'
export const DESCRIPTION = 'Altivra implements ERPNext and builds mobile apps, web apps and websites for businesses in Mumbai, Pune and across India.'

const CONSULT_BODY = [
  'Hello Altivra team,',
  '',
  'I would like a free consultation.',
  '',
  'Name:',
  'Company:',
  'What we need (ERP, mobile app, web app, website, other):',
  'Industry:',
  'City:',
  'About the requirement:',
  '',
].join('\n')

export const CONSULT_MAILTO =
  `mailto:${EMAIL}?subject=${encodeURIComponent('Free consultation request')}&body=${encodeURIComponent(CONSULT_BODY)}`

export const NAV = [
  { href: '#process', label: 'How we work' },
  { href: '#faq', label: 'FAQs' },
  { href: '#contact', label: 'Contact' },
]

export const ASSURANCES = [
  'Fixed quotes, paid by milestone',
  'No per-user licence fees on ERPNext',
  'Hosted in India or on your own servers',
  'Based in Mumbai and Pune',
]

export const SERVICES = [
  {
    title: 'ERPNext implementation',
    text: 'One system for purchase, stock, production, sales, accounts and HR, configured to how you work.',
    forWhom: 'For businesses moving off Tally and Excel',
    core: true,
  },
  {
    title: 'Custom software',
    text: 'Workflows, approvals, costing engines and CRMs built around a process no product fits.',
    forWhom: 'For unique processes',
  },
  {
    title: 'Mobile apps',
    text: 'Android and iOS apps for customers, field teams and the shop floor. Offline when needed.',
    forWhom: 'For customers and teams',
  },
  {
    title: 'Web apps and SaaS',
    text: 'Customer portals, dashboards, booking platforms and complete SaaS products.',
    forWhom: 'For businesses and startups',
  },
  {
    title: 'Websites',
    text: 'Fast, mobile-first websites and online stores that bring in enquiries.',
    forWhom: 'For being found online',
  },
  {
    title: 'Integrations',
    text: 'GST e-invoicing, e-way bill, Tally, UPI, WhatsApp, Amazon and Flipkart, connected.',
    forWhom: "For systems that don't talk",
  },
]

export const DOMAINS = [
  {
    id: 'con',
    name: 'Construction and projects',
    headline: 'Control cost on every site, before the overrun happens.',
    intro: 'For EPC contractors, builders and interior firms, connecting head office with every site.',
    built: [
      'BOQ and estimation',
      'Project budgets against actuals',
      'Material requests and site stores',
      'Subcontractor work orders and billing',
      'RA bills',
      'Site progress app with photos and geo-tags',
    ],
    flow: ['BOQ', 'Material Request', 'Site Store', 'Subcontractor Bill', 'RA Bill'],
  },
  {
    id: 'mfg',
    name: 'Manufacturing',
    headline: 'From raw material to dispatch, one system for your entire plant.',
    intro: 'For FMCG, food, personal care, chemicals, packaging and pharma manufacturers, including multi-level BOMs from raw material to finished packs.',
    built: [
      'Multi-level BOM and MRP',
      'Production planning and work orders',
      'Job work with GST-compliant challans',
      'Incoming, in-process and final QC',
      'Batch and serial tracking, product costing',
      'Shop-floor app for production entries',
    ],
    flow: ['Sales Order', 'BOM', 'Work Order', 'Job Card', 'Quality Inspection', 'Delivery Note'],
  },
  {
    id: 'wh',
    name: 'Warehousing and logistics',
    headline: "Know exactly what's in every bin, and ship it right the first time.",
    intro: 'For 3PL providers, distributors and companies with their own warehouses.',
    built: [
      'Bin and rack mapping',
      'Barcode and RFID scanning',
      'Inward, putaway, pick, pack and ship',
      'FIFO and FEFO, e-way bill generation',
      'Handheld scanner app',
      'Client portal with live stock',
    ],
    flow: ['Purchase Receipt', 'Putaway', 'Pick List', 'Delivery Note', 'e-way bill'],
  },
  {
    id: 'svc',
    name: 'Service industry',
    headline: 'Bill every hour, renew every contract, meet every SLA.',
    intro: 'For consulting firms, agencies, AMC providers and facility management companies.',
    built: [
      'Contract and AMC management with renewal alerts',
      'Timesheets and project billing',
      'Ticketing with SLA timers',
      'Technician app with job cards and sign-off',
      'Attendance and payroll with PF, ESI and PT',
    ],
    flow: ['Contract', 'Ticket', 'Job Card', 'Timesheet', 'Sales Invoice'],
  },
  {
    id: 'ecom',
    name: 'E-commerce and retail',
    headline: 'One inventory across your stores, website and marketplaces.',
    intro: 'For D2C brands, retailers and multi-channel sellers.',
    built: [
      'Marketplace and website stock sync',
      'Central order management',
      'POS for stores',
      'Warehouse and returns management',
      'Customer app with loyalty',
      'UPI and payment gateway integration',
    ],
    flow: ['Marketplace order', 'Sales Order', 'Pick List', 'Delivery Note', 'Return'],
  },
  {
    id: 'pharma',
    name: 'Pharma and healthcare',
    headline: 'Batch traceability and audit-ready records, every day.',
    intro: 'For pharma manufacturers, distributors, hospitals and diagnostic centres.',
    built: [
      'Batch and expiry tracking',
      'QC and QA workflows',
      'GMP documentation',
      'Near-expiry alerts',
      'Hospital management: OPD, IPD, pharmacy, lab',
      'TPA and insurance billing',
    ],
    flow: ['Purchase Receipt', 'Quality Inspection', 'Batch', 'Delivery Note'],
  },
  {
    id: 'fmcg',
    name: 'FMCG and distribution',
    headline: "See secondary sales, distributor stock and every salesman's beat.",
    built: [
      'Distributor management system',
      'Salesman app with beat planning and order booking',
      'Scheme and discount management',
      'Secondary sales visibility',
      'Van sales',
      'Claims settlement',
    ],
    flow: ['Beat Plan', 'Sales Order', 'Van Sale', 'Scheme Claim'],
  },
  {
    id: 'tex',
    name: 'Textiles and apparel',
    headline: 'Style, size and colour, tracked from yarn to finished garment.',
    built: [
      'Style, size and colour matrix',
      'Job work for dyeing, printing and stitching',
      'Lot and roll tracking',
      'Process-wise costing',
      'Order-wise production tracking',
      'Barcode-based dispatch',
    ],
    flow: ['Style', 'Work Order', 'Job Work', 'Lot', 'Delivery Note'],
  },
]

export const LAYERS = [
  { key: 'a', name: 'Customers and team', sub: 'What people use', chips: ['Website', 'Customer app', 'Field app', 'Dealer portal', 'Dashboards'] },
  { key: 'b', name: 'Integrations', sub: 'What connects', chips: ['GST e-invoice', 'e-way bill', 'UPI', 'WhatsApp', 'Tally', 'Amazon · Flipkart'] },
  { key: 'core', name: 'Core system', sub: 'ERPNext', chips: ['Purchase', 'Stock', 'Production', 'Sales', 'Accounts', 'HR and payroll'] },
  { key: 'd', name: 'Your data', sub: 'Where it lives', chips: ['Hosted in India or on your servers', 'Daily backups', 'Role-based access'] },
]

export const STEPS = [
  { title: 'Discovery', time: '1–2 weeks', text: 'We study your processes, reports and pain points on site.', lead: 'You get', rest: 'a process map and a solution blueprint.' },
  { title: 'Solution design', time: '1–2 weeks', text: 'Workflows, screens and reports designed.', lead: 'You approve', rest: 'a clickable prototype before the build starts.' },
  { title: 'Build and configure', time: '4–12 weeks', text: 'Two-week cycles.', lead: 'You see', rest: 'a demo of working software at the end of each one.' },
  { title: 'Data migration and testing', time: 'Alongside build', text: 'Masters and balances moved from Tally, Excel or old systems.', lead: 'You test', rest: 'with real data until the numbers match.' },
  { title: 'Training and go-live', time: 'Launch week', text: 'Role-wise training in English, Hindi or your language.', lead: 'We are with you', rest: 'on site or online for launch week.' },
  { title: 'Support after go-live', time: 'After launch', text: 'We stay close while your team settles in.', lead: 'Then', rest: 'ongoing support as your business grows.' },
]

export const FAQS = [
  { q: 'How much does it cost?', a: 'It depends on users, modules and customisation for ERP, and on scope for apps and websites. After a free consultation we give a fixed quote with milestone-based payments.' },
  { q: 'Do I need an ERP to get an app or website built?', a: 'No. We build apps, web apps and websites on their own, and they can connect to your other systems later if you want.' },
  { q: 'How long does an ERP implementation take?', a: '8 to 12 weeks for a single-location business; 12 to 24 weeks for multi-plant or multi-branch rollouts, done in phases.' },
  { q: 'Will it handle GST, e-invoicing and e-way bill?', a: 'Yes. Every system we deliver supports GST returns, e-invoicing, e-way bill, TDS and multi-GSTIN setups.' },
  { q: 'Is our data safe?', a: 'Data is hosted on secure servers in India or on your own servers, with role-based access, audit logs and daily backups.' },
]
