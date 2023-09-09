import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-[url('/images/welcome.jpg')] h-screen bg-center bg-cover -mt-48">
      <div className="absolute bottom-0 max-w-screen-sm space-y-5 rounded-t-3xl text-cod-gray-950 text-center p-[25px] bg-white">
        <h1 className="text-[24px] font-bold">Selamat Datang Di Wisata Alam Muara Mbaduk</h1>
        <p className="text-sm md:text-base">Liburan yang berbeda dengan berkemah</p>
        <Link href="/dashboard" className="bg-blumine-700 hover:bg-blumine-900 hover:drop-shadow-md active:bg-blumine-900 active:drop-shadow-md text-sm md:text-base text-white flex w-full rounded-md py-3 space-x-3 justify-center">
          <Image src="/icons/google.svg" width={20} height={20} alt="icon-google" />
          <span>Masuk Dengan Google</span>
        </Link>
      </div>
    </div>
  )
}
