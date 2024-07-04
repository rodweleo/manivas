import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TransactionList } from "../../../components/transactions/TransactionList";
import { Button } from "@/components/ui/button";
import { GiReceiveMoney } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { TbPigMoney } from "react-icons/tb";
import { PiHandDepositLight } from "react-icons/pi";
import { useNavigate } from "react-router";
import { Progress } from "@/components/ui/progress";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label"
import { IoIosArrowForward } from "react-icons/io";

export const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <main>
      <article className="space-y-5 h-full">
        <Card className="max-w-[450px] bg-gradient-to-tr from-blue-300 via-blue-100 to-blue-300">
          <CardHeader>
            <CardTitle>Manivas Smart Card</CardTitle>
            <CardDescription>Virtual Debit Card</CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <h2 className="text-gray-500">Account Balance</h2>
              <span className="text-xl font-bold">KES 100,000.00</span>
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
        <section className="flex flex-wrap items-center gap-5">
          <Button className="rounded-full flex items-center gap-2">
            <GiPayMoney /> Send
          </Button>
          <Button className="rounded-full flex items-center gap-2">
            <GiReceiveMoney /> Receive
          </Button>
          <Button className="rounded-full flex items-center gap-2">
            <TbPigMoney /> Save
          </Button>
          <Button className="rounded-full flex items-center gap-2" onClick={() => navigate("/account/deposit")}>
                <PiHandDepositLight /> Deposit
              </Button>
          <Drawer>
            <DrawerTrigger asChild>
              <Button className="rounded-full flex items-center gap-2">
                <PiHandDepositLight /> Deposit
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle className="text-left">Deposit</DrawerTitle>
                </DrawerHeader>
                <div className="p-5 space-y-5">
                  <RadioGroup defaultValue="recurring">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="recurring" id="r1" />
                      <Label htmlFor="r1">Recurring Deposit <span className="text-blue-500 italic">(Recommended)</span></Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="single" id="r2" />
                      <Label htmlFor="r2">Single Deposit</Label>
                    </div>
                  </RadioGroup>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button>Continue</Button>
                  </DrawerClose>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </section>

        <section>
          <div className="space-y-1">
            <h2>
              <span className="font-semibold">Goal Achieving:</span>{" "}
              <span className="font-bold">{((34000/100000) * 100)}%</span>
            </h2>
            <div className="flex justify-between">
              <div>
                <h3>Current Savings</h3>
                <span className="font-bold">KES 34,000</span>
              </div>
              <div>
                <h3>Target Goal</h3>
                <span className="font-bold">KES 100,000</span>
              </div>
            </div>
            <Progress value={((34000/100000) * 100)} color="green" />
          </div>
        </section>
        <section>
          <Card className="flex items-center bg-slate-900 max-w-[450px]">
            <CardHeader>
              <CardTitle className="text-white">
                Check credit score
              </CardTitle>
              <CardDescription>
                See your credit report absolutely Free
              </CardDescription>
            </CardHeader>
            <button className="p-1 rounded-full bg-white " title="Check credit score" type="button">
              <IoIosArrowForward />
            </button>
          </Card>
        </section>
        <section className="w-full space-y-2 h-full flex flex-col justify-between">
          <h2 className="font-bold text-xl">Transactions</h2>
          <TransactionList />
        </section>
      </article>
    </main>
  );
};
