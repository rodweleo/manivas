import { Transaction } from "@/utils/interfaces"
import moment from "moment"

export const TransactionListItem = ({ transaction} : {
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