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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
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
        className="bg-grey-200 w-full flex items-center justify-center min-h-screen p-2.5"
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
          <h1 className="font-bold sm:text-7xl text-4xl leading-snug">
            Making {" "}
            <span className="text-[#253439]">Financial Management Simpler </span>
            as You Grow
          </h1>
          <p className="text-slate-500 max-w-xl text-xl sm:text-2xl">
            From financial tracking to savings & investments , we provide the tools and advice you need to achieve your financial goals.
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
      <section className="flex flex-col items-center w-full justify-center space-y-5">
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
        className="py-20 px-2.5 text-center flex flex-col items-center justify-center space-y-5 mx-auto"
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
                    <p>{feature.title}</p>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-500">
                  {feature.description}
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
        className="p-2.5 flex gap-10 justify-center flex-wrap items-center mx-auto w-full bg-[#253439]"
      >
        <img
          src="https://securityintelligence.com/wp-content/uploads/2023/03/Close-up-an-accountant-working-about-financial-with-calculator-at-his-office-to-calculate-expenses-Accounting-concept.jpeg"
          alt="Finance Calculation"
          className="h-full sm:w-[700px]  rounded-xl"
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
          <ul className="space-y-2.5 border-l-emerald-700 before:">
            <li>
              <div>
                <h2 className="text-white font-bold text-lg">
                  Where your money goes ?
                </h2>
                <p className="text-slate-200 ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  distinctio incidunt porro quas, ipsam vel ducimus nisi
                  sapiente expedita et ratione quidem enim, omnis neque vitae
                  officia aut nulla saepe?
                </p>
              </div>
            </li>
            <li>
              <div>
                <h2 className="text-white font-bold text-lg">Works on any device</h2>
                <p className="text-slate-200">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  distinctio incidunt porro quas, ipsam vel ducimus nisi
                  sapiente expedita et ratione quidem enim, omnis neque vitae
                  officia aut nulla saepe?
                </p>
              </div>
            </li>
          </ul>
          <Button className="bg-white text-black rounded-full px-10">
            <a href="#">Learn More</a>
          </Button>
        </div>
      </section>
      <HowItWorks />
      <section
        id="testimonials"
        className="w-full flex flex-col items-center space-y-10 py-10 px-2.5"
      >
        <div className="text-center">
          <h1 className="font-bold sm:text-4xl text-2xl">
            What Our Customers Say
          </h1>
          <p className="text-slate-500 sm:text-xl">
            Hear from people about how Manivas has helped them take control of
            their finances.
          </p>
        </div>
        <div className="p-10">
          <Carousel
            className="w-full max-w-xs sm:max-w-md"
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {TESTIMONIALS.map((testimonial, index: number) => (
                <CarouselItem key={index} className="max-w-[400px] sm:max-w-[500px]">
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

          </Carousel>
        </div>

      </section>
      <section
        id="join-us"
        className="w-full flex px-2.5 gap-10 justify-center items-center bg-[url('https://blog.dol.gov/sites/default/files/inline-images/You%20Have%20the%20Right%20to%20a%20Union.jpg')] bg-fixed bg-center bg-no-repeat bg-opacity-50 relative py-20"
      >
        <div className="absolute bg-[#253439] inset-0 bg-opacity-70"></div>
        <div className="flex flex-col justify-between items-center h-full z-20 space-y-5">
          <div className="max-w-3xl flex flex-col h-full text-center">
            <h1 className="font-bold sm:text-6xl text-3xl text-white">
              Join 20+ Million People Who Trust Us With Their Financials
            </h1>
            <p className="text-slate-200 text-lg">
              Simply your banking with our user-friendly platform, providing you with the tool and resources to manage your accounts efficiently.
            </p>
          </div>
          <Button className="w-fit px-20 rounded-full bg-white text-slate-900 hover:bg-slate-100 hover:text-black">Join Now</Button>
        </div>
      </section>
      <section className="px-2.5 flex flex-col items-center w-full bg-[#253439] py-20 text-white space-y-2.5 mt-10">
        <h1 className="sm:text-5xl text-2xl font-bold">It's easy to get started</h1>
        <p className="text-slate-200">Get the app to explore the world of premium finance, get fast and safe transaction to help you find your dream life.</p>
        <ul>
          <li><button type="button" className="h-fit w-fit"><img src="/images/GetItOnGooglePlay_Badge_Web_color_English.png" alt="Download Manivas from Google Play" loading="lazy" width="200px" /></button></li>
        </ul>
      </section>
    </main>
  );
}
