import { TransactionList } from "../../../components/transactions/TransactionList";
import { IconButton } from "../../../components/ui/icon_button";
import { Form } from "react-router-dom";


export const Dashboard = () => {

  return (
    <section className="w-full h-full flex flex-col justify-between">
      <div className="flex flex-col gap-8 items-center justify-center mt-10">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-slate-300 font-bold text-xl">Available Balance</h2>
          <h1 className="text-white font-bold text-[40px]">KES 30,000.00</h1>
        </div>
        <div className="flex gap-2 w-full justify-center max-md:px-4">
          <IconButton options={{
            type: "submit",
            variant: "secondary",
            label: "Withdraw",
            style: "text-white rounded-full w-52"

          }} />
          <Form action="/account/topup">
            <IconButton options={{
              type: "submit",
              variant: "primary",
              label: "Top Up",
              style: "rounded-full text-white w-52"
            }} />
          </Form>
        </div>
      </div>

      <section className=" bg-gradient-to-b from-slate-700/60 from-50% via-transparent to-transparent h-2/4 flex flex-col items-center mt-10 rounded-t-[10%] p-10">
        <button type="button" className="h-1 w-10 rounded-full bg-white"></button>
        <div className="mt-10 w-full">
          <TransactionList />
        </div>
      </section >
    </section >
  );
}