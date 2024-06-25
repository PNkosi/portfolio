import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Perfect Nkosi — Web Developer',
  description: `Hello there! 👋 I'm Perfect Nkosi, a passionate web developer with a
  knack for turning ideas into interactive and visually stunning digital
  experiences.`,
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <meta name="google-adsense-account" content="ca-pub-3451785322840347">
      </head>
      <body className={inter.className} id='home'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
