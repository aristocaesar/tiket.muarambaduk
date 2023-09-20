"use client"

import { Dates } from "@/app/_libs/date";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface MenuNewsItemProps {
    title : string,
    href : string | null,
    date : string,
    image : string
}

export default function MenuNewsItem({
    title,
    href,
    date,
    image
} : MenuNewsItemProps) {
 
    const [imageError, setImageError] = useState(false);
 
    return(
        <Link href={{
            pathname : `berita/${href}`
        }} className="flex space-x-3 py-1 h-[80px]">
            <div className="w-[100px] h-auto md:h-auto relative">
                <Image src={!imageError ? image : "/images/default-image.webp"} alt={image} className="rounded" fill style={{
                    objectFit:"cover"
                }}
                onError={()=>{
                    setImageError(true)
                }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cod-gray-950 to-transparent opacity-80 rounded"></div>
            </div>
            <div className="flex flex-col w-full justify-between text-cod-gray-950">
                <h2 className="text-xs md:text-sm font-semibold hover:text-cod-gray-700">{title}</h2>
                <span className="text-xs text-cod-gray-500">{Dates.toDateString(date)}</span>
            </div>
        </Link>
    );
}