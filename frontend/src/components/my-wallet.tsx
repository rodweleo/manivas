import { Badge } from "./ui/badge";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "./ui/card";

export default function MyWallet() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>My Wallet</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between gap-5">
                <Card className="w-full">
                    <CardHeader>
                        <CardDescription>Total Income</CardDescription>
                        <CardTitle>KSH 100,000 <Badge>+8%</Badge></CardTitle>
                    </CardHeader>
                    <CardFooter>
                        Last 7 days Income
                    </CardFooter>

                </Card>
                <Card className="w-full">
                    <CardHeader>
                        <CardDescription>Total Expense</CardDescription>
                        <CardTitle>KSH 100,000</CardTitle>
                    </CardHeader>
                </Card>
                <Card className="w-full">
                    <CardHeader>
                        <CardDescription>Total Investment</CardDescription>
                        <CardTitle>KSH 100,000</CardTitle>
                    </CardHeader>
                </Card>
            </CardContent>
        </Card>
    )
}