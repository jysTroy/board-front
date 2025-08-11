import type { Metadata } from 'next'
import './globals.css'
import Header from './_global/outlines/Header'
import Footer from './_global/outlines/Footer'

export const metadata: Metadata = {
  title: '게시판',
  description: '(게시판 설명 들어올 곳)',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
