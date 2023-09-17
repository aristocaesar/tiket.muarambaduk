import Wrapper from "@/components/wrapper";
import { Metadata } from "next"
import BackFloating from "@/components/backFloating";
import Image from "next/image";
import Link from "next/link";

export const metadata : Metadata = {
    title : 'Muara Mbaduk Camping Ground - Paket Camping'
}

export default async function Paket() {
    return (
        <Wrapper>
            <BackFloating href={"/dashboard"} />
            <h1 className="text-center font-semibold text-cod-gray-950 text-base mt-2 md:mt-3">Paket Camping</h1>
            <div className="text-center flex flex-col items-center text-sm">
                <div className="relative w-full h-32 mt-16 mb-8">
                    <Image src={"/images/buat-paket.svg"} alt='icon-buat-paket' fill style={{
                        objectFit:"fill"
                    }} />
                </div>
                <h2 className="font-semibold text-cod-gray-950 md:text-base max-w-xs">Belum menemukan paket yang sesuai dengan kebutuhanmu ?</h2>
                <p className="text-cod-gray-500 my-3">Tenang, kamu bisa buat paket spesial sendiri</p>
                <Link href="#" className="text-sm md:text-base w-full flex justify-center text-white hover:bg-blumine-950 active:bg-blumine-950 rounded-md py-3 space-x-2 bg-blumine-700 font-semibold">Buat Paket</Link>
            </div>
        </Wrapper>
    );
}