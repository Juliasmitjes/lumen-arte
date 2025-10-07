// Import global styles and fonts
import './styles/globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
 
const inter = Inter({ subsets: ['latin'] })
 
export const metadata: Metadata = {
  title: '404 - Pagina niet gevonden',
  description: 'Oeps! Deze pagina bestaat niet of is verplaatst.',
}
 
export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <h1>404 - Pagina niet gevonden</h1>
        <p>Oeps! Deze pagina bestaat niet of is verplaatst.</p>
      </body>
    </html>
  )
}