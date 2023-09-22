"use client"

import { Dates } from "@/app/_libs/date";
import { News } from "@/app/_types/news";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface MenuNewsItemProps {
    items : News;
    previous : string | null
}

export default function MenuNewsItem({items, previous} : MenuNewsItemProps) {
 
    const [imageError, setImageError] = useState(false);
 
    return(
        <Link href={
            previous == null ? `berita/${items.slug}` : `berita/${items.slug}?previous=dashboard`
        } className="flex space-x-3 py-1 h-[80px]">
            <div className="w-[100px] h-auto md:h-auto relative">
                <Image src={!imageError ? items.thumbnail : "/images/default-image.webp"} alt={items.thumbnail} className="rounded" fill style={{
                    objectFit:"cover"
                }}
                onError={()=>{
                    setImageError(true)
                }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cod-gray-950 to-transparent opacity-80 rounded"></div>
            </div>
            <div className="flex flex-col w-full justify-between text-cod-gray-950">
                <h2 className="text-xs md:text-sm font-semibold hover:text-cod-gray-700">{items.title}</h2>
                <span className="text-xs text-cod-gray-500">{Dates.toDateString(items.created_at)}</span>
            </div>
        </Link>
    );
}