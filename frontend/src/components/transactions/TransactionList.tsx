import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react"
import { auth, db } from "../../firebase/firebase.config";
import { TransactionListItem } from "./TransactionListItem";

interface Transaction {
    tId: string,
    partyB: string | number,
    type: string | number,
    timestamp: string,
    amount: number
}

export const TransactionList = () => {
    const user = auth.currentUser;
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const fetchTransactions = async () => {
        const transactionsRef = collection(db, "transactions");
        const q = query(transactionsRef, where("partyA", "==", user?.uid))
        const qSnapshot = await getDocs(q)

        if (!qSnapshot.empty) {
            const docs = qSnapshot.docs.map((doc) => {
                return doc.data()
            })
            setTransactions(docs as Transaction[])
        }
    }
    useEffect(() => {
        fetchTransactions()
    }, [])
    return <ul className="w-full">
        {transactions.map((transaction) => (
            <TransactionListItem transaction={transaction} />
        ))}
    </ul>
}