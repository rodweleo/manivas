import { Button } from "@/components/ui/button";
import { SiFsecure } from "react-icons/si";
import { IoIosFlash } from "react-icons/io";
import { PiMoneyWavyFill } from "react-icons/pi";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FEATURES = [
  {
    title: "Mobile Payment Solutions",
    description: `Make payments anytime, anywhere across Africa with our
    innovative mobile payment solutions. Even in offline areas,
    you can securely transfer funds and manage your transactions
    seamlessly.`,
  },
  {
    title: "SME and Merchant Integration",
    description:
      "Empower your business with our integrated financial tools. Streamline invoicing, manage payments effortlessly, and scale operations with tailored solutions designed to meet the unique needs of SMEs and merchants.",
  },
  {
    title: "Personalized Financial Solutions",
    description:
      "Unlock personalized financial advice tailored to your goals. Our AI-powered algorithms analyze your financial behavior to offer customized solutions that help you save smarter and invest confidently.",
  },
  {
    title: "Credit Scoring and Digitized Lending",
    description:
      "Access to credit made simple. Our comprehensive credit scoring system provides a holistic view of your financial health, enabling faster approvals and seamless lending processes for SMEs.",
  },
];
export const Home = () => {
  return (
    <main id="hero" className="min-h-screen">
      <article>
        <section className="p-5 bg-blue-400 space-y-4 w-full flex items-center min-h-screen text-white">
          <div className="space-y-4">
            <p className="font-bold bg-white py-2 px-8 w-fit rounded-full shadow-lg text-black">
              &#129395; Manivas
            </p>
            <h1 className="font-bold text-5xl leading-snug">
              Manage Your <span className="text-green-600">Money</span> Transfer
              Efficiently
            </h1>

            <ul className="flex">
              <li>
                <Button
                  variant="default"
                  className="rounded-full w-[200px] bg-white text-black font-bold hover:bg-light-blue"
                >
                  Get Started
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  className="font-bold hover:text-deep-blue text-white"
                >
                  Learn More
                </Button>
              </li>
            </ul>
          </div>
        </section>
        <section className="p-5 min-h-screen flex  items-center">
          <div className="space-y-10 max-w-[400px]">
            <h1 className="text-3xl font-bold">
              Payments and data Future-proofed
            </h1>
            <ul className="space-y-5">
              <li className="flex items-center space-x-2">
                <div className="p-3 bg-deep-blue/20 text-deep-blue rounded-full">
                  <SiFsecure />
                </div>
                <ul>
                  <li className="font-bold">
                    <span> 100% Safe and Secure</span>
                  </li>
                  <li>
                    <p className="text-slate-600">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Pariatur maiores.
                    </p>
                  </li>
                </ul>
              </li>
              <li className="flex items-center space-x-2">
                <div className="p-3 bg-deep-blue/20 text-deep-blue rounded-full">
                  <IoIosFlash />
                </div>
                <ul>
                  <li className="font-bold">
                    <span> Speedly Money Exchange</span>
                  </li>
                  <li>
                    <p className="text-slate-600">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Pariatur maiores.
                    </p>
                  </li>
                </ul>
              </li>
              <li className="flex items-center space-x-2">
                <div className="p-3 bg-deep-blue/20 text-deep-blue rounded-full">
                  <PiMoneyWavyFill />
                </div>
                <ul>
                  <li className="font-bold">
                    <span> Flexible Payment Methods</span>
                  </li>
                  <li>
                    <p className="text-slate-600">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Pariatur maiores.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
        <section className="p-5 min-h-screen text-center space-y-5">
          <h1 className="text-3xl font-bold">All the Features you need</h1>
          <p className="text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            debitis tempore ex nemo totam minima nostrum ipsa aliquid voluptatem
            sit illo quo id nesciunt aut ducimus, incidunt iure, sint ipsum.
          </p>

          <div className="flex flex-wrap gap-5 justify-center">
            {FEATURES.map((feature, index: number) => {
              return (
                <Card
                  className="max-w-[300px] hover:shadow-xl transition duration-300 ease-in-out text-left"
                  key={index}
                >
                  <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="link"
                      className="font-bold text-deep-blue hover:scale-105 transition duration-300 ease-in-out"
                    >
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="p-5  min-h-screen flex flex-col justify-center items-center">
          <div className="space-y-5 max-w-[300px]">
            <h1 className="font-bold text-3xl">Get Started with Manivas</h1>
            <ul className=" list-decimal ml-5 divide-y-2 space-y-3 ">
              <li className="font-bold text-xl">
                <h2>Sign up in Minutes</h2>
              </li>
            </ul>
          </div>
        </section>
      </article>
    </main>
  );
};
