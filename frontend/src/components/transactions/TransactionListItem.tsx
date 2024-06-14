import moment from "moment"

interface TransactionProps {
    tId: string,
    partyB: string | number,
    type: string | number,
    timestamp: string,
    amount: number
}
export const TransactionListItem = ({ transaction }: {
    transaction: TransactionProps
}) => {
    const status = "1"

    let contentText = "";
    let className = ""
    switch (status) {
        case "1":
            className = "bg-green-500/20 text-green-500 border border-green-500"
            contentText = "Completed"
            break
        default:
            className = "text-black"
            break;
    }
    return <div className="flex justify-between items-center" key={transaction.tId}>
        <div className="flex gap-2">
            <img src="https://th.bing.com/th/id/OIP.L1dgSDIjuIZAZvEAf5_cMgHaHa?rs=1&pid=ImgDetMain" alt="" width="50px" className="rounded-full p-1 bg-black shadow-inner shadow-green-400" />
            <ul className="space-y-1">
                <li className="text-slate-200 text-md"><strong>{transaction.partyB}</strong></li>
                <li className="text-slate-400 font-bold text-sm"><small>{moment(transaction.timestamp).format('LLL')}</small></li>
            </ul>
        </div>
        <ul className="space-y-1">
            <li><span className={`${transaction.type === "0" ? "deposit" : "withdraw"} font-bold`}>{transaction.type === "1" ? "+" : "-"} KES {transaction.amount}</span></li>
            <li><span className={`${className} px-4 py-1 rounded-md font-bold`}>{contentText}</span></li>
        </ul>
    </div>
}