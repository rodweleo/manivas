import { NewsLetterForm } from "./forms/NewsLetterForm";

export default function Footer() {
    return (
        <footer className="bg-green-700 p-5 flex flex-col items-center">
            <div className="bg-red-400 w-fit rounded-md p-5 flex flex-wrap gap-4">
                <div className="w-fit">
                    <h1 className="font-bold text-2xl">Get the latest news from <span className="text-green-700">Manivas</span></h1>
                    <p className="text-slate-400 font-bold text-sm">Successful businesses have many things in common, today we'll look at the</p>
                </div>
                <NewsLetterForm />
            </div>
        </footer>
    )
}