import Wrapper from '@/app/components/wrapper'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata : Metadata = {
  title : 'Muara Mbaduk Camping Ground - Halaman Tidak Ditemukan'
}
 
export default function NotFound() {
  return (
      <div className='h-screen p-6 flex flex-col justify-center items-center space-y-5 text-center'>
        <div className="relative w-full h-[160px]">
          <Image src={"/images/404.svg"} alt='icon-404' fill style={{
            objectFit:"fill"
          }} />
        </div>
        <h1 className='font-bold text-cod-gray-950 text-5xl'>404</h1>
        <p className='text-sm md:text-base text-cod-gray-500 max-w-sm'>Mohon maaf, Halaman yang anda cari tidak tersedia, harap ke halaman utama</p>
        <Link href="/dashboard" className='text-sm font-bold md:text-base w-full flex justify-center text-white hover:bg-blumine-950 active:bg-blumine-950 rounded-md py-3 space-x-2 bg-blumine-700'>Halaman Utama</Link>
      </div>
  )
}