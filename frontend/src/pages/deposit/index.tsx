import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
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

const GEMINI_API_KEY = "AIzaSyDxqIKsDNxoHHedaXqKVXGdRDb4F4d4cWo";

const userData = {
  income: 1000,
  goal: 100000,
};
export const Deposit = () => {
  const [steps, setSteps] = useState(3);
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
  return (
    <main className="w-full h-full space-y-4">
      <div>
        <h1 className="font-bold text-xl">Deposit type</h1>
        <p className="text-slate-500">Step {steps} / 4</p>
      </div>
      {steps === 1 && (
        <article>
          <section>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Save for a car</AccordionTrigger>
                <AccordionContent>
                  <DepositForm />
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

      {steps === 3 && (
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
            <CardFooter className="flex items-center justify-between">
              <div className="text-center">
                <h3 className="font-bold">KES 35.52K</h3>
                <span className="text-xs text-slate-500">Income</span>
              </div>
              <div className="text-center">
                <h3 className="font-bold">KES 16.52K</h3>
                <span className="text-xs text-slate-500">Outcome</span>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle></CardTitle>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </section>
      )}

      <section className="flex items-center justify-between">
        <Button
          variant="outline"
          className="rounded-full w-32"
          onClick={() => setSteps((prev) => prev - 1)}
        >
          Back
        </Button>
        <Button className="rounded-full w-32" onClick={run()}>
          Continue
        </Button>
      </section>
    </main>
  );
};

const DepositForm = () => {
  const [amount, setAmount] = useState(0);
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
    const btnValue = Number(e.currentTarget.innerHTML);
    setAmount(Number(amount + "" + btnValue));
  };

  const deleteEntry = () => {
    if (amount && amount.toString().split("").length > 0) {
      setAmount(
        Number(amount.toString().slice(0, amount.toString().length - 1))
      );
    }
  };
  const topUp = async () => {
    try {
      const response = await axios.post(
        "https://491e-197-232-40-98.ngrok-free.app/api/mpesa/stkPush",
        {
          phoneNumber: 254795565344,
          amount: amount,
        }
      );
      console.log(response);
    } catch (error) {
      toast({
        variant: "destructive",
        title: error.message,
        description: "Sorry, something went wrong. Try again later.",
      });
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(topUp)}
      className="flex flex-col items-center space-y-4 w-full"
    >
      <h1 className="font-bold text-xl flex items-center">
        <span className="text-gray-300 text-xl">KES</span> &nbsp;
        {amount &&
          amount.toLocaleString("en-us", {
            minimumFractionDigits: 1,
            maximumFractionDigits: 2,
          })}
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
        <Button className="w-full">Deposit {amount > 0 && amount}</Button>
      </div>
    </form>
  );
};
