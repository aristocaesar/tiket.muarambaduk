import Wrapper from "@/app/components/wrapper";
import { Metadata } from "next"
import BackFloating from "@/app/components/backFloating";
import { MUARAMBADUK_API } from "@/app/_config/serverApi";
import { Package, PackageDetailResponse, PackageResponse } from "@/app/_types/packages";
import Image from "next/image";
import { Currency } from "@/app/_libs/currency";
import Link from "next/link";
import NotFound from "@/app/not-found";
import { AxiosError, AxiosResponse } from "axios";

export const metadata : Metadata = {
    title : 'Muara Mbaduk Camping Ground - Riwayat Pemesanan'
}

interface DetailPaketProps {
    searchParams: { [key: string]: string | null | undefined },
    params : {
        slug : string;
    }
}

const fetchPackage = async (slug : string) : Promise<PackageDetailResponse> => {
    try {
        const _package : AxiosResponse = await MUARAMBADUK_API.get(`packages/${slug}`);
        return {
            code : _package.status,
            status : _package.statusText,
            data : _package.data.data
        };
    } catch (error) {
        if(error instanceof AxiosError) {
            return {
                code : 0,
                status : error.code,
                data : null
            }
        }
        return {
            code : 0,
            status : "SERVER_ERROR",
            data : null
        }
    }
}

export default async function DetailPaket({searchParams, params} : DetailPaketProps) {

    const packages : PackageDetailResponse = await fetchPackage(params.slug);

    if(packages.data?.id == undefined) return NotFound();

    return (
        <>
        <div className="relative w-full h-[400px]">
            <Image src={packages.data.image} alt={packages.data.title} fill style={{
                objectFit :"cover"
            }} />
            <div className="absolute inset-0 bg-gradient-to-t from-cod-gray-950 to-transparent opacity-80 rounded"></div>
            <div className="absolute bottom-9 left-4 text-white text-2xl rounded">
                <h1 className="font-bold">PAKET {packages.data.title}</h1>
                <p className="font-normal">{Currency.toIDR(packages.data.price)}</p>
            </div>
            <BackFloating href={searchParams?.previous ? `/${searchParams?.previous}` : "/paket"} />
        </div>
        <Wrapper classname="relative z-10 -mt-5 bg-white rounded-t-3xl text-cod-gray-950">
            <div className="mb-10">
                <h2 className="font-semibold mb-5">Deskripsi</h2>
                <p>{packages.data.description}</p>
            </div>
            <div className="mb-10">
                <h2 className="font-semibold mb-5">Item yang didapatkan</h2>
                <ul>
                    {
                        packages.data.products.map((product, index) => (
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