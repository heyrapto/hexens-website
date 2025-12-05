import { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode;
    variant: "primary" | "secondary"
    className?: string
}

export const Button = ({...props }: ButtonProps) => {
    const varaintClasses = `${props.variant === "primary" ? "bg-[#242424] text-white" : "bg-transparent text-[#242424] border border-[#242424]"}`
    const baseClasses = `w-[150px] inline-flex justify-center items-center h-[40px]`

    return (
        <button className={`${baseClasses} ${varaintClasses} ${props.className}`}>{props.children}</button>
    )
}