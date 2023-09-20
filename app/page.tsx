import {GoogleSignButton} from "@/app/components/auth/authButton";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();

  if(session != null) {
    redirect('/dashboard');
  }

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
