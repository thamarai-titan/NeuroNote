"use client"

import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode,
    className?: string,
    variant: "primary" | "additional";
}
export default function Button({children,className,variant,...props}:ButtonProps){

    return (
        <button
        className=""
        {...props}>
            {children}
        </button>
    )
}