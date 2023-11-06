import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'
// import Navbar from '@/components/Navbar'
// import Providers from '@/components/Providers'
// import { Toaster } from '@/components/ui/Toaster'

import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Breadit',
  description: 'A Reddit clone built with Next.js and TypeScript.',
}

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode
  authModal: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={cn(
        'bg-white text-slate-900 antialiased light',
        inter.className
      )}>
      <body className='min-h-screen pt-12 antialiased bg-slate-50'>
        {/* <Providers>
          <Navbar />
          {authModal} */}

          <div className='container h-full pt-12 mx-auto max-w-7xl'>
            {children}
          </div>
        {/* </Providers>
        <Toaster /> */}
      </body>
    </html>
  )
}