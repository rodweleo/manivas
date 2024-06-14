type Props = {
    user: any
}

export default function SuccessfulTransactions({user}: Props){
    const transactions = user.transactions.map((transaction: any, index: number)=>(
        transaction.status === 0 ? <li key={index}>{transaction.tId}</li> : ''
    ))
    return(
        <>
            <h1>Successful Transactions</h1>
            <ul>
            {transactions}
            </ul>
            
        </>
    )
}