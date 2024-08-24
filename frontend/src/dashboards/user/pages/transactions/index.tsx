import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpDown, ChevronDown, DollarSign, Filter, Plus, Search } from "lucide-react"

export default function TransactionsPage() {
    const [searchTerm, setSearchTerm] = React.useState("")
    const [filterCategory, setFilterCategory] = React.useState("all")
    const [sortOrder, setSortOrder] = React.useState("desc")

    const transactions = [
        { id: 1, date: "2023-07-01", description: "Grocery Store", amount: -85.32, category: "Food" },
        { id: 2, date: "2023-06-30", description: "Salary Deposit", amount: 3200.00, category: "Income" },
        { id: 3, date: "2023-06-28", description: "Electric Bill", amount: -120.50, category: "Utilities" },
        { id: 4, date: "2023-06-25", description: "Online Shopping", amount: -65.99, category: "Shopping" },
        { id: 5, date: "2023-06-22", description: "Restaurant Dinner", amount: -45.00, category: "Food" },
        { id: 6, date: "2023-06-20", description: "Gas Station", amount: -40.00, category: "Transportation" },
        { id: 7, date: "2023-06-18", description: "Movie Tickets", amount: -25.00, category: "Entertainment" },
        { id: 8, date: "2023-06-15", description: "Freelance Payment", amount: 500.00, category: "Income" },
        { id: 9, date: "2023-06-12", description: "Phone Bill", amount: -80.00, category: "Utilities" },
        { id: 10, date: "2023-06-10", description: "Gym Membership", amount: -50.00, category: "Health" },
    ]

    const filteredTransactions = transactions
        .filter(transaction =>
            transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filterCategory === "all" || transaction.category === filterCategory)
        )
        .sort((a, b) => {
            if (sortOrder === "asc") {
                return a.amount - b.amount
            } else {
                return b.amount - a.amount
            }
        })

    const totalIncome = filteredTransactions.reduce((sum, transaction) =>
        transaction.amount > 0 ? sum + transaction.amount : sum, 0
    )

    const totalExpenses = filteredTransactions.reduce((sum, transaction) =>
        transaction.amount < 0 ? sum + Math.abs(transaction.amount) : sum, 0
    )

    return (
        <main className="space-y-5">
            <Card>
                <CardTitle>
                    <CardHeader>Transactions</CardHeader>
                    <CardDescription></CardDescription>
                </CardTitle>
                <CardContent>
                    <div className="grid gap-4 mb-6 md:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                <CardTitle className="text-sm font-medium">Total Transactions</CardTitle>
                                <DollarSign className="w-4 h-4 text-gray-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{filteredTransactions.length}</div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                <CardTitle className="text-sm font-medium">Total Income</CardTitle>
                                <DollarSign className="w-4 h-4 text-green-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-green-500">${totalIncome.toFixed(2)}</div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
                                <DollarSign className="w-4 h-4 text-red-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-red-500">${totalExpenses.toFixed(2)}</div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                <CardTitle className="text-sm font-medium">Net Income</CardTitle>
                                <DollarSign className="w-4 h-4 text-gray-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">${(totalIncome - totalExpenses).toFixed(2)}</div>
                            </CardContent>
                        </Card>
                    </div>


                </CardContent>
            </Card>

            <Card>
                <CardTitle>
                    <div className="flex justify-between items-center p-5">
                        <Input
                            placeholder="Search transactions..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-64"
                        />
                        <div className="flex items-center space-x-2">
                            <Select value={filterCategory} onValueChange={setFilterCategory}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Filter by category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Categories</SelectItem>
                                    <SelectItem value="Food">Food</SelectItem>
                                    <SelectItem value="Income">Income</SelectItem>
                                    <SelectItem value="Utilities">Utilities</SelectItem>
                                    <SelectItem value="Shopping">Shopping</SelectItem>
                                    <SelectItem value="Transportation">Transportation</SelectItem>
                                    <SelectItem value="Entertainment">Entertainment</SelectItem>
                                    <SelectItem value="Health">Health</SelectItem>
                                </SelectContent>
                            </Select>
                            <Filter className="h-4 w-4 text-gray-500" />
                        </div>
                        <Button>
                            <Plus className="h-4 w-4 mr-2" /> Add Transaction
                        </Button>
                    </div>
                </CardTitle>
                <CardContent>

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead className="text-right">
                                    <Button variant="ghost" onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
                                        Amount
                                        <ArrowUpDown className="ml-2 h-4 w-4" />
                                    </Button>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredTransactions.map((transaction) => (
                                <TableRow key={transaction.id}>
                                    <TableCell>{transaction.date}</TableCell>
                                    <TableCell>{transaction.description}</TableCell>
                                    <TableCell>{transaction.category}</TableCell>
                                    <TableCell className={`text-right ${transaction.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                        ${Math.abs(transaction.amount).toFixed(2)}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </main>
    )
}