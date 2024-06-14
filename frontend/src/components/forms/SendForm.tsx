import { useId, useState } from "react";
import TextField from "../ui/TextField";
import { useForm } from "react-hook-form";
import { IconButton } from "../ui/icon_button";

export const SendForm = () => {
    const { register } = useForm()

    const nations = [
        {
            nation_flag: "icons/kenya-wave-icon.png",
            nation: "KES"
        },
        {
            nation_flag: "icons/usa-flag-icon.png",
            nation: "USA"
        },
    ]


    const sendCurrencyListId = useId();
    const [fromCurrency, setSendCurrency] = useState(
        {
            nation_flag: nations[0].nation_flag,
            nation: nations[0].nation
        },
    );
    const [toCurrency, setToCurrency] = useState(
        {
            nation_flag: nations[1].nation_flag,
            nation: nations[1].nation
        },
    );

    const sendCurrencyList = document.getElementById(sendCurrencyListId);
    const toggleCurrencyList = (e: any) => {
        e.target.getElementsByTagName("i")[0]?.classList.toggle("rotate-180")

        sendCurrencyList?.classList.toggle("-z-10")
    }


    const selectSendCurrency = (currency: any) => {
        setSendCurrency({
            nation: currency.nation,
            nation_flag: currency.nation_flag
        })
        sendCurrencyList?.classList.add("-z-10")
        setToCurrency({
            nation_flag: "",
            nation: ""
        })
    }

    return <form className="bg-white rounded-md h-2/4 max-w-md shadow-xl shadow-slate-400/50 p-5 space-y-4">

        <div className="w-full space-y-4">
            <div className="flex space-x-4 justify-between">
                <TextField
                    options={{
                        name: "name",
                        label: "Send",
                        register,
                        type: "number",
                        min: 0,
                        hintText: "0.00"
                    }} />

                <label htmlFor="">
                    <h3 className="font-bold text-slate-500 text-left">Currency</h3>
                    <div className="relative h-auto flex items-center justify-between focus:outline-slate-400 w-36 border border-slate-400/50 rounded-md px-4">
                        <button type="button" className="flex justify-between w-full items-center h-10" onClick={(e) => toggleCurrencyList(e)}>
                            <p className="flex items-center gap-2"><img src={fromCurrency.nation_flag} alt={fromCurrency.nation} className="w-6" /> <span id="send-currency" className="font-bold text-xl ">{fromCurrency.nation}</span></p>
                            <i className="fa-solid fa-angle-down text-slate-400 transition-all duration-300 -z-0"></i>
                        </button>
                        <ul id={sendCurrencyListId} className="absolute top-[44px] -z-10 bg-slate-300 w-full left-0 rounded-md p-2 flex flex-col items-center space-y-2">
                            {nations.map((currency, index: number) => (
                                <li key={index} className="flex items-center gap-2 cursor-pointer" onClick={() => selectSendCurrency(currency)}><img src={currency.nation_flag} alt={currency.nation} className="w-6" /> <span className="font-bold text-xl ">{currency.nation}</span></li>
                            ))}
                        </ul>

                    </div>
                </label>
            </div>

            <div className="flex space-x-4 justify-between">
                <TextField
                    options={{
                        name: "name",
                        label: "Receive",
                        register,
                        type: "number",
                        min: 0,
                        hintText: "0.00"
                    }} />

                <label htmlFor="">
                    <h3 className="font-bold text-slate-500 text-left">Currency</h3>
                    <div className="relative h-auto flex items-center justify-between focus:outline-slate-400 w-36 border border-slate-400/50 rounded-md px-4">
                        <button type="button" className="flex justify-between w-full items-center h-10" onClick={(e) => toggleCurrencyList(e)}>
                            <p className="flex items-center gap-2"><img src={toCurrency.nation_flag} alt={fromCurrency.nation} className="w-6" /> <span id="send-currency" className="font-bold text-xl ">{toCurrency.nation}</span></p>
                            <i className="fa-solid fa-angle-down text-slate-400 transition-all duration-300 -z-0"></i>
                        </button>
                        <ul id={sendCurrencyListId} className="absolute top-[44px] -z-10 bg-slate-300 w-full left-0 rounded-md p-2 flex flex-col items-center space-y-2">
                            {nations.map((currency, index: number) => (
                                <li key={index} className="flex items-center gap-2 cursor-pointer" onClick={() => selectSendCurrency(currency)}><img src={currency.nation_flag} alt={currency.nation} className="w-6" /> <span className="font-bold text-xl ">{currency.nation}</span></li>
                            ))}
                        </ul>

                    </div>
                </label>
            </div>
        </div>
        <div className="flex flex-col items-center space-y-2">
            <p className=" text-2xl">1 <span className="font-bold">{fromCurrency.nation}</span> == 1 <span className="font-bold">{toCurrency.nation}</span></p>
            <IconButton
                options={{
                    label: "Continue",
                    variant: "primary",
                    style: "rounded-full text-white w-full",
                    suffixIcon: "fa-solid fa-arrow-right"
                }}
            />

        </div>
    </form>
}