// Import global styles and fonts
import './styles/globals.css'
import { nunitoSans } from "./fonts/nunitoSans"
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: '404 - Pagina niet gevonden',
  description: 'Oeps! Deze pagina bestaat niet of is verplaatst.',
}
 
export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${nunitoSans.variable} antialiased`}>
      <body>
        <h1>404 - Pagina niet gevonden</h1>
        <p>Oeps! Deze pagina bestaat niet of is verplaatst.</p>
      </body>
    </html>
  )
}