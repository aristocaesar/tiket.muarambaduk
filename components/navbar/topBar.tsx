"use client"

import { Session } from "next-auth";
import Image from "next/image";

interface TopBarProps {
    session : Session | null
}

export default function TopBar({session} : TopBarProps) {
    return (
        <div className="flex justify-between space-x-5">
            <div className="flex flex-col max-w-xs">
                <p className="text-base font-normal text-cod-gray-500">Hallo, {session?.user?.name}</p>
                <h1 className="text-base sm:text-lg font-bold text-cod-gray-950">Buat Rencana Campingmu Sekarang</h1>
            </div>
            <div className="cursor-pointer hover:brightness-75 active:brightness-75">
                <Image src={session?.user?.image || ""} alt="user-image" width={55} height={55} className="rounded hover:drop-shadow active:drop-shadow" />
            </div>
        </div>
    );
}