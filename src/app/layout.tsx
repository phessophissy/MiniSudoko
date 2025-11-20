import type { Metadata } from 'next'
import './globals.css'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://minisudoku-five.vercel.app';

export const metadata: Metadata = {
  title: 'MiniSudoku - Play and Win USDC',
  description: 'Competitive Sudoku game on Base chain. Play for $0.30 USDC, win prizes!',
  metadataBase: new URL(APP_URL),
  openGraph: {
    title: 'MiniSudoku - Play and Win USDC',
    description: 'Competitive Sudoku game on Base chain. Pay $0.30 USDC to play, compete for the 24-hour prize pool.',
    images: [`${APP_URL}/api/og`],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': `${APP_URL}/api/og`,
    'fc:frame:button:1': 'Play Game',
    'fc:frame:button:1:action': 'link',
    'fc:frame:button:1:target': APP_URL,
  },
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
