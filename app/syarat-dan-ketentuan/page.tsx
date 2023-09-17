import Wrapper from "@/components/wrapper";
import { Metadata } from "next"
import BackFloating from "@/components/backFloating";
import Image from "next/image";

export const metadata : Metadata = {
    title : 'Muara Mbaduk Camping Ground - Syarat Dan Ketentuan'
}

export default async function SyaratDanKetentuan() {
    return (
        <Wrapper>
            <BackFloating href={"/dashboard"} />
            <h1 className="text-center font-semibold text-cod-gray-950 text-base mt-2 md:mt-3">Syarat & Ketentuan</h1>
            <div className="relative w-full h-32 my-16">
                <Image src={"/images/syarat-ketentuan.svg"} alt='icon-syarat-ketentuan' fill style={{
                    objectFit:"fill"
                }} />
            </div>
            <article className="text-cod-gray-950 space-y-5">
                <p><b>Berikut adalah syarat dan ketentuan yang berlaku pada wisata Muara Mbaduk :</b></p>
                <p>Setiap pengunjung wajib membayar tiket masuk sebelum masuk ke kawasan wisata Muara Mbaduk. Harga tiket masuk dapat berbeda-beda tergantung pada kategori pengunjung, seperti warga lokal atau wisatawan asing.</p>
                <p>Setiap pengunjung diharuskan mengikuti peraturan dan instruksi yang diberikan oleh petugas kawasan wisata, termasuk menjaga kebersihan lingkungan dan tidak merusak flora dan fauna di sekitar kawasan wisata.</p>
                <p>Aktivitas yang dapat membahayakan keselamatan diri dan pengunjung lainnya, seperti memancing di daerah yang dilarang, atau mendekati ombak yang berbahaya, dilarang keras.</p>
            </article>
        </Wrapper>
    );
}