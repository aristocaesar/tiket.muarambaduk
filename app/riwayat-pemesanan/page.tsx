import Wrapper from "@/components/wrapper";
import { Metadata } from "next"
import BackFloating from "@/components/backFloating";

export const metadata : Metadata = {
    title : 'Muara Mbaduk Camping Ground - Riwayat Pemesanan'
}

export default async function RiwayatPemesanan() {
    return (
        <Wrapper>
            <BackFloating href={"/dashboard"} />
            <h1 className="text-center font-semibold text-cod-gray-950 text-base mt-2 md:mt-3">Riwayat Pemesanan</h1>
        </Wrapper>
    );
}