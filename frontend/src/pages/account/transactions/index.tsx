export const Transactions = () => {


    return <section className="h-screen w-full">
        <div className="flex justify-between items-center w-full sticky top-0 bg-green-950 h-20 px-4">
            <h1 className="text-slate-200 font-bold text-xl">Transactions</h1>
            <div className="flex items-center gap-2 cursor-pointer">
                <p className="text-slate-500 font-bold">Last 30 Days</p>
                <i className="fa-solid fa-caret-down text-white"></i>
            </div>
        </div>
        <ul className="space-y-4 p-5">
            <li className="w-full">
            </li>

        </ul>
    </section>
}