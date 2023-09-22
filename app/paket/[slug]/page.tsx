import Wrapper from "@/app/components/wrapper";
import { Metadata } from "next"
import BackFloating from "@/app/components/backFloating";
import { MUARAMBADUK_API } from "@/app/_config/serverApi";
import { Package } from "@/app/_types/packages";
import Image from "next/image";
import { Currency } from "@/app/_libs/currency";
import Link from "next/link";
import NotFound from "@/app/not-found";

export const metadata : Metadata = {
    title : 'Muara Mbaduk Camping Ground - Riwayat Pemesanan'
}

interface DetailPaketProps {
    searchParams: { [key: string]: string | null | undefined },
    params : {
        slug : string;
    }
}

export default async function DetailPaket({searchParams, params} : DetailPaketProps) {

    const packageDetail = await MUARAMBADUK_API.get(`packages/${params.slug}`);
    const packageData : Package = packageDetail.data;

    if(packageData.id == undefined) return NotFound();

    return (
        <>
        <div className="relative w-full h-[400px]">
            <Image src={packageData.image} alt={packageData.title} fill style={{
                objectFit :"cover"
            }} />
            <div className="absolute inset-0 bg-gradient-to-t from-cod-gray-950 to-transparent opacity-80 rounded"></div>
            <div className="absolute bottom-9 left-4 text-white text-2xl rounded">
                <h1 className="font-bold">PAKET {packageData.title}</h1>
                <p className="font-normal">{Currency.toIDR(packageData.price)}</p>
            </div>
            <BackFloating href={searchParams?.previous ? `/${searchParams?.previous}` : "/paket"} />
        </div>
        <Wrapper classname="relative z-10 -mt-5 bg-white rounded-t-3xl text-cod-gray-950">
            <div className="mb-10">
                <h2 className="font-semibold mb-5">Deskripsi</h2>
                <p>{packageData.description}</p>
            </div>
            <div className="mb-10">
                <h2 className="font-semibold mb-5">Item yang didapatkan</h2>
                <ul>
                    {
                        packageData.products.map((product, index) => (
                            <li key={index}>{product.title}</li>
                        ))
                    }
                </ul>
            </div>
            <Link href="/pemesanan" className="text-base w-full flex justify-center text-white hover:bg-blumine-950 active:bg-blumine-950 rounded-md py-3 space-x-2 bg-blumine-700 font-semibold">Pesan Sekarang</Link>
        </Wrapper>
        </>
    );
}