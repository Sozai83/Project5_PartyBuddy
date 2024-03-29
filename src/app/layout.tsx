import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Party Buddy',
  description: 'A web application you can help you decide what cocktail you can make for the party tonight!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link  rel="icon" href="./favicon.png" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
