"use client"

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"
import 'swiper/css';
import { PackageResponse } from "@/app/_types/packages";
import PackageItem from "../package/packageItem";

interface MenuCampingProps {
    packages : PackageResponse
} 

export default function MenuCamping({packages}: MenuCampingProps) {
    return (
        <div className="my-10">
            <div className="flex justify-between items-center mb-8">
                <h2 className="font-semibold text-cod-gray-950">Paket Camping</h2>
                <Link href="/paket" className="text-cod-gray-500 hover:text-cod-gray-700 active:text-cod-gray-700 text-xs">Lihat Semua</Link>
            </div>
            {
                packages.status == "ERR_BAD_REQUEST" || packages.status == "ECONNREFUSED" || packages.status == "SERVER_ERROR" ? (
                    <p className="text-sm text-center py-10 text-cod-gray-500">Gagal memuat paket, Silakan ulangi beberapa saat.</p>
                ) : packages.status == "OK" && packages.data.length == 0 ? (
                    <p className="text-sm text-center py-10 text-cod-gray-500">Tidak ada paket</p>
                ) : (
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 5000
                        }}
                        loop={true}
                        >
                        {packages.data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <PackageItem
                                    title={item.title}
                                    slug={item.slug}
                                    price={item.price}
                                    image={item.image}
                                    previous={"dashboard"}
                                />
                            </SwiperSlide>
                        ))
                        }
                    </Swiper>
                ) 
            }
        </div>
    );
}