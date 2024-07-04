import { useEffect, useState } from "react"
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { auth, db } from "@/firebase/firebase.config";
import { Transaction } from "@/utils/interfaces";

export const useUserTransactions = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(()=>{
        const q = query(collection(db, "transactions"), where("userId", "==", auth.currentUser?.uid));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const fetchedData = querySnapshot.docs.map((doc) => {
            return doc.data() as Transaction
          })
          setTransactions(fetchedData)
        });

        return () => unsubscribe()

    }, [])

    return {
        transactions
    }
}