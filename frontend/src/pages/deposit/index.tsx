import { useState } from "react";
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RiDeleteBack2Line } from "react-icons/ri";
import { Badge } from "@/components/ui/badge";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ClipLoader from "react-spinners/ClipLoader";
import { IoIosArrowBack } from "react-icons/io";



const userData = {
  income: 1000,
  goal: 100000,
};


export const Deposit = () => {
  const [steps, setSteps] = useState<number>(1);
  const GEMINI_API_KEY: string = import.meta.env.VITE_GEMINI_API_KEY as string | "AIzaSyDxqIKsDNxoHHedaXqKVXGdRDb4F4d4cWo";
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

  const model = genAI.getGenerativeModel({
    systemInstruction: `Your name is Alex and you are a financial Guide. Alex is designed to serve as a knowledgeable and empathetic financial advisor, providing users with personalized and actionable financial advice. With deep expertise in finance, budgeting, and investments, Alex communicates in a professional yet supportive tone, ensuring users feel understood and guided. Alex's primary role is to assist users in setting and achieving their financial goals, whether it’s managing budgets or making informed investment decisions. The model is trained to offer practical and easy-to-implement strategies, while maintaining a clear and concise communication style. Alex is also dedicated to respecting user privacy and building trust, reassuring users that their financial information is secure. Engaging and interactive, Alex keeps users motivated and involved, adapting advice to their unique needs. In every interaction, Alex is ready to greet users warmly, understand their financial aspirations, provide tailored guidance, and encourage progress. Alex continuously learns from user feedback and stays updated with the latest financial trends, offering unbiased and ethical advice. This dynamic persona makes Alex an invaluable resource for users on their financial journey, ensuring that managing finances becomes a more accessible and supportive experience.`,
    model: "gemini-1.5-flash",
  });

  async function run() {
    const prompt = `Generate financial advice for a user with income ${userData.income} and goal ${userData.goal}.`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    console.log(text);
  }
  console.log(import.meta.env.VITE_GEMINI_API_KEY)
  return (
    <main className="w-full h-full space-y-4">
      <div>
        <h1 className="font-bold text-xl">Deposit type</h1>
        <p className="text-slate-500">Step {steps} / 2</p>
      </div>
      {steps === 1 && (
        <article>
          <section>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Save for a car</AccordionTrigger>
                <AccordionContent>
                  <DepositForm setSteps={setSteps}/>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Buy a home</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Budgeting</AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Save More</AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Vacation Fund</AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </article>
      )}

      {steps === 2 && (
        <section className="space-y-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                AI Analyse <Badge className=" text-xs bg-blue-500">NEW</Badge>
              </CardTitle>
              <CardDescription>
                Following your Income & Outcome history we offer you the best
                variations
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="text-center">
                  <h3 className="font-bold">KES 35.52K</h3>
                  <span className="text-xs text-slate-500">Income</span>
                </div>
                <div className="text-center">
                  <h3 className="font-bold">KES 16.52K</h3>
                  <span className="text-xs text-slate-500">Outcome</span>
              </div>
            </CardContent>
            <CardFooter >
              <Button onClick={() => run()}>Ask AI</Button>
            </CardFooter>
          </Card>

        </section>
      )}

      {
        steps > 1 && <section className="flex items-center justify-between">
        {steps > 1 && <Button className="w-32 flex items-center gap-2.5" variant="outline" onClick={() => setSteps((prev) => prev - 1)}>
          <IoIosArrowBack size={12.5}/> <span>Back</span>
        </Button>}
        <Button className="w-32">
          Finish
        </Button>
      </section>
      }
    </main>
  );
};

const DepositForm = ({setSteps}:{
  setSteps: React.Dispatch<React.SetStateAction<number>>
}) => {
  const [amount, setAmount] = useState<number[]>([]);
  const [paymentInProgress, setPaymentInProgress] = useState(false)
  const { handleSubmit } = useForm();
  const { toast } = useToast();
  const keypad_numbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    ".",
    0,
    <RiDeleteBack2Line />,
  ];

  const handleKeypadClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if(e.currentTarget.innerText === ""){
      const amountCopy = [...amount];
      amountCopy.pop();
      setAmount(amountCopy)

    }else{
      setAmount([...amount, Number(e.currentTarget.innerText)])
    }
  };


  const topUp = async () => {
    setPaymentInProgress(true)
    try {
      const response = await axios.post(
        "https://api-manivas.vercel.app/api/mpesa/stkPush",
       {
        phoneNumber: 254795565344,
        amount: amount.join("")
       }
      );
      setPaymentInProgress(false)
      toast({
        description: response.data.CustomerMessage
      })

    } catch (error: AxiosError | any | unknown) {
      setPaymentInProgress(false)
      if(axios.isAxiosError(error)){
        toast({
          variant: "destructive",
          title: error.message,
          description: error.message,
        });
        console.log(error);
      }

    }
  };

  const inc = () => {
    setSteps(2)
  }

  return (
    <form
      onSubmit={handleSubmit(topUp)}
      className="flex flex-col items-center space-y-4 w-full"
    >
      <h1 className="font-bold text-xl flex items-center">
        <span className="text-gray-300 text-xl">KES</span> &nbsp;
        {amount.join("")}
      </h1>
      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-col items-center gap-5">
          <div className="grid grid-cols-3 gap-5 w-full">
            {keypad_numbers.map((keypad, index: number) => (
              <Button
                type="button"
                className="bg-gray-200 text-black font-bold text-lg flex items-center justify-center p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-blue-200 focus:border focus:border-green-500"
                key={index}
                onClick={(e) => handleKeypadClick(e)}
              >
                {keypad}
              </Button>
            ))}
          </div>
        </div>
        <Button className="w-full" type="button" onClick={() => inc()}>{paymentInProgress ? <ClipLoader color="white" size={20}/> : "Deposit " + amount.join("")}</Button>
      </div>
    </form>
  );
};
