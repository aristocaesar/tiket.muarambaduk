"use client"

import Image from "next/image"
import Link from "next/link"

interface BackFloatingProps {
    href : string | null
}

export default function BackFloating({ href } : BackFloatingProps) {
    return (
        <Link href={{
            pathname : href
        }} className="cursor-pointer absolute top-5 left-6 bg-blumine-700 hover:bg-blumine-950 active:bg-blumine-950 rounded-full p-2 md:p-3 hover:shadow-md active:shadow-md">
            <Image src="/icons/arrow-left.svg" alt="arrow-left" width={30} height={30} />
        </Link>
    )
}