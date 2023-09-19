import Image from "next/image";
import Link from "next/link";

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
    return(
        <Link href={{
            pathname : `berita/${href}`
        }} className="flex space-x-3 py-1 h-[80px]">
            <div className="w-[100px] h-auto md:h-auto relative">
                <Image src={image} alt={image} className="rounded" fill style={{
                    objectFit:"cover"
                }}/>
            </div>
            <div className="flex flex-col w-full justify-between text-cod-gray-950">
                <h2 className="text-xs md:text-sm font-semibold hover:text-cod-gray-700">{title}</h2>
                <span className="text-xs text-cod-gray-500">{date}</span>
            </div>
        </Link>
    );
}