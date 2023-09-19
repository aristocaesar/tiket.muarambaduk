"use client"

import { signIn } from "next-auth/react"
import Image from "next/image"
import { useState } from "react"

export const GoogleSignButton = () => {

    const [clicked, setClicked] = useState(false);

    return <button 
        type="button" 
        className={`text-sm md:text-base w-full flex justify-center text-white hover:bg-blumine-950 active:bg-blumine-950 rounded-md py-3 space-x-2 ${!clicked ? "bg-blumine-700" : "bg-blumine-950"}`} 
        onClick={() => {
            setClicked(!clicked);
            signIn("google");
        }} 
        disabled={clicked}>
        { !clicked ? (<>
            <Image src="icons/google.svg" width={20} height={20} alt="icon-google" />
            <span>Masuk Dengan Google</span>
        </>) : <>
            <div className="flex flex-row items-center space-x-2">
                <span className="loader"></span>
                <p>Memuat ...</p>
            </div>
        </> }
    </button>
}