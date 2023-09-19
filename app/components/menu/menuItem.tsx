import Image from "next/image";
import Link from "next/link";

interface MenuMainItemProps {
    name : string
    href : string | null | undefined
    icon : string
}

export default function MenuMainItem({name, href, icon} : MenuMainItemProps) {
    return (
        <Link href={{
            pathname : href
        }} className="text-sm hover:bg-wild-sand-50 active:bg-wild-sand-50 py-4 flex flex-col items-center space-y-3 text-cod-gray-950 rounded cursor-pointer">
            <Image src={`/icons/${icon}`} alt={`icon-${name}`} width={50} height={50} />
            <span>{name}</span>
        </Link>
    );
}