"use client"

import classNames from "classnames";
import { ReactNode } from "react";

interface WrapperProps {
    children : ReactNode
    classname? : string | null
}

export default function Wrapper({classname, children} : WrapperProps) {
    return <div className={classNames('p-6', classname)}>
        {children}
    </div>
}