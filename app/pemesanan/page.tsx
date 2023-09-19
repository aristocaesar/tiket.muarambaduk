import Wrapper from "@/app/components/wrapper";
import { Metadata } from "next"
import BackFloating from "@/app/components/backFloating";

export const metadata : Metadata = {
    title : 'Muara Mbaduk Camping Ground - Pemesanan'
}

export default async function Pemesanan() {
    return (
        <Wrapper>
            <BackFloating href={"/dashboard"} />
            <h1 className="text-center font-semibold text-cod-gray-950 text-base mt-2 md:mt-3">Pemesanan</h1>
        </Wrapper>
    );
}