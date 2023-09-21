import Wrapper from "@/app/components/wrapper";
import { Metadata } from "next"
import BackFloating from "@/app/components/backFloating";
import Image from "next/image";
import { MUARAMBADUK_API } from "../_config/serverApi";
import { Page } from "../_types/page";

export const metadata : Metadata = {
    title : 'Muara Mbaduk Camping Ground - Syarat Dan Ketentuan'
}

export default async function SyaratDanKetentuan() {
    
    const termCondition = await MUARAMBADUK_API.get('pages/terms-of-service');
    const termConditionItem : Page = termCondition.data;

    return (
        <Wrapper>
            <BackFloating href={"/dashboard"} />
            <h1 className="text-center font-semibold text-cod-gray-950 text-base mt-2 md:mt-3">Syarat & Ketentuan</h1>
            <div className="relative w-full h-32 my-16">
                <Image src={"/images/syarat-ketentuan.svg"} alt='icon-syarat-ketentuan' fill style={{
                    objectFit:"fill"
                }} />
            </div>
            <div className="text-cod-gray-950" dangerouslySetInnerHTML={{
                __html : termConditionItem.body
            }} />
        </Wrapper>
    );
}