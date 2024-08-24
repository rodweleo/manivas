import Chart from "react-google-charts";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "../ui/card";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function UserFinancialAnalysisChart() {
    const currentYear = new Date().getFullYear();

    const data = [
        ['Month', 'Income', 'Expenses'],
        ['Jan', 25000, 22000],
        ['Feb', 30000, 12000],
        ['Mar', 14000, 5000],
        ['Apr', 22000, 12000],
        ['May', 40000, 49000],
        ['Jun', 34500, 32000],
        ['July', 32000, 16000],
        ['Aug', 16000, 5000],
        ['Sep', 50000, 29000],
        ['Oct', 46000, 32000],
        ['Nov', 38000, 12890],
        ['Dec', 60000, 20000],
    ];

    const options = {
        curveType: 'function',
        legend: { position: 'bottom' },
        animation: {
            startup: true,
            easing: "linear",
            duration: 1500,
        },
    };

    return (
        <Card >
            <div className="flex items-center justify-between pr-2.5">
                <CardHeader >
                    <CardTitle >
                        Financial Analysis
                    </CardTitle>
                    <CardDescription>Analyze your spending patterns and financial health</CardDescription>
                </CardHeader>
                <Select defaultValue={currentYear.toString()}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a year" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="2020">2020</SelectItem>
                            <SelectItem value="2021">2021</SelectItem>
                            <SelectItem value="2022">2022</SelectItem>
                            <SelectItem value="2023">2023</SelectItem>
                            <SelectItem value="2024">2024</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>


            <CardContent className="h-[400px]">
                <Chart
                    chartType="LineChart"
                    width="100%"
                    height="100%"
                    data={data}
                    options={options}
                />
            </CardContent>
        </Card>
    )
}