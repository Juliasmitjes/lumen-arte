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
      <body className="relative min-h-screen flex items-center justify-center gradient-earth overflow-hidden">
        <div className="text-center p-3 sm:p-6 bg-white/70 rounded-lg shadow-lg space-y-3">
          <h1 className="font-bold text-foreground">404 - Pagina niet gevonden</h1>
          <p className="text-foreground">Oeps! Deze pagina bestaat niet of is verplaatst.</p>
        </div>
      </body>
    </html>
  )
}