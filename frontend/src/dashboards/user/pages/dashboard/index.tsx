import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { IoIosArrowForward } from "react-icons/io";
import ManivasSmartCart from "@/components/manivas-smart-card";
import QuickLinks from "@/components/quick-links";
import DailyLimit from "@/components/daily-limit";
import UserGoalsList from "@/components/user-goals-list";
import MyWallet from "@/components/my-wallet";
import UserTransactionListTable from "@/components/user-transaction-list-table";
import { Link } from "react-router-dom";
import UserFinancialAnalysisChart from "@/components/charts/user-financial-analysis-chart";
import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";



export default function Dashboard() {
  const [bills, setBills] = useState([
    { id: 1, name: 'Rent', amount: 1200, dueDate: '2023-07-01', frequency: 'Monthly' },
    { id: 2, name: 'Electricity', amount: 80, dueDate: '2023-06-25', frequency: 'Monthly' },
    { id: 3, name: 'Internet', amount: 50, dueDate: '2023-06-30', frequency: 'Monthly' },
    { id: 4, name: 'Car Insurance', amount: 200, dueDate: '2023-07-15', frequency: 'Quarterly' },
  ])

  const getDaysUntilDue = (dueDate) => {
    const today = new Date()
    const due = new Date(dueDate)
    const diffTime = due - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <main className="flex gap-5 w-full ">
      <aside className="w-1/4 sticky space-y-5 h-full float-left">
        <ManivasSmartCart />
        <div className="flex flex-col border rounded-md p-2.5 space-y-2.5 w-full bg-white">
          <h1 className="font-semibold">Quick Links</h1>
          <QuickLinks />
        </div>
        <DailyLimit />
        <UserGoalsList />

      </aside>
      <article className="w-full space-y-5">
        <MyWallet />
        <UserFinancialAnalysisChart />
        <UserTransactionListTable />
      </article>
      <aside className="w-1/4 space-y-5 h-full float-right">
        <Link to="/account/credit-score">
          <Card className="flex justify-between items-center bg-gradient-to-tr from-blue-300 via-blue-100 to-blue-300 max-w-[450px]">
            <CardHeader>
              <CardTitle>
                Check credit score
              </CardTitle>
              <CardDescription>
                See your credit report absolutely Free
              </CardDescription>
            </CardHeader>
            <button className="p-1 rounded-full bg-white mr-5" title="Check credit score" type="button">
              <IoIosArrowForward />
            </button>
          </Card>
        </Link>

        <Card>
          <CardHeader>
            <CardTitle> Bill Reminder</CardTitle>
            <CardDescription>Keep track of your upcoming bills and due dates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Upcoming Bills</h3>
              {bills.map((bill) => {
                const daysUntilDue = getDaysUntilDue(bill.dueDate)
                return (
                  <div key={bill.id} className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <div>
                      <span className="font-medium">{bill.name}</span>
                      <div className="text-sm text-muted-foreground">
                        <CalendarIcon className="inline w-4 h-4 mr-1" />
                        Due: {bill.dueDate}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold">${bill.amount.toFixed(2)}</span>
                      <div>
                        {daysUntilDue <= 3 ? (
                          <Badge variant="destructive">Due in {daysUntilDue} days</Badge>
                        ) : (
                          <Badge variant="secondary">Due in {daysUntilDue} days</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </aside >
    </main >
  );
}
