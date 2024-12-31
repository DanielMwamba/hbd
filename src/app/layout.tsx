import './globals.css'
import { playfair } from './fonts'

export const metadata = {
  title: 'Joyeux Anniversaire Ange !',
  description: 'Une célébration spéciale pour une amie extraordinaire',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={playfair.className}>{children}</body>
    </html>
  )
}

