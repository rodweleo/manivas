import { useEffect } from "react"
import { useNavigate } from "react-router"



export const Account = () => {

    const navigate = useNavigate()
    useEffect(() => {
        //check if the user exists
        let user = sessionStorage.getItem('user')!
        user !== null ? navigate('dashboard') : navigate('/login')

    }, [])
    return (
        <>

        </>
    );
}