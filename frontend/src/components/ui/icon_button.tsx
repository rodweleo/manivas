import { ReactNode } from "react"

interface buttonProps {
    variant: 'primary' | 'secondary' | 'accent' | "btn-primary" | string
    iconName?: string | ReactNode
    onClick?: () => void
    label?: string | ReactNode
    style?: string
    type?: "submit" | "reset" | "button" | undefined
    disabled?: boolean
    suffixIcon?: string
}

interface IconButtonTypes {
    options: buttonProps
}
export const IconButton: React.FC<IconButtonTypes> = ({ options }) => {

    return <button type={options.type} disabled={options.disabled} className={`${options.style} disabled:bg-slate-200/50 disabled:text-slate-500 disabled:cursor-not-allowed ${options.variant === "primary" ? "bg-green-700 shadow-lg shadow-green-800/40 font-bold px-5 py-2.5 flex items-center justify-center gap-2 text-xl cursor-pointer hover:bg-[#45aa50]"
        : options.variant === "secondary" ? "border border-green-500 font-bold px-5 py-2.5 flex items-center justify-center gap-2 text-xl cursor-pointer hover:bg-green-500" : options.variant}  hover:scale-[1.005] transition-all duration-300`} onClick={() => options.onClick}><i className={options?.iconName?.toString()} id="icon-btn"></i> {options.label} <i className={`${options.suffixIcon}`}></i></button>
}