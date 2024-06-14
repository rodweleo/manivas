import { useState } from "react"
import { IconButton } from "../../components/ui/icon_button"
import { useForm } from "react-hook-form"
import axios from "axios"

export const TopUp = () => {
    const [amount, setAmount] = useState(0)
    const { handleSubmit } = useForm()
    const keypad_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const handleKeypadClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const btnValue = Number(e.currentTarget.innerHTML);
        setAmount(Number(amount + "" + btnValue))

    }


    const deleteEntry = () => {
        if (amount && amount.toString().split("").length > 0) {
            setAmount(Number(amount.toString().slice(0, amount.toString().length - 1)))
        }
    }

    const topUp = async () => {
        const response = await axios.post("https://491e-197-232-40-98.ngrok-free.app/api/mpesa/stkPush", {
            phoneNumber: 254795565344,
            amount: amount
        });
        console.log(response);
    }

    return <form onSubmit={handleSubmit(topUp)} className="h-screen flex flex-col items-center justify-start gap-20 w-full">
        <h1 className="text-white font-bold text-7xl flex items-center"><span className="text-slate-300/50 text-4xl">KES</span> &nbsp;{amount && amount.toLocaleString("en-us", {
            minimumFractionDigits: 1,
            maximumFractionDigits: 2
        })}</h1>
        <div className="flex flex-col items-center gap-5">

            <div className="flex flex-col items-center gap-5" >
                <div className="grid grid-cols-3 gap-5 w-full">
                    {keypad_numbers.map((keypad, index: number) => (
                        <button type="button" className="bg-slate-500/40 text-white font-bold text-3xl flex items-center justify-center p-8 rounded-xl cursor-pointer transition-all duration-300 hover:bg-green-500 focus:border focus:border-green-500" key={index} onClick={(e) => handleKeypadClick(e)}>{keypad}</button>
                    ))}
                </div>
                <div className="flex justify-end gap-5 w-full">
                    <button type="button" className="bg-slate-500/40 text-white flex items-center text-3xl justify-center p-8 font-bold rounded-xl cursor-pointer transition-all duration-300  hover:border-green-500" onClick={(e) => handleKeypadClick(e)}>0</button>
                    <button type="button" className="p-8 text-white rounded-md hover:bg-red-500/50 hover:text-red-500" onClick={() => deleteEntry()}><div className="fa-solid fa-delete-left scale-150"></div></button>
                </div>
            </div>
            <IconButton
                options={{
                    variant: "secondary",
                    label: `Top Up ${amount && amount > 0 ? amount : ""}`,
                    style: "w-full rounded-md text-white",
                    type: "submit"
                }} />
        </div>
    </form>
}