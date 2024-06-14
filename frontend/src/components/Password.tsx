import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
export default function Password(){

    const  { state } = useLocation()
    const navigate = useNavigate()
    //state for the passwords
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    //generate the userId
    let userId = "MV" + Math.floor(Math.random() * 99999)

    const [error, setError] = useState("")

    const checkPassword = () => {
        if(confirmPassword !== null){
            password !== confirmPassword ? setError('Passwords do not match') : setError('')
        }
    }    
    
    //posting the form data into the database
    const handleSubmit = async (e: any)=>{
        e.preventDefault()
        //prepare data for uploading
        var user ={email: state.email, userId: userId, password: password}
        const res = await axios.post("https://f831-197-232-36-22.ngrok-free.app/users", user);

        res.status === 200 ? navigate('/login') : alert('An error occured!')
    }
    
    return(
    <form className="password-form" onSubmit={handleSubmit} method="POST">
        <h2>Welcome {state.email}</h2>
        <h3>Choose your password.</h3>
        <span className="error-msg">{error}</span>
        <input type="text"  value={userId} readOnly hidden/>
        <input type="email"  value={state.email} readOnly hidden/>
        <label htmlFor="password">
            Password
            <input type="password" name="pass" id="pass" onChange={(e)=>setPassword(e.target.value)} />
        </label>
        <label htmlFor="confirm-pass">
            Confirm Password
            <input type="password" name="confirm-pass" id="confirm-pass" onChange={(e)=>setConfirmPassword(e.target.value)} onKeyUp={checkPassword} />
        </label>

        <button className="cta">Complete Registration</button>
    </form>)
}