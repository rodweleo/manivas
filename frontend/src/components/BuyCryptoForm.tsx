import { useState } from "react";

type propType = {
    user: any
}
export default function BuyCryptoForm({user}:propType){

    const [amount, setAmount] = useState(0)
    const [error, setError] = useState('')

    const handleBuyCrypto = (e:any)=>{
        e.preventDefault()
        
    }

    const handleChange = (e:any)=>{
        setAmount(e.target.value)
        amount > user.account.balance ? setError('Insufficient funds') : ''
    }
    return(
        <div>
            <form onSubmit={handleBuyCrypto} className="buy-crypto-form">
                <label htmlFor="amount">
                    Enter amount to transact
                    <span>{error.length > 0 ? error : ''}</span>
                    <input type="number" id="amount" onChange={handleChange} value={amount}/>
                </label>
                <button type="submit">Buy Crypto</button>
            </form>
        </div>
    )
}