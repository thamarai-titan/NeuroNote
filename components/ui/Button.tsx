"use client"

import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode,
    className?: string,
    variant: "primary" | "additional";
}
export default function Button({children,className,variant,...props}:ButtonProps){
    const baseStyles = "px-4 py-1"
    const variantStyles = { primary: "border border-zinc-600 rounded-lg font-medium bg-(--bg-color) text-(--text-color)",
        additional:""
     }
    return (
        <button
        className={`${baseStyles} ${variantStyles[variant]}`}
        {...props}>
            {children}
        </button>
    )
}