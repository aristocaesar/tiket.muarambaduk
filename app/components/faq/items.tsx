"use client"

import { Faq } from "@/app/_types/faq";
import Image from "next/image";
import { useState } from "react";

interface FaqItemsProps {
    items : Faq[]
}

export default function FaqItems({items} : FaqItemsProps) {
    const [selected, setSelected] = useState(0);

    return (
        <div className="text-cod-gray-950 space-y-8">
            {items.map((item, index) => (
                <div key={index}>
                    <div className="flex justify-between mb-3 items-center space-x-4 cursor-pointer" onClick={()=> {
                            setSelected(index);
                        }}>
                        <h2 className="font-semibold w-full">{item.title}</h2>
                        <div className="relative w-7 h-7">
                            <Image src={`/icons/${selected == index ? "minus" : "plus"}.svg`} alt="icon-plus" fill style={{
                                objectFit:"fill"
                            }} />
                        </div>
                    </div>
                    <p className={selected == index ? "block" : "hidden"}>{item.description}</p>
                </div>
            ))}
        </div>
    )    
}