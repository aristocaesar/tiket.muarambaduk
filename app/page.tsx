"use client"

import {GoogleSignButton} from "@/components/auth/authButton";

export default function Home() {
  return (
    <div className="bg-[url('/images/welcome.webp')] h-screen bg-center bg-cover -mt-48">
      <div className="absolute bottom-0 max-w-screen-sm space-y-5 rounded-t-3xl text-cod-gray-950 text-center p-[25px] bg-white">
        <h1 className="text-[24px] font-bold">Selamat Datang Di Wisata Alam Muara Mbaduk</h1>
        <p className="text-sm md:text-base">Liburan yang berbeda dengan berkemah</p>
        <GoogleSignButton />
      </div>
    </div>
  )
}
