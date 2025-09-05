import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Bottom Line Generator',
  description: 'Generate sermon bottom lines with the PREACH framework'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-gradient-to-b from-brand-25 via-white to-white">
        <header className="border-b bg-white/70 backdrop-blur-xs">
          <div className="container-narrow flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-brand-700 shadow-soft"></div>
              <div className="leading-tight">
                <p className="text-sm text-slate-500">Art of Preaching</p>
                <h1 className="text-lg font-bold tracking-tight">Bottom Line Generator</h1>
              </div>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
