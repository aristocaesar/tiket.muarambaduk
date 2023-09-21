import Wrapper from "@/app/components/wrapper";
import { Metadata } from "next"
import BackFloating from "@/app/components/backFloating";
import Image from "next/image";
import { MUARAMBADUK_API } from "../_config/serverApi";
import { Page } from "../_types/page";

export const metadata : Metadata = {
    title : 'Muara Mbaduk Camping Ground - Tentang'
}

export default async function Tentang() {

    const about = await MUARAMBADUK_API.get('pages/about');
    const aboutItem : Page = about.data;

    return (
        <Wrapper>
            <BackFloating href={"/dashboard"} />
            <h1 className="text-center font-semibold text-cod-gray-950 text-base mt-2 md:mt-3">Tentang</h1>
            <div className="relative w-full h-52 my-10">
                <Image src={"/images/muarambaduk.webp"} className="rounded" alt="muara-mbaduk" fill style={{
                    objectFit:"cover"
                }} />
            </div>
            <div className="text-cod-gray-950" dangerouslySetInnerHTML={{
                __html : aboutItem.body
            }} />
        </Wrapper>
    );
}