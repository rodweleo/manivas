type Props = {
    user: any
}

export default function PendingTransactions({user}: Props){
    const transactions = user.transactions.map((transaction: any, index: number)=>(
        transaction.status === 0 ? <li key={index}>{transaction.tId}</li> : ''
    ))
    return(

        <>
        <h1>Pending Transactions</h1>
            <ul>
                {transactions}
            </ul>
            </>
        )
        
}