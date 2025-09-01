import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stimulus Assistance Portal | Official Government Portal',
  description: 'Claim your rightful stimulus assistance funds with our secure, trusted platform. Check eligibility in under 2 minutes.',
  generator: 'v0.app',
  keywords: 'stimulus assistance, government portal, stimulus funds, eligibility check, USA.gov',
  authors: [{ name: 'Stimulus Assistance Portal' }],
  creator: 'Stimulus Assistance Portal',
  publisher: 'Stimulus Assistance Portal',
  robots: 'index, follow',
  openGraph: {
    title: 'Stimulus Assistance Portal',
    description: 'Official government portal for claiming stimulus assistance funds',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stimulus Assistance Portal',
    description: 'Official government portal for claiming stimulus assistance funds',
  },
  icons: {
    icon: '/Adobe Express - file.png',
    shortcut: '/Adobe Express - file.png',
    apple: '/Adobe Express - file.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
