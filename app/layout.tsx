import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'
export const metadata = {
  title: 'Flexible',
  description: 'Showcase and discover remarkable developer projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Navbar />
        </nav>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
