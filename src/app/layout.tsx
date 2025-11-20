import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MiniSudoku - Play and Win USDC',
  description: 'Competitive Sudoku game on Base chain. Play for $0.30 USDC, win prizes!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
