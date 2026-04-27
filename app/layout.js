import './globals.css'
import { Toaster } from '@/components/ui/sonner'

export const metadata = {
  title: 'MergeX — Premium Next.js, React & ERPNext Studio',
  description: 'MergeX is a boutique engineering studio building beautiful Next.js apps, React products, and ERPNext solutions for ambitious teams.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#07070a] text-zinc-100 antialiased selection:bg-indigo-500/30 selection:text-white">
        {children}
        <Toaster theme="dark" richColors position="top-center" />
      </body>
    </html>
  )
}
