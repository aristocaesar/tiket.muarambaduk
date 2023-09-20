import Link from "next/link";
import MenuCampingItem from "./menuItem";
import { Package } from "@/app/_types/packages";

interface MenuCampingProps {
    packages : Package[]
} 

export default function MenuCamping({packages}: MenuCampingProps) {    
    return (
        <div className="my-10">
            <div className="flex justify-between items-center mb-8">
                <h2 className="font-semibold text-cod-gray-950">Paket Camping</h2>
                <Link href="/paket" className="text-cod-gray-500 hover:text-cod-gray-700 active:text-cod-gray-700 text-xs">Lihat Semua</Link>
            </div>
            <MenuCampingItem campingItems={packages} />
        </div>
    );
}