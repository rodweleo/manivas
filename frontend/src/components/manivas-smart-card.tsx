import { Transaction } from "@/utils/interfaces"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card"

export default function ManivasSmartCart({ transactions }: {
    transactions?: Transaction[]
}) {
    return (
        <Card className="max-w-[450px] bg-gradient-to-tr from-blue-300 via-blue-100 to-blue-300 ">
            <CardHeader>
                <CardTitle>Manivas Smart Card</CardTitle>
                <CardDescription>Virtual Debit Card</CardDescription>
            </CardHeader>
            <CardContent>
                <div>
                    <h2 className="text-gray-500">Account Balance</h2>
                    <span className="text-xl font-bold">{transactions ? transactions.reduce((sum: number, transaction) => {
                        return sum + transaction.amount
                    }, 0).toLocaleString("en-us", {
                        style: "currency",
                        currency: "KES"
                    }) : "KES 0.00"}</span>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <div>
                    <h2 className="text-gray-500">Card No.</h2>
                    <span>5235 **** **** 5274</span>
                </div>
                <div>
                    <h2 className="text-gray-500">Expiry Date</h2>
                    <span>10/24</span>
                </div>
            </CardFooter>
        </Card>
    )
}