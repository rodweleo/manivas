import { Progress } from "./ui/progress";
import { BsAirplane } from "react-icons/bs";

export default function UserGoalListItem() {

    const target = 50000;
    const current_savings = 12500

    return (
        <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <BsAirplane size={30} className="bg-slate-100 text-slate-800 p-1.5 rounded-full" />
                    <h2 className="font-semibold text-xl">Holiday</h2>
                </div>
                <p className="font-semibold">
                    <span className="text-green-500">{current_savings}</span>/<span className="text-slate-400">{target}</span>
                </p>
            </div>
            <div className="flex items-center gap-2.5">
                <Progress value={((current_savings / target) * 100)} color="green" className="w-full" />
                <span className="font-semibold text-lg">{((current_savings / target) * 100)}%</span>
            </div>
        </div>

    )
}