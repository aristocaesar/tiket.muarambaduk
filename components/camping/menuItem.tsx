"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"

import Image from "next/image";
import 'swiper/css';
import Link from "next/link";

export interface MenuCampingItemData {
  title: string,
  price: string,
  image: string,
  href: string | null
}

interface MenuCampingItemProps {
  campingItems : MenuCampingItemData[]
}

export default function MenuCampingItem({ campingItems } : MenuCampingItemProps) {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{
        delay: 5000
      }}
      loop={true}
    >
      {campingItems.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[180px]">
            <Image src={item.image} alt="" className="rounded" fill style={{
              objectFit: "cover",
            }} />
            <div className="absolute inset-0 bg-gradient-to-t from-cod-gray-950 to-transparent opacity-80 rounded"></div>
            <div className="absolute bottom-4 left-4 text-white text-sm rounded">
              <h2 className="font-semibold">{item.title}</h2>
              <p className="font-normal">{item.price}</p>
            </div>
            <Link href={item.href || "/"} className="absolute bottom-4 right-4 text-xs rounded-full bg-blumine-700 text-white font-semibold px-4 py-2">Cek Detail</Link>
          </div>
        </SwiperSlide>
       ))
      }
    </Swiper>
  );
}