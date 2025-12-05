import { ReactNode } from "react"
import Image from "next/image"

interface CardProps {
    content: ReactNode;
    title: string
    figure: number
    className?: string
    showPattern?: boolean
}

export const Card = ({...props}: CardProps) => {
    const showPattern = props.showPattern !== false; // Default to true unless explicitly set to false
    
    return (
        <div className={`bg-gray-100 border border-gray-300 flex flex-col p-3 gap-2 ${props.className || ''}`}>
            <div className="flex justify-between items-center w-full border-b border-gray-300">
                <h1 className="text-sm font-medium text-[#242424]">[{props.title}]</h1>
                <p className="text-sm font-medium text-[#242424] uppercase">[FIG. {String(props.figure).padStart(2, '0')}]</p>
            </div>

            <div className={`bg-white w-full h-full relative ${showPattern ? 'overflow-hidden' : ''} ${showPattern ? 'p-6' : 'p-0'}`}>
                {showPattern && (
                    <div className="absolute inset-0 opacity-5 pointer-events-none">
                        <Image
                            src="/images/blueprint-content-pattern.svg"
                            alt="Pattern"
                            fill
                            className="object-cover"
                        />
                    </div>
                )}
                <div className={`relative z-10 ${showPattern ? '' : 'w-full h-full'}`}>
                    {props.content}
                </div>
            </div>
        </div>
    )
} 