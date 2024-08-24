import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { PiHandDepositLight } from "react-icons/pi";
import { TbPigMoney } from "react-icons/tb";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter, DrawerClose } from "./ui/drawer";
import { useNavigate } from "react-router-dom";

export default function QuickLinks() {
    const navigate = useNavigate()
    return (
        <ul className="p-5 rounded-md w-full flex justify-between bg-slate-100/50 border ">
            <li>
                <button className="flex flex-col items-center">
                    <GiPayMoney /> Send
                </button></li>
            <li><button className="flex flex-col items-center">
                <GiReceiveMoney /> Receive
            </button></li>
            <li><button className="flex flex-col items-center">
                <TbPigMoney /> Save
            </button></li>
            <li >
                <Drawer>
                    <DrawerTrigger asChild>
                        <button className="flex flex-col items-center">
                            <PiHandDepositLight /> Deposit
                        </button>
                    </DrawerTrigger>
                    <DrawerContent>
                        <div className=" max-w-sm">
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
                                    <button onClick={() => navigate("/account/deposit")} >Continue</button>
                                </DrawerClose>
                                <DrawerClose asChild>
                                    <button>Cancel</button>
                                </DrawerClose>
                            </DrawerFooter>
                        </div>
                    </DrawerContent>
                </Drawer>
            </li>
        </ul>
    )
}