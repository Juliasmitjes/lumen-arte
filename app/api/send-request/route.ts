import { NextResponse } from 'next/server'
import { createClient } from '../../lib/supabaseServer'

export async function POST(req: Request) {
  const supabase = await createClient()
  const body = await req.json()

  const { name, email, phone, quantity } = body

  const { error } = await supabase.from('Lichtsculpturen').insert([
    { name, email, phone, quantity }
  ])

  if (error) {
    console.error('Supabase error:', error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true }, { status: 200 })
}