import Wrapper from "@/app/components/wrapper";
import { Metadata } from "next"
import BackFloating from "@/app/components/backFloating";
import Image from "next/image";
import { MUARAMBADUK_API } from "../_config/serverApi";
import { FaqResponse } from "../_types/faq";
import FaqItems from "../components/faq/items";
import { AxiosError, AxiosResponse } from "axios";

export const metadata : Metadata = {
    title : 'Muara Mbaduk Camping Ground - Bantuan'
}

const fetchFaq = async () : Promise<FaqResponse> => {
    try {
        const faq : AxiosResponse = await MUARAMBADUK_API.get('faq');
        return {
            code : faq.status,
            status : faq.statusText,
            data : faq.data.data
        };
    } catch (error) {
        if(error instanceof AxiosError) {
            return {
                code : 0,
                status : error.code,
                data : []
            }
        }
        return {
            code : 0,
            status : "SERVER_ERROR",
            data : []
        }
    }
}

export default async function Bantuan() {

    const faq : FaqResponse = await fetchFaq();

    return (
        <Wrapper>
            <BackFloating href={"/dashboard"} />
            <h1 className="text-center font-semibold text-cod-gray-950 text-base mt-2 md:mt-3">Bantuan</h1>
            <div className="relative w-full h-32 my-16">
                <Image src={"/images/bantuan.svg"} alt='icon-bantuan' fill style={{
                    objectFit:"fill"
                }} />
            </div>
            {
                faq.status == "ERR_BAD_REQUEST" || faq.status == "ECONNREFUSED" || faq.status == "SERVER_ERROR" ? (
                    <p className="text-sm text-center py-10 text-cod-gray-500">Gagal memuat bantuan, Silakan ulangi beberapa saat.</p>
                ) : faq.status == "OK" && faq.data.length == 0 ? (
                    <p className="text-sm text-center py-10 text-cod-gray-500">Tidak ada bantuan</p>
                ) : (
                    <FaqItems items={faq.data} />
                ) 
            }
        </Wrapper>
    );
}