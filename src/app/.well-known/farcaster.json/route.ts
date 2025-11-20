import { NextResponse } from 'next/server'

// Redirect /.well-known/farcaster.json to the Farcaster hosted manifest URL
export function GET() {
  const target = 'https://api.farcaster.xyz/miniapps/hosted-manifest/019a887f-2c14-a2f1-9fb2-22a8e9b386e8'
  return NextResponse.redirect(target, 307)
}
