import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Niet gevonden</h2>
      <p>Sorry, de pagina die je zoekt bestaat niet of is verplaatst.</p>
      <Link href="/">Terug naar home</Link>
    </div>
  )
}