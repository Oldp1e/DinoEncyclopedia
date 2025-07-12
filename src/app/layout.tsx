import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jurassic Park Dino Encyclopedia',
  description: 'Explore a Era dos Dinossauros como um Cientista de Jurassic Park! Acesse informações detalhadas sobre cada espécie, monitoramento em tempo real e protocolos de segurança avançados.',
  keywords: 'Jurassic Park, Dinossauros, Encyclopedia, T-Rex, Velociraptor, Paleontologia',
  authors: [{ name: 'InGen Corporation' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-primary-900">
          {/* Particle Background */}
          <div className="particles fixed inset-0 pointer-events-none">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${6 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
          
          {children}
        </div>
      </body>
    </html>
  )
}
