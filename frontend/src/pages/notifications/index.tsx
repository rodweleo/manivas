export const Notifications = () => {
    return <section className="h-full w-full flex flex-col items-center justify-center">
        <ul className="space-y-4 items-center flex flex-col">
            <li><i className="fa-solid fa-bell-slash text-slate-400 text-9xl"></i></li>
            <li><h1 className="font-bold text-slate-200 text-3xl">No Notifications Yet.</h1></li>
            <li className="font-bold text-slate-200 text-xl">You are all caught up.</li>
        </ul>
    </section>
}