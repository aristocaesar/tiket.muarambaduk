import Link from "next/link";
import MenuCampingItem, { MenuCampingItemData } from "./menuItem";

export default function MenuCamping() {    

    const campingItems: MenuCampingItemData[] = [
        {
            title : "Paket Standart 2",
            price : "Rp. 135.000",
            href : "/paket/paket-standart-2",
            image : "/images/tenda-tendaki.jpeg"
        },
        {
            title : "Paket Premium 2",
            price : "Rp. 165.000",
            href : "/paket/paket-premium-2",
            image : "/images/tenda-tendaki.jpeg"
        },
        {
            title : "Paket Premium 4",
            price : "Rp. 185.000",
            href : "/paket/paket-premium-4",
            image : "/images/tenda-tendaki.jpeg"
        }
    ]

    return (
        <div className="my-10">
            <div className="flex justify-between items-center mb-8">
                <h2 className="font-semibold text-cod-gray-950">Paket Camping</h2>
                <Link href="/paket" className="text-cod-gray-500 hover:text-cod-gray-700 active:text-cod-gray-700 text-xs">Lihat Semua</Link>
            </div>
            <MenuCampingItem campingItems={campingItems} />
        </div>
    );
}