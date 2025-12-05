import { ReactNode } from "react"

interface CardProps {
    content: ReactNode;
    title: string
    figure: number
}

export const Card = ({...props}: CardProps) => {
    return (
        <div className="bg-gray-100 border border-gray-300 flex flex-col p-3">
            <div className="flex justify-between items-center w-full border-b border-gray-300">
                <h1 className="text-sm font-medium text-[#242424]">[{props.title}]</h1>
                <p className="text-sm font-medium text-[#242424] uppercase">[FIG. {String(props.figure).padStart(2, '0')}]</p>
            </div>

            <div className="bg-white w-full p-6">
                {props.content}
            </div>
        </div>
    )
} 