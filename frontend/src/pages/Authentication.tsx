import { useEffect, useState } from 'react'
import {useNavigate, useLocation} from 'react-router-dom'


export default function Authentication(){

    const [email, setEmail] = useState()
    const [OTP, setOTP] = useState()
    const { state } = useLocation()
    const navigate = useNavigate()

    console.log(state)
    
    useEffect(()=>{
        setEmail(state.email)
    }, [])

    const handleSubmit = (e:any)=>{
        //if correct, redirect to choosing the password
        e.preventDefault()

        //validate the OTP provided first before continuing
        OTP === state.OTP ? navigate('/password', {state: {email}}) : ''
    }

    const handleAuthChange = (e:any)=>{
        setOTP(e.target.value)
    }
    
    
    return(
        <>
            <div className="auth-form">
                <h1>Authentication</h1>
                <span className="alert-msg">
                    We've sent a verification code to - {state.email}
                </span>
                <form onSubmit={handleSubmit}>
                    <input type="number" onChange={handleAuthChange} name="auth-code" id="auth-code" placeholder="Enter verification code"/>
                    <button type="submit" className="cta">Submit</button>
                </form>
            </div>
        </>
    )
}