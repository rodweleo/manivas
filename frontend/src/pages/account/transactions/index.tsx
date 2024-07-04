import { useUserTransactions } from "@/hooks/useUserTransactions"
import { Transaction } from "@/utils/interfaces"
import moment from "moment"

export const Transactions = () => {
    const { transactions } = useUserTransactions()


    return <section className="h-screen w-full">
        <div className="flex justify-between items-center w-full sticky top-0 px-4">
            <h1 className="font-bold text-xl">Transactions</h1>
        </div>
        <ul className="space-y-2 p-5 divide-y-0">
            {transactions.map((transaction) => {
                return <li className="w-full"><TransactionListItem transaction={transaction}/></li>
            })}
        </ul>
    </section>
}

const TransactionListItem = ({ transaction} : {
    transaction: Transaction
}) => {
    return <div className={`flex justify-between px-2 border-l-4 ${transaction.type === "deposit" ? "border-green-500" : "border-red-500"}`}>
        <ul>
            <li><h2 className="font-semibold">{transaction.receiver}</h2></li>
            <li><span className="text-gray-500">{moment(transaction.transactionDate).format("HH:mm:ss")}</span></li>        
        </ul>
        <span className={`px-4 rounded-xl font-semibold ${transaction.type === "deposit" ? "text-green-500 " : "text-red-500"}`}>KES {transaction.amount}</span>
    </div>
}