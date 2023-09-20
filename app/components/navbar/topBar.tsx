"use client"

import { Session } from "next-auth";
import Image from "next/image";
import { Modal } from "flowbite-react";
import { useState } from "react";
import { signOut } from "next-auth/react";

interface TopBarProps {
    session : Session | null
}

export default function TopBar({session} : TopBarProps) {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const props = { openModal, setOpenModal };

    const [imageError, setImageError] = useState(false);

    return (
        <>
        <div className="flex justify-between space-x-5">
            <div className="flex flex-col max-w-xs">
                <p className="text-base font-normal text-cod-gray-500">Hallo, {session?.user?.name}</p>
                <h1 className="text-base sm:text-lg font-bold text-cod-gray-950">Buat Rencana Campingmu Sekarang</h1>
            </div>
            <div
                className="cursor-pointer hover:brightness-75 active:brightness-75"
                onClick={() => props.setOpenModal('default')}
            >
                <Image src={!imageError ? session?.user?.image || "/images/default-user.png" : "/images/default-user.png"} alt="user-image" width={55} height={55} className="rounded hover:drop-shadow active:drop-shadow"
                    onError={()=>{
                        setImageError(true)
                    }}
                />
            </div>
        </div>
        <Modal size="md" show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
            <Modal.Header>
                <p className="text-md font-semibold text-cod-gray-950">Informasi Akun</p>
            </Modal.Header>
            <Modal.Body>
                <div className="flex w-full space-x-3 items-center">
                    <Image src={!imageError ? session?.user?.image || "/images/default-user.png" : "/images/default-user.png"} alt="user-image" width={55} height={55} className="rounded hover:drop-shadow active:drop-shadow" />
                    <div>
                        <p className="text-base font-semibold text-cod-gray-950">{session?.user?.name}</p>
                        <p className="text-base font-normal text-cod-gray-500">{session?.user?.email}</p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div className="flex justify-end w-full">
                    <button className="rounded text-white bg-blumine-700 hover:bg-blumine-950 active:bg-blumine-950 px-3 py-2" onClick={() => {
                        props.setOpenModal(undefined);
                        signOut();
                    }}>
                        Keluar
                    </button>
                </div>
            </Modal.Footer>
        </Modal>
        </>
    )
}