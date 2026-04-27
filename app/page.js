'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'
import {
  Code2, Database, Layers, Palette, ArrowRight, Sparkles, Rocket,
  CheckCircle2, Github, Linkedin, Mail, Send, Zap, Shield, Globe,
  TrendingUp, Users, Award, Clock, MessageSquareCode, Menu, X, ArrowUpRight
} from 'lucide-react'

const PROJECTS = [
  {
    title: 'Helios ERP',
    subtitle: 'ERPNext customization for a manufacturing client',
    tags: ['ERPNext', 'Frappe', 'Python'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTZ8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MHx8fGJsYWNrfDE3NzcyNzg1NTl8MA&ixlib=rb-4.1.0&q=85',
    metric: '38% ops efficiency',
  },
  {
    title: 'Nimbus Analytics',
    subtitle: 'Real-time SaaS analytics dashboard on Next.js 14',
    tags: ['Next.js', 'TypeScript', 'Postgres'],
    image: 'https://images.pexels.com/photos/10020092/pexels-photo-10020092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    metric: '< 80ms TTFB',
  },
  {
    title: 'Aurora Commerce',
    subtitle: 'Headless e-commerce with ERPNext as the backend',
    tags: ['React', 'ERPNext', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1656264142377-22ae3fefdbc3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwyfHxlY29tbWVyY2UlMjBtb2NrdXAlMjBkYXJrfGVufDB8fHxibGFja3wxNzc3Mjc4NTYzfDA&ixlib=rb-4.1.0&q=85',
    metric: '2.1x conversion lift',
  },
  {
    title: 'Orbit CRM',
    subtitle: 'Custom CRM & booking platform for a service business',
    tags: ['Next.js', 'MongoDB', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1540159453465-731d5a46060a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHw0fHxlY29tbWVyY2UlMjBtb2NrdXAlMjBkYXJrfGVufDB8fHxibGFja3wxNzcyNzg1NjN8MA&ixlib=rb-4.1.0&q=85',
    metric: '12k bookings/mo',
  },
]

const SERVICES = [
  { icon: Code2, title: 'Next.js & React', desc: 'Blazing-fast, SEO-ready web apps with App Router, Server Components & edge-grade performance.' },
  { icon: Database, title: 'ERPNext & Frappe', desc: 'End-to-end ERPNext implementations, custom doctypes, workflows and third-party integrations.' },
  { icon: Layers, title: 'Full-Stack Engineering', desc: 'From MongoDB, Postgres & APIs to shipping production — we own the whole stack.' },
  { icon: Palette, title: 'UI / UX Design', desc: 'Thoughtful, premium interfaces designed in Figma and engineered pixel-perfect in code.' },
]

const PROCESS = [
  { step: '01', title: 'Discovery', desc: 'Deep-dive workshops to map scope, success metrics and tech choices.' },
  { step: '02', title: 'Design', desc: 'Interactive Figma prototypes with a clear design system and motion specs.' },
  { step: '03', title: 'Build', desc: 'Weekly shippable releases with rigorous code review and test coverage.' },
  { step: '04', title: 'Launch & Scale', desc: 'Deployment, monitoring, performance tuning and ongoing product partnership.' },
]

const STACK = [
  'Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'shadcn/ui',
  'Node.js', 'MongoDB', 'PostgreSQL', 'ERPNext', 'Frappe', 'Python',
  'Docker', 'AWS', 'Vercel', 'Stripe', 'Framer Motion',
]

const TEAM = [
  { name: 'Team Member 01', role: 'Full-Stack Lead · Next.js / React', initials: 'T1' },
  { name: 'Team Member 02', role: 'ERPNext / Frappe Specialist', initials: 'T2' },
  { name: 'Team Member 03', role: 'UI/UX & Product Design', initials: 'T3' },
]

const TESTIMONIALS = [
  { quote: 'MergeX shipped our ERPNext rollout 2 weeks ahead of schedule and the Next.js portal looks unreal. Truly a premium team.', name: 'Placeholder Client', company: 'Ops Director, Manufacturing Co.' },
  { quote: 'The best engineering partners we have worked with. Clean code, clear communication, zero drama.', name: 'Placeholder Client', company: 'CTO, SaaS Startup' },
]

function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const links = [
    { href: '#services', label: 'Services' },
    { href: '#work', label: 'Work' },
    { href: '#process', label: 'Process' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Contact' },
  ]
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-xl bg-[#07070a]/70 border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-sky-400 animate-gradient flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="font-semibold tracking-tight text-white">MergeX</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-zinc-400 hover:text-white transition-colors">{l.label}</a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a href="#contact">
            <Button className="bg-white text-black hover:bg-zinc-200 rounded-full px-5 h-9">Start a project <ArrowRight className="ml-1.5 h-4 w-4" /></Button>
          </a>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#07070a]/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-zinc-300 hover:text-white">{l.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}>
              <Button className="bg-white text-black hover:bg-zinc-200 rounded-full w-full">Start a project</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#07070a]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-zinc-300 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Taking on 2 new projects this quarter
          </div>
        </div>

        <h1 className="animate-fade-up text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.02] text-white" style={{ animationDelay: '80ms' }}>
          Premium web products,<br />
          <span className="gradient-text animate-gradient">engineered end-to-end.</span>
        </h1>

        <p className="animate-fade-up mt-8 max-w-2xl text-lg text-zinc-400 leading-relaxed" style={{ animationDelay: '180ms' }}>
          MergeX is a boutique studio crafting beautiful <span className="text-white">Next.js</span> & <span className="text-white">React</span> apps and ambitious <span className="text-white">ERPNext</span> solutions for teams that care about the details.
        </p>

        <div className="animate-fade-up mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: '260ms' }}>
          <a href="#contact">
            <Button size="lg" className="bg-white text-black hover:bg-zinc-200 rounded-full h-12 px-6 animate-pulse-glow">
              Start a project <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <a href="#work">
            <Button size="lg" variant="outline" className="rounded-full h-12 px-6 border-white/15 bg-white/[0.02] hover:bg-white/[0.06] text-white">
              See our work
            </Button>
          </a>
        </div>

        <div className="animate-fade-up mt-20 grid grid-cols-2 md:grid-cols-4 gap-6" style={{ animationDelay: '360ms' }}>
          {[
            { icon: Rocket, label: 'Projects shipped', value: '20+' },
            { icon: Users, label: 'Happy clients', value: '10+' },
            { icon: Award, label: 'Years combined', value: '12+' },
            { icon: Clock, label: 'Avg. time-to-launch', value: '6 wks' },
          ].map((s, i) => (
            <div key={i} className="shine-border rounded-xl p-5">
              <s.icon className="h-4 w-4 text-indigo-300" />
              <div className="mt-3 text-2xl md:text-3xl font-semibold text-white">{s.value}</div>
              <div className="text-xs text-zinc-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Marquee() {
  const items = ['Next.js', 'React', 'ERPNext', 'TypeScript', 'Tailwind', 'Node.js', 'MongoDB', 'PostgreSQL', 'Frappe', 'Python', 'AWS', 'Vercel', 'Stripe']
  return (
    <section className="relative py-10 border-y border-white/5 bg-white/[0.01] overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((t, i) => (
          <div key={i} className="mx-8 text-zinc-500 text-sm md:text-base tracking-widest uppercase">{t}</div>
        ))}
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-indigo-300 mb-3">What we do</div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white max-w-2xl">Services built for ambitious teams.</h2>
          </div>
          <p className="text-zinc-400 max-w-md">Everything you need to ship a world-class product — design, engineering, integrations and ongoing partnership.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => (
            <div key={i} className="shine-border rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300 group">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 border border-white/10 flex items-center justify-center mb-5">
                <s.icon className="h-5 w-5 text-indigo-200" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">{s.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{s.desc}</p>
              <div className="mt-6 inline-flex items-center gap-1 text-xs text-zinc-500 group-hover:text-white transition-colors">
                Learn more <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Work() {
  return (
    <section id="work" className="py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <div className="text-xs uppercase tracking-[0.2em] text-indigo-300 mb-3">Selected work</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white max-w-3xl">Products we are proud to have shipped.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <div key={i} className="group shine-border rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-500">
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-transparent to-transparent" />
                <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-zinc-200">
                  <TrendingUp className="h-3 w-3 text-emerald-400" /> {p.metric}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-medium text-white">{p.title}</h3>
                    <p className="text-sm text-zinc-400 mt-1">{p.subtitle}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-zinc-500 group-hover:text-white group-hover:rotate-12 transition-all" />
                </div>
                <div className="flex flex-wrap gap-2 mt-5">
                  {p.tags.map((t, j) => (
                    <Badge key={j} variant="outline" className="border-white/10 bg-white/[0.03] text-zinc-300 font-normal">{t}</Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section id="process" className="py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <div className="text-xs uppercase tracking-[0.2em] text-indigo-300 mb-3">How we work</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white max-w-3xl">A calm, predictable process — no surprises.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROCESS.map((p, i) => (
            <div key={i} className="relative shine-border rounded-2xl p-6">
              <div className="text-xs text-indigo-300 font-mono mb-4">{p.step}</div>
              <h3 className="text-lg text-white mb-2">{p.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stack() {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-indigo-300 mb-3">Our stack</div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">Modern tools, battle-tested.</h2>
            <p className="mt-5 text-zinc-400 max-w-md leading-relaxed">We pick the right tool for the job. Here is the core of our toolkit — honed across dozens of production projects.</p>
            <div className="mt-8 flex flex-col gap-3 text-sm">
              {[
                { icon: Zap, text: 'Performance budgets on every release' },
                { icon: Shield, text: 'Security reviews & typed APIs by default' },
                { icon: Globe, text: 'Global CDN & edge-ready architectures' },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-3 text-zinc-300">
                  <b.icon className="h-4 w-4 text-indigo-300" /> {b.text}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {STACK.map((t, i) => (
              <Badge key={i} variant="outline" className="border-white/10 bg-white/[0.03] text-zinc-300 font-normal px-3.5 py-1.5 text-sm hover:bg-white/[0.06] transition-colors">
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Team() {
  return (
    <section id="team" className="py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <div className="text-xs uppercase tracking-[0.2em] text-indigo-300 mb-3">The team</div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white max-w-3xl">A small, senior crew. No hand-offs.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {TEAM.map((m, i) => (
            <div key={i} className="shine-border rounded-2xl p-6 group">
              <div className="relative h-28 w-28 rounded-2xl bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-sky-400/30 animate-gradient flex items-center justify-center mb-6 border border-white/10">
                <span className="text-3xl font-semibold text-white/80">{m.initials}</span>
              </div>
              <div className="text-lg text-white">{m.name}</div>
              <div className="text-sm text-zinc-400 mt-1">{m.role}</div>
              <div className="mt-5 flex items-center gap-3 text-zinc-500">
                <Github className="h-4 w-4 hover:text-white transition-colors cursor-pointer" />
                <Linkedin className="h-4 w-4 hover:text-white transition-colors cursor-pointer" />
                <Mail className="h-4 w-4 hover:text-white transition-colors cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="shine-border rounded-2xl p-8">
              <MessageSquareCode className="h-5 w-5 text-indigo-300 mb-4" />
              <p className="text-lg md:text-xl text-zinc-200 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 text-sm">
                <div className="text-white">{t.name}</div>
                <div className="text-zinc-500">{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', projectType: '', budget: '', message: '' })
  const update = (k, v) => setForm(f => ({ ...f, [k]: v }))
  const onSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in name, email and message.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')
      toast.success('Got it! We will reach out within 24 hours.')
      setForm({ name: '', email: '', company: '', projectType: '', budget: '', message: '' })
    } catch (err) {
      toast.error(err.message)
    } finally {
      setLoading(false)
    }
  }
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-indigo-300 mb-3">Get in touch</div>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
              Let&apos;s build something <span className="gradient-text animate-gradient">remarkable</span>.
            </h2>
            <p className="mt-6 text-zinc-400 max-w-md leading-relaxed">
              Tell us about your project. We&apos;ll reply within 24 hours with a short plan and next steps.
            </p>
            <div className="mt-10 space-y-4 text-sm">
              {[
                { icon: CheckCircle2, text: 'Free 30-min discovery call' },
                { icon: CheckCircle2, text: 'Fixed-scope quotes or retainer' },
                { icon: CheckCircle2, text: 'NDA-friendly — your ideas are safe' },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-3 text-zinc-300">
                  <b.icon className="h-4 w-4 text-emerald-400" /> {b.text}
                </div>
              ))}
            </div>
          </div>

          <Card className="shine-border bg-transparent border-0">
            <CardContent className="p-7">
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-zinc-300">Name *</Label>
                    <Input value={form.name} onChange={e => update('name', e.target.value)} placeholder="Jane Doe" className="bg-white/[0.03] border-white/10 text-white placeholder:text-zinc-500" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-zinc-300">Email *</Label>
                    <Input type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="jane@company.com" className="bg-white/[0.03] border-white/10 text-white placeholder:text-zinc-500" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-zinc-300">Company</Label>
                    <Input value={form.company} onChange={e => update('company', e.target.value)} placeholder="Acme Inc." className="bg-white/[0.03] border-white/10 text-white placeholder:text-zinc-500" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-zinc-300">Budget</Label>
                    <Input value={form.budget} onChange={e => update('budget', e.target.value)} placeholder="$5k – $25k" className="bg-white/[0.03] border-white/10 text-white placeholder:text-zinc-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-zinc-300">Project type</Label>
                  <div className="flex flex-wrap gap-2">
                    {['Next.js / React', 'ERPNext', 'Full-stack', 'UI/UX', 'Other'].map(t => (
                      <button type="button" key={t} onClick={() => update('projectType', t)} className={`px-3 py-1.5 rounded-full text-xs border transition-all ${form.projectType === t ? 'bg-white text-black border-white' : 'border-white/10 bg-white/[0.03] text-zinc-300 hover:bg-white/[0.06]'}`}>{t}</button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-zinc-300">Tell us about your project *</Label>
                  <Textarea value={form.message} onChange={e => update('message', e.target.value)} rows={5} placeholder="Goals, timeline, any links..." className="bg-white/[0.03] border-white/10 text-white placeholder:text-zinc-500 resize-none" />
                </div>
                <Button type="submit" disabled={loading} className="w-full h-12 bg-white text-black hover:bg-zinc-200 rounded-xl font-medium">
                  {loading ? 'Sending...' : <>Send message <Send className="ml-2 h-4 w-4" /></>}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="relative h-7 w-7 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-sky-400 animate-gradient flex items-center justify-center">
            <Sparkles className="h-3.5 w-3.5 text-white" />
          </div>
          <span className="font-semibold text-white">MergeX</span>
        </div>
        <div className="text-sm text-zinc-500">© {new Date().getFullYear()} MergeX. Crafted with care.</div>
        <div className="flex items-center gap-4 text-zinc-500">
          <Github className="h-4 w-4 hover:text-white transition-colors cursor-pointer" />
          <Linkedin className="h-4 w-4 hover:text-white transition-colors cursor-pointer" />
          <Mail className="h-4 w-4 hover:text-white transition-colors cursor-pointer" />
        </div>
      </div>
    </footer>
  )
}

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <Process />
      <Stack />
       <Team /> 
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
