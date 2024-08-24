import { IoAdd } from "react-icons/io5";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import UserGoalListItem from "./user-goal-list-item";
import { Button } from "./ui/button";

export default function UserGoalsList() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <div className="flex items-center justify-between">
                        <h1>My Goals</h1>{" "}
                        <Button variant="outline" className="flex items-center text-lg" title="Add Goal"><IoAdd /> Add Goal</Button>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-5">
                    <li><UserGoalListItem /></li>
                    <li><UserGoalListItem /></li>
                </ul>
            </CardContent>
        </Card>
    )
}