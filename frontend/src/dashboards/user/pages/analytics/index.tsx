import UserFinancialAnalysisChart from "@/components/charts/user-financial-analysis-chart";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { BookOpenIcon, CalendarIcon, ClockIcon } from "lucide-react";
import Chart from "react-google-charts";

export default function UserAnalytics() {

    const data = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
    ];

    const options = {
        title: "My Daily Activities",
        is3D: true,
    };


    const title = "Math Homework"
    const subject = "Mathematics"
    const dueDate = "2023-06-15"
    const status = "not_started"
    const grade = "10"

    const getStatusColor = (status: string) => {
        switch (status) {
            case "not_started":
                return "bg-red-100 text-red-800"
            case "in_progress":
                return "bg-yellow-100 text-yellow-800"
            case "completed":
                return "bg-green-100 text-green-800"
            default:
                return "bg-gray-100 text-gray-800"
        }

    }

    const getButtonText = (status: string) => {
        return status === "not_started" ? "Begin Assignment" : "Continue Assignment"
    }

    return (
        <main className="space-y-2.5">
            <UserFinancialAnalysisChart />
            <Card>
                <CardTitle>
                    <CardHeader>Spending By Category</CardHeader>
                </CardTitle>
                <CardContent>
                    <Chart
                        chartType="PieChart"
                        data={data}
                        options={options}
                        width={"100%"}
                        height={"400px"}
                    />
                </CardContent>
                <CardFooter>
                    <div className="w-full space-y-5">
                        <div className="space-y-4 ">
                            <h3 className="text-lg font-semibold">Key Insights</h3>
                            <div className="bg-muted p-4 rounded-lg">
                                <ul className="list-disc list-inside space-y-2 w-full">
                                    <li>Your spending has increased by 8% compared to last month.</li>
                                    <li>Housing is your largest expense category at 35% of total spending.</li>
                                    <li>You've stayed within budget for 4 out of 6 categories this month.</li>
                                    <li>Your savings rate is currently 15% of your income.</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Recommendations</h3>
                            <div className="bg-muted p-4 rounded-lg">
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Consider reducing your entertainment expenses to increase your savings rate.</li>
                                    <li>You might benefit from setting up automatic transfers to your savings account.</li>
                                    <li>Review your utility bills for potential savings opportunities.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </CardFooter>
            </Card>
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-lg font-bold">{title}</CardTitle>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <BookOpenIcon className="h-4 w-4" />
                        <span>{subject}</span>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">Due: {dueDate}</span>
                        </div>
                        <Badge variant="secondary">Grade {grade}</Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                        <ClockIcon className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Status:</span>
                        <Badge className={getStatusColor(status)}>
                            {status.replace("_", " ").charAt(0).toUpperCase() + status.replace("_", " ").slice(1)}
                        </Badge>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">
                        {getButtonText(status)}
                    </Button>
                </CardFooter>
            </Card>
        </main>
    )
}