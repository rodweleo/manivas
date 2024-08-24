import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUp, ArrowDown, CreditCard, AlertCircle, CheckCircle2, HelpCircle } from "lucide-react"
import Chart from "react-google-charts"

export default function CreditScorePage() {
    const creditScore = 720
    const previousScore = 695
    const scoreDifference = creditScore - previousScore
    const data = [
        ['Month', 'Credit Score'],
        ['Jan', 500],
        ['Feb', 300],
        ['Mar', 600],
        ['Apr', 700],
        ['May', 720],
        ['Jun', 640],
        ['July', 680],
        ['Aug', 540],
        ['Sep', 700],
        ['Oct', 600],
        ['Nov', 550],
        ['Dec', 640],
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

    const factors = [
        { name: "Payment History", status: "good", description: "You've made all payments on time." },
        { name: "Credit Utilization", status: "fair", description: "Your credit usage is at 35%. Aim for below 30%." },
        { name: "Length of Credit History", status: "good", description: "You have a good length of credit history." },
        { name: "Credit Mix", status: "fair", description: "You could benefit from a more diverse credit mix." },
        { name: "Recent Credit Inquiries", status: "good", description: "You have few recent credit inquiries." },
    ]

    const tips = [
        "Make all your payments on time",
        "Keep your credit utilization below 30%",
        "Don't close old credit accounts",
        "Limit new credit applications",
        "Regularly check your credit report for errors",
    ]

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6">Your Credit Score</h1>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Current Credit Score</CardTitle>
                        <CardDescription>Updated as of {new Date().toLocaleDateString()}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-baseline justify-center">
                            <span className="text-5xl font-bold">{creditScore}</span>
                            <span className="ml-2 text-sm text-muted-foreground">/ 850</span>
                        </div>
                        <Progress value={(creditScore / 850) * 100} className="mt-4" />
                        <div className="mt-2 flex items-center justify-center">
                            {scoreDifference > 0 ? (
                                <ArrowUp className="text-green-500 mr-1" />
                            ) : (
                                <ArrowDown className="text-red-500 mr-1" />
                            )}
                            <span className={scoreDifference > 0 ? "text-green-500" : "text-red-500"}>
                                {Math.abs(scoreDifference)} points since last month
                            </span>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Score History</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Chart
                            chartType="LineChart"
                            width="100%"
                            height="100%"
                            data={data}
                            options={options}
                        />
                    </CardContent>
                </Card>
            </div>

            <Tabs defaultValue="factors" className="mt-6">
                <TabsList>
                    <TabsTrigger value="factors">Credit Factors</TabsTrigger>
                    <TabsTrigger value="tips">Improvement Tips</TabsTrigger>
                </TabsList>
                <TabsContent value="factors">
                    <Card>
                        <CardHeader>
                            <CardTitle>Factors Affecting Your Credit Score</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {factors.map((factor, index) => (
                                    <div key={index} className="flex items-start">
                                        {factor.status === "good" ? (
                                            <CheckCircle2 className="text-green-500 mr-2 mt-1" />
                                        ) : factor.status === "fair" ? (
                                            <AlertCircle className="text-yellow-500 mr-2 mt-1" />
                                        ) : (
                                            <HelpCircle className="text-gray-500 mr-2 mt-1" />
                                        )}
                                        <div>
                                            <h3 className="font-semibold">{factor.name}</h3>
                                            <p className="text-sm text-muted-foreground">{factor.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="tips">
                    <Card>
                        <CardHeader>
                            <CardTitle>Tips to Improve Your Credit Score</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc pl-5 space-y-2">
                                {tips.map((tip, index) => (
                                    <li key={index}>{tip}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

            <div className="mt-6 flex justify-end">
                <Button>
                    <CreditCard className="mr-2 h-4 w-4" />
                    Get Your Full Credit Report
                </Button>
            </div>
        </div>
    )
}