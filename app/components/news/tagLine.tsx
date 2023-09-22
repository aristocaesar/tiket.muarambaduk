"use client"

import Image from "next/image";
import BackFloating from "../backFloating";
import { Dates } from "@/app/_libs/date";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

interface TagLineProps  {
    title : string;
    thumbnail : string;
    created_at : string;
}

export default function TagLine(items : TagLineProps) {
    
    const searchParams = useSearchParams();
    const previous = searchParams.get('previous');
    
    const [imageError, setImageError] = useState(false);

    return (
        <div className="relative w-full h-[400px]">
        <Image src={!imageError ? items.thumbnail : "/images/default-image.webp"} alt={items.title} fill style={{
            objectFit :"cover"  
        }}
        onError={()=>{
            setImageError(true)
        }} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cod-gray-950 to-transparent opacity-80 rounded"></div>
        <div className="absolute bottom-9 left-4 right-4 text-white rounded">
            <h1 className="font-semibold mb-2 text-lg md:text-2xl">{items.title}</h1>
            <p className="font-normal text-[18px]">{Dates.toDateString(items.created_at)}</p>
        </div>
        <BackFloating href={previous == null ? "/berita" : "/dashboard"} />
    </div>
    );
}