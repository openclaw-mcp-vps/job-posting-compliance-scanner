import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Job Posting Compliance Scanner — Scan job posts for discriminatory language',
  description: 'AI scans job descriptions for biased language, salary disclosure compliance, and accessibility requirements. Built for HR teams and recruiting agencies.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d3ef756a-8dc9-43aa-9db7-5f79fdc4bb50"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
