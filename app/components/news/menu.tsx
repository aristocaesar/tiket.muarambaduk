import Link from "next/link";
import MenuNewsItem from "./menuItem";
import { News } from "@/app/_types/news";

interface MenuNewsProps {
    news : News[]
}

export default function MenuNews({news} : MenuNewsProps) {
    
    return (
        <div className="my-10">
            <div className="flex justify-between items-center mb-8">
                <h2 className="font-semibold text-cod-gray-950">Berita Terbaru</h2>
                <Link href="/berita" className="text-cod-gray-500 hover:text-cod-gray-700 active:text-cod-gray-700 text-xs">Lihat Semua</Link>
            </div>
            <div className="flex flex-col space-y-5">
                {
                    news.map((_news, index) => {
                     return (
                        <MenuNewsItem 
                            key={index}
                            items={_news}
                            previous={"dashboard"}
                        />
                     )   
                    })
                }
            </div>
        </div>
    );
}