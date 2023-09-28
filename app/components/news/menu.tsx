import Link from "next/link";
import MenuNewsItem from "./menuItem";
import {  NewsResponse } from "@/app/_types/news";

interface MenuNewsProps {
    news : NewsResponse
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
                news.status == "ERR_BAD_REQUEST" || news.status == "ECONNREFUSED" || news.status == "SERVER_ERROR" ? (
                    <p className="text-sm text-center py-10 text-cod-gray-500">Gagal memuat berita, Silakan ulangi beberapa saat.</p>
                ) : news.status == "OK" && news.data.length == 0 ? (
                    <p className="text-sm text-center py-10 text-cod-gray-500">Tidak ada berita</p>
                ) : (
                    news.data.map((_news, index) => {
                        return (
                            <MenuNewsItem 
                                key={index}
                                items={_news}
                                previous={"dashboard"}
                            />
                        )   
                    })
                ) 
            }
            </div>
        </div>
    );
}