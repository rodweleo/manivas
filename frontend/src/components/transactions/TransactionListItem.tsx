import { Transaction } from "@/utils/interfaces"
import moment from "moment"
import { FaRegUserCircle } from "react-icons/fa";

export const TransactionListItem = ({ transaction} : {
    transaction: Transaction
}) => {
    return <div className={`flex justify-between p-3 bg-slate-200 rounded-md ${transaction.type === "deposit" ? "" : "border-red-500"}`}>
        <div className="flex space-x-1 items-center">
            <FaRegUserCircle className="text-4xl text-slate-500"/>
            <div className="flex flex-col">
                <span className="font-semibold text-sm">{transaction.receiver}</span>
                <span className="text-gray-500 text-[12px]">{moment(transaction.transactionDate).format("HH:mm:ss")}</span>      
            </div>
        </div>
        <p className={`px-4 rounded-xl font-bold flex`}> <span className={`${transaction.type === "deposit" ? "text-green-500" : ""}`}>{transaction.type === "deposit" ? "+" : "-"}</span><span className={`${transaction.type === "deposit" ? "text-green-500" : ""}`}>KES {transaction.amount}</span></p>
    </div>
}