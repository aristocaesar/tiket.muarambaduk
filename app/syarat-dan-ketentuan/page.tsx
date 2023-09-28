import Wrapper from "@/app/components/wrapper";
import { Metadata } from "next"
import BackFloating from "@/app/components/backFloating";
import Image from "next/image";
import { MUARAMBADUK_API } from "../_config/serverApi";
import { PageResponse } from "../_types/page";
import { AxiosError, AxiosResponse } from "axios";

export const metadata : Metadata = {
    title : 'Muara Mbaduk Camping Ground - Syarat Dan Ketentuan'
}

const fetchTermCondition = async () : Promise<PageResponse> => {
    try {
        const termCondition : AxiosResponse = await MUARAMBADUK_API.get('pages/terms-of-service');
        return {
            code : termCondition.status,
            status : termCondition.statusText,
            data : termCondition.data.data
        };
    } catch (error) {
        if(error instanceof AxiosError) {
            return {
                code : 0,
                status : error.code,
                data : undefined
            }
        }
        return {
            code : 0,
            status : "SERVER_ERROR",
            data : undefined
        }
    }
}

export default async function SyaratDanKetentuan() {

    const termConditionItem : PageResponse = await fetchTermCondition();

    return (
        <Wrapper>
            <BackFloating href={"/dashboard"} />
            <h1 className="text-center font-semibold text-cod-gray-950 text-base mt-2 md:mt-3">Syarat & Ketentuan</h1>
            <div className="relative w-full h-32 my-16">
                <Image src={"/images/syarat-ketentuan.svg"} alt='icon-syarat-ketentuan' fill style={{
                    objectFit:"fill"
                }} />
            </div>
            {
                termConditionItem.status == "ERR_BAD_REQUEST" || termConditionItem.status == "ECONNREFUSED" || termConditionItem.status == "SERVER_ERROR" ? (
                    <p className="text-sm text-center py-10 text-cod-gray-500">Gagal memuat syarat dan ketentuan, Silakan ulangi beberapa saat.</p>
                ) :  (
                    <div className="text-cod-gray-950" dangerouslySetInnerHTML={{
                        __html : termConditionItem.data?.body || ""
                    }} />
                ) 
            }
        </Wrapper>
    );
}