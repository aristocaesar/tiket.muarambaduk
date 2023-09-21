import Wrapper from "@/app/components/wrapper";
import { Metadata } from "next"
import BackFloating from "@/app/components/backFloating";
import Image from "next/image";
import Link from "next/link";
import { MUARAMBADUK_API } from "../_config/serverApi";
import { Package } from "../_types/packages";
import PackageItem from "../components/package/packageItem";

export const metadata : Metadata = {
    title : 'Muara Mbaduk Camping Ground - Paket Camping'
}

export default async function Paket() {
    
    const packages = await MUARAMBADUK_API.get('packages');
    const packagesData : Package[] = packages.data;

    return (
        <Wrapper>
            <BackFloating href={"/dashboard"} />
            <h1 className="text-center font-semibold text-cod-gray-950 text-base mt-2 md:mt-3">Paket Camping</h1>
            <div className="flex flex-col my-10 space-y-8">
            {
                packagesData.map((_package, index) => (
                    <PackageItem 
                        key={index}
                        title={_package.title}
                        slug={_package.slug}
                        price={_package.price}
                        image={_package.image}
                        previous={null}
                    />
                ))
            }
            </div>
            <div className="text-center flex flex-col items-center text-sm">
                <div className="relative w-full h-32 mb-8">
                    <Image src={"/images/buat-paket.svg"} alt='icon-buat-paket' fill style={{
                        objectFit:"fill"
                    }} />
                </div>
                <h2 className="font-semibold text-cod-gray-950 md:text-base max-w-xs">Belum menemukan paket yang sesuai dengan kebutuhanmu ?</h2>
                <p className="text-cod-gray-500 my-3">Tenang, kamu bisa buat paket spesial sendiri</p>
                <Link href="#" className="text-sm w-full flex justify-center text-white hover:bg-blumine-950 active:bg-blumine-950 rounded-md py-3 space-x-2 bg-blumine-700 font-semibold">Buat Paket</Link>
            </div>
        </Wrapper>
    );
}