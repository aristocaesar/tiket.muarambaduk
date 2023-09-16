import Link from "next/link";
import MenuNewsItem from "./menuItem";

export default function MenuNews() {
    
    const _news = [
        {
            title : "Cara seru habiskan akhir tahun, Wisata camping ciamik dibanyuwangi yuk!",
            href : "cara-seru-habiskan-akhir-tahun-wisata-camping-ciamik-dibanyuwangi-yuk",
            date : "14 September 2023",
            image : "/images/muarambaduk-camping.jpeg",
        },
        {
            title : "Camping di Muara Mbaduk bisa jadi",
            href : "camping-di-muara-mbaduk-bisa-jadi-pilihan-yang-paling-pas-untuk-weekend",
            date : "10 September 2023",
            image : "/images/muarambaduk-camping.jpeg",
        },
        {
            title : "Camping di Muara Mbaduk bisa jadi pilihan yang paling pas untuk weekend",
            href : "camping-di-muara-mbaduk-bisa-jadi-pilihan-yang-paling-pas-untuk-weekend",
            date : "10 September 2023",
            image : "/images/muarambaduk-camping.jpeg",
        },
    ]
    
    return (
        <div className="my-10">
            <div className="flex justify-between items-center mb-8">
                <h2 className="font-semibold text-cod-gray-950">Berita</h2>
                <Link href="/berita" className="text-cod-gray-500 hover:text-cod-gray-700 active:text-cod-gray-700 text-xs">Lihat Semua</Link>
            </div>
            <div className="flex flex-col space-y-5">
                {
                    _news.map((news, index) => {
                     return (
                        <MenuNewsItem 
                            key={index}
                            title={news.title}
                            href={news.href}
                            date={news.date}
                            image={news.image}    
                        />
                     )   
                    })
                }
            </div>
        </div>
    );
}