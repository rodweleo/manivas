type Props = {
    user: any
}

export default function UnsuccessfulTransactions({user}: Props){
    const transactions = user.transactions.map((transaction: any, index: number)=>(
        transaction.status === 1 ? <li key={index}>{transaction.tId}</li> : ''
    ))
    return(
        <>
            <h1>Unsuccessful Transactions</h1>
            <ul>
            {transactions}
            </ul>
        </>
    )
}