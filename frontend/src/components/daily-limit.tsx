import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";

export default function DailyLimit() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Daily Limit <Badge>+8%</Badge></CardTitle>
            </CardHeader>
            <CardContent className="space-y-2.5">
                <div className="flex justify-between">
                    <h1>KSH 50,000</h1>

                </div>
                <Progress value={((34000 / 100000) * 100)} indicatorColor="bg-blue-500" backgroundColor="bg-blue-100" />
            </CardContent>
        </Card>
    )
}