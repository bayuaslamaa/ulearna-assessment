import '@/app/globals.css'
import { CartProvider } from '@/context/CartContext'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeToggle />
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}