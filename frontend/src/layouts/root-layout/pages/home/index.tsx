import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CgChevronRight } from "react-icons/cg";
import { useNavigate } from "react-router";
import { FEATURES, PARTNERS, TESTIMONIALS } from "@/utils/data";
import { HowItWorks } from "../how-it-works";
import { NewsLetterForm } from "@/components/forms/NewsLetterForm";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function Home() {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen">
      <section
        id="intro"
        className="bg-grey-200 w-full flex items-center justify-center min-h-screen"
      >
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 -z-50"
          )}
        />
        <div className="space-y-5 max-w-[900px] text-center flex flex-col items-center">
          <Button className="rounded-full " variant="outline">
            Manivas 1.0 Public <CgChevronRight />
          </Button>
          <h1 className="font-bold sm:text-7xl text-3xl leading-snug">
            Making {" "}
            <span className="text-[#253439]">Financial Management Simpler </span>
            as You Grow
          </h1>
          <p className="font-semibold text-slate-500 max-w-[400px]">
            From investments to savings, we provide the tools and advice you need to achieve your financial goals.
          </p>
          <ul className="flex items-center gap-5">
            <li><Button className="px-10 rounded-full" onClick={() => navigate("/sign-up")}>
              Try now for free
            </Button></li>
            <li><Button className="px-10 rounded-full" variant="outline" onClick={() => navigate("/sign-up")}>
              See all features
            </Button></li>
          </ul>
        </div>
      </section>
      <section className="flex flex-col items-center w-full justify-center">
        <h1 className="sm:text-4xl text-2xl font-bold">Our Trusted Partners</h1>
        <ul className="flex flex-wrap gap-10 items-center justify-center">
          {PARTNERS.map((partner, index: number) => (
            <li key={index}>
              <img src={partner.image_url} alt={partner.name} width="200px" />
            </li>
          ))}
        </ul>
      </section>
      <section
        id="features"
        className="min-h-screen text-center flex flex-col items-center justify-center space-y-5 mx-auto"
      >
        <h1 className="text-4xl font-bold max-w-2xl">
          Comprehensive Features for Personal Finance Management
        </h1>
        <div className="flex flex-wrap gap-5 justify-center">
          {FEATURES.map((feature, index: number) => {
            return (
              <Card
                className="max-w-[400px] hover:shadow-xl bg-gray-100 transition duration-300 ease-in-out text-left"
                key={index}
              >
                <CardHeader>
                  <CardTitle className="space-y-2.5">
                    <div className="bg-[#253439] text-white w-fit p-2.5 rounded-md">
                      {feature.icon}
                    </div>
                    <h1>{feature.title}</h1>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-500">{feature.description}</p>
                </CardContent>
                <CardFooter className="-ml-4">
                  <Button
                    variant="link"
                    className="font-bold text-[#253439] hover:scale-105 flex items-center gap-2 hover:gap-3 transition duration-300 ease-in-out"
                  >
                    <span>Learn More</span> <ArrowRight className="size-4" />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>
      <section
        id="quantifiable"
        className="p-10 min-h-screen flex justify-center flex-wrap items-center mx-auto w-full bg-[#253439]"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/3920/3920913.png"
          alt="Finance Calculation"
        />
        <div className="max-w-[800px] space-y-5">
          <div className="max-w-[800px] space-y-2.5">
            <h1 className="sm:text-7xl text-5xl font-bold w-full text-white">
              Quantify your Finances with Manivas
            </h1>
            <p className="text-slate-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit suscipit tempora reiciendis. Quam, ad excepturi
              ducimus accusantium similique animi tempore commodi, sed labore
              hic quas quae, delectus sit architecto provident.
            </p>
          </div>
          <ul className="space-y-2.5 ml-5 border-l-emerald-700 before:">
            <li>
              <div>
                <h2 className="text-white font-bold">
                  Where your money goes ?
                </h2>
                <p className="text-slate-200">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  distinctio incidunt porro quas, ipsam vel ducimus nisi
                  sapiente expedita et ratione quidem enim, omnis neque vitae
                  officia aut nulla saepe?
                </p>
              </div>
            </li>
            <li>
              <div>
                <h2 className="text-white font-bold">Works on any device</h2>
                <p className="text-slate-200">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  distinctio incidunt porro quas, ipsam vel ducimus nisi
                  sapiente expedita et ratione quidem enim, omnis neque vitae
                  officia aut nulla saepe?
                </p>
              </div>
            </li>
          </ul>
          <Button className="bg-white text-black">
            <a href="#">Learn More</a>
          </Button>
        </div>
      </section>
      <HowItWorks />
      <section
        id="testimonials"
        className="py-20 w-full flex flex-col justify-center items-center space-y-10"
      >
        <div className="text-center">
          <h1 className="font-bold sm:text-4xl text-2xl pt-40">
            What Our Customers Say
          </h1>
          <p className="text-slate-500 text-md">
            Hear from people about how Manivas has helped them take control of
            their finances.
          </p>
        </div>
        <div>
          <Carousel
            className="w-full max-w-md"
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
          >
            <CarouselContent>
              {TESTIMONIALS.map((testimonial, index: number) => (
                <CarouselItem key={index} className="max-w-[500px]">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-start gap-2.5">
                        <Avatar>
                          <AvatarImage
                            src={testimonial.image_url}
                            alt={`${testimonial.customer_name}'s Image`}
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>
                          <h1>{testimonial.customer_name}</h1>
                          <p className="text-slate-500 font-normal text-sm">
                            {testimonial.job_title}
                          </p>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-500">"{testimonial.testimony}"</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      <section
        id="testimonials"
        className="py-20 w-full flex gap-10 justify-center items-center"
      >
        <img src="/images/corporate-finance-software_cover-upd-01.svg" width="500px" />
        <div className="flex flex-col justify-between h-full">
          <div className="max-w-2xl flex flex-col h-full">
            <h1 className="font-bold sm:text-6xl text-3xl pt-40">
              Join 20+ Million People Who Trust Us With Their Financials
            </h1>
            <p className="text-slate-500 text-md">
              Simply your banking with our user-friendly platform, providing you with the tool and resources to manage your accounts efficiently.
            </p>
          </div>
          <Button className="w-fit px-20 rounded-full text-white">Join Now</Button>
        </div>
      </section>
      <section className="flex flex-col items-center w-full bg-blue-900 py-20 text-white space-y-2.5">
        <h1 className="sm:text-5xl text-2xl font-bold">It's easy to get started</h1>
        <p className="text-slate-200">Get the app to explore the world of premium finance, get fast and safe transaction to help you find your dream life.</p>
        <ul>
          <li><button type="button" className="h-fit w-fit"><img src="/images/GetItOnGooglePlay_Badge_Web_color_English.png" alt="Download Manivas from Google Play" loading="lazy" width="200px" /></button></li>
        </ul>
        <div className="hidden">
          <NewsLetterForm />
        </div>
      </section>
    </main>
  );
};
