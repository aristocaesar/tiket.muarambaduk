import Wrapper from "@/app/components/wrapper";
import { Metadata } from "next"
import BackFloating from "@/app/components/backFloating";
import Image from "next/image";
import { MUARAMBADUK_API } from "../_config/serverApi";
import { Faq } from "../_types/faq";
import FaqItems from "../components/faq/items";

export const metadata : Metadata = {
    title : 'Muara Mbaduk Camping Ground - Bantuan'
}

export default async function Bantuan() {

    const faq = await MUARAMBADUK_API.get('faq');
    const faqItems : Faq[] = faq.data;

    return (
        <Wrapper>
            <BackFloating href={"/dashboard"} />
            <h1 className="text-center font-semibold text-cod-gray-950 text-base mt-2 md:mt-3">Bantuan</h1>
            <div className="relative w-full h-32 my-16">
                <Image src={"/images/bantuan.svg"} alt='icon-bantuan' fill style={{
                    objectFit:"fill"
                }} />
            </div>
            <FaqItems items={faqItems} />
        </Wrapper>
    );
}