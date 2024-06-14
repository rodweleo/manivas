import { useNavigate } from "react-router"
import { useEffect, useRef, useState } from 'react'
import getUser from "../functions/getUser"
import Loader from "../components/Loader"
import initiateSTKPush from "../functions/initiateSTKPush"

export default function Deposit(){
    const navigate = useNavigate()

    //getting the active user
    var user = sessionStorage.getItem("user")!;

    const amountRef = useRef(null)
    const [amount, setAmount] = useState(0)
    const [userDetails, setUserDetails] = useState({
        userId: '',
        contact: 0
    })
    const [processing, setProcessing] = useState(false)
    const [feedback, setFeedback] = useState('')

    async function fetchUser(){
        setUserDetails(await getUser(user))
    }
    //get user details
    useEffect(()=>{
        fetchUser()
    }, [])
    
    
 
    const handleSubmit = async (e: any)=>{
        e.preventDefault()

        setProcessing(true)
        //prepare data for uploading
        var payload = {userId: user, contact: userDetails.contact, amount: amount }
        const res = await initiateSTKPush(payload);
        if(res.ResponseCode === "0"){
            //setting the message for the user to be alert
            setFeedback(`${res.CustomerMessage}. Enter your MPesa pin to complete the transaction.`)
        }else{
            setProcessing(false)
            setFeedback('An error has occured!. Kindly try again.')
            setTimeout(()=>{
                setFeedback('')
            }, 2000)
        }
        
    }

    function handleClosePage(){
        navigate(-1)
    }

    

    return(
            <form onSubmit={handleSubmit} className= 'deposit-form' method="POST">
                <i className="fa-solid fa-x" onClick={handleClosePage}></i>
                <input type="text" value={userDetails.contact} readOnly />
                <label htmlFor="amount">Enter amount to Top Up
                <input
                type="number"
                id="amount"
                ref={amountRef}
                placeholder="e.g. 20.00"
                onChange={(e: any)=>setAmount(e.target.value)}
                required
                />
                </label>
                <button type="submit" >Deposit {amount > 0 ? amount : ''}</button>

                {processing ? <Loader/> : ''}
                <p className="feedback">{feedback.length > 0 ? feedback : ''}</p>
            </form>
    )
}