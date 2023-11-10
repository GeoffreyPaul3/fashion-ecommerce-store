import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store',
  description: 'Expertly designed goods for work, home and travel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
