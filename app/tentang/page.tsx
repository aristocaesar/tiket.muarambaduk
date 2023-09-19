import Wrapper from "@/app/components/wrapper";
import { Metadata } from "next"
import BackFloating from "@/app/components/backFloating";
import Image from "next/image";

export const metadata : Metadata = {
    title : 'Muara Mbaduk Camping Ground - Tentang'
}

export default async function Tentang() {
    return (
        <Wrapper>
            <BackFloating href={"/dashboard"} />
            <h1 className="text-center font-semibold text-cod-gray-950 text-base mt-2 md:mt-3">Tentang</h1>
            <div className="relative w-full h-52 my-10">
                <Image src={"/images/muarambaduk.webp"} className="rounded" alt="muara-mbaduk" fill style={{
                    objectFit:"cover"
                }} />
            </div>
            <article className="text-cod-gray-950 space-y-5">
                <p>Muara Mbaduk - satu lagi pantai yang layak kamu kunjungi ketika berlibur ke Banyuwangi. Lokasinya searah dengan destinasi wisata pantai lain seperti Pulau Merah, Teluk Hijau dan Pantai Sukamade, sehingga bisa dijadikan satu tujuan.</p>
                <p>Muara Mbaduk - satu lagi pantai yang layak kamu kunjungi ketika berlibur ke Banyuwangi. Lokasinya searah dengan destinasi wisata pantai lain seperti Pulau Merah, Teluk Hijau dan Pantai Sukamade, sehingga bisa dijadikan satu tujuan.</p>
                <p>Muara Mbaduk - satu lagi pantai yang layak kamu kunjungi ketika berlibur ke Banyuwangi. Lokasinya searah dengan destinasi wisata pantai lain seperti Pulau Merah, Teluk Hijau dan Pantai Sukamade, sehingga bisa dijadikan satu tujuan.</p>
            </article>
        </Wrapper>
    );
}