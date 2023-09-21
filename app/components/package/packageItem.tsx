"use client"

import { Currency } from "@/app/_libs/currency";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface PackageItem {
    title : string;
    slug : string;
    price : number;
    image : string;
    previous : string | null;
}

export default function PackageItem(item:PackageItem) {
    const [imageError, setImageError] = useState(false);
    return (
        <div className="relative w-full h-[180px]">
            <Image src={!imageError ? item.image : "/images/default-image.webp"} alt={item.title} className="rounded" fill style={{
                objectFit: "cover",
            }}
            onError={()=>{
                setImageError(true)
            }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cod-gray-950 to-transparent opacity-80 rounded"></div>
            <div className="absolute bottom-4 left-4 text-white text-sm rounded">
                <h2 className="font-semibold">{item.title}</h2>
                <p className="font-normal">{Currency.toIDR(item.price)}</p>
            </div>
            <Link href={item.previous == null ? `/paket/${item.slug}` : `/paket/${item.slug}?previous=${item.previous}`} className="absolute bottom-4 right-4 text-xs rounded-full bg-blumine-700 hover:bg-blumine-950 active:bg-blumine-950 text-white font-semibold px-4 py-2">Cek Detail</Link>
        </div>
    );
}