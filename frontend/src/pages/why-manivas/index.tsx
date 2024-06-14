import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export const WhyManivas = () => {
  const reasons = [
    {
      title: "Trust and Security",
      description:
        "Manivas prioritizes the security of your assets and your personal information. We adhere to industry-best security practices to ensure your peace of mind.",
      iconName: "fa-solid fa-shield-halved",
    },
    {
      title: "User-Friendly",
      description:
        "Our platform is designed with your convenience in mind. You don't need to be a tech expert to start your digital currency journey with Manivas.",
      iconName: "fa-solid fa-user-group",
    },
    {
      title: "Regulatory Compliance",
      description:
        "We follow all relevant regulations to ensure a safe and compliant environment for our users.",
      iconName: "fa-solid fa-scale-balanced",
    },
    {
      title: "Global Reach",
      description:
        "Manivas serves users from around the world, enabling local currency to digital currency conversions for a diverse range of customers.",
      iconName: "fa-solid fa-globe",
    },
  ];
  return (
    <section
      id="why-manivas"
      className="bg-white w-full flex flex-col items-center p-5 space-y-4 text-center min-h-screen"
    >
      <h1 className="text-3xl font-bold">Why Choose Manivas?</h1>
      <p className=" max-w-[800px] text-center text-md leading-loose text-slate-600">
        Manivas is your trusted partner for seamlessly converting your local
        currency into digital assets, opening up a world of possibilities for
        you. Whether you're a seasoned crypto enthusiast or just curious about
        the world of digital currencies, our platform is designed to make the
        process easy, secure, and accessible to everyone.
      </p>
      <div className="w-full">
        <div className="gap-10 grid grid-cols-2 max-sm:flex max-sm:flex-wrap w-fit rounded-md justify-around">
          {reasons.map((reason, index: number) => (
            <Card
              key={index}
              className="max-w-[400px] hover:shadow-xl ease-in-out transition duration-300"
            >
              <CardHeader>
                <CardTitle className="text-left">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-loose text-md text-left">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
