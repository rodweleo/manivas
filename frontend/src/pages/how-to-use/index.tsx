import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export const HowToUse = () => {
  const steps = [
    {
      title: "Create Free Account",
      description:
        "Joining the Manivas community is your first step toward financial empowerment. Signing up is quick and easy – just provide some basic information, and you're ready to go.",
      iconName: "fa-solid fa-user-plus",
    },
    {
      title: "Verify Your Identity (KYC)",
      description:
        "Your security is our priority. Complete our Know Your Customer (KYC) verification process to ensure your account remains safe and compliant with regulations.",
      iconName: "fa-solid fa-user-check",
    },
    {
      title: "Link Your Local Bank Account",
      description:
        "Dive into our user-friendly platform to explore a variety of digital currencies. From Bitcoin to Ethereum and beyond, Manivas provides access to a diverse portfolio of cryptocurrencies.",
      iconName: "fa-solid fa-building-columns",
    },
    {
      title: "Explore a World of Digital Assets",
      description:
        "Connect your local bank account to Manivas for effortless transfers of your local currency to digital assets. We support a wide range of local currencies and payment methods.",
      iconName: "fa-regular fa-compass",
    },
  ];

  return (
    <section id="get-started" className="p-3 w-full space-y-4 min-h-screen">
      <h1 className=" text-3xl font-bold">Get Started With Manivas</h1>
      <div className="grid grid-cols-2 gap-4 max-sm:flex max-sm:flex-wrap">
        {steps.map((step, index) => (
          <Card
            className="max-w-[400px] hover:shadow-xl ease-in-out transition duration-300"
            key={index}
          >
            <CardHeader>
              <CardTitle>{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed text-md text-slate-600">
                {step.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
