import { createClient } from '../lib/supabaseServer'

export default async function LichtsculpturenPage() {
  const supabase = await createClient()
  const { data, error } = await supabase.from('Lichtsculpturen').select()

  if (error) {
    return <p>Fout bij ophalen: {error.message}</p>
  }

  return (
    <div>
      <h1>Lichtsculpturen</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}