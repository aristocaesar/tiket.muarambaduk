"use client"

import { ReactNode } from "react";

interface WrapperProps {
    children : ReactNode
}

export default function Wrapper({children} : WrapperProps) {
    return <div className='p-6'>
        {children}
    </div>
}