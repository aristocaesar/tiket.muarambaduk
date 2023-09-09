import classNames from 'classnames'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight : ['100','200','300','400', '500','600','700','800', '900'] })

export const metadata: Metadata = {
  title: 'Muara Mbaduk Camping Ground',
  description: 'Muara Mbaduk merupkan salah satu destinasi wisata alam untuk camping.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={classNames(poppins.className, "bg-wild-sand-100 my-0 mx-auto min-h-full max-w-screen-sm")}>
        <main className='my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden bg-white drop-shadow'>
          {children}
        </main>
      </body>
    </html>
  )
}
