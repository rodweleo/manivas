import { ReactNode } from "react"


export const AuthProvider = ({ children }: {
    children: ReactNode
}) => {


    return <main>
        {children}
    </main>
}