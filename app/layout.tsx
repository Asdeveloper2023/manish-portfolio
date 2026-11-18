import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Manish Kushwaha — Cybersecurity & Software Developer',
  description: 'Portfolio of Manish Kushwaha, a cybersecurity and software developer focused on digital forensics, secure systems, and practical software.',
  generator: 'v0.app',
  keywords: ['Manish Kushwaha', 'cybersecurity', 'digital forensics', 'software development', 'portfolio'],
  authors: [{ name: 'Manish Kushwaha', url: 'https://github.com/Asdeveloper2023' }],
  openGraph: {
    title: 'Manish Kushwaha — Cybersecurity & Software Developer',
    description: 'Explore Manish Kushwaha’s cybersecurity, digital forensics, and software projects.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f4ec' },
    { media: '(prefers-color-scheme: dark)', color: '#101820' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
