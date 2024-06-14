import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  username: z.string().min(1, {
    message: "Username is required.",
  }),
  password: z.string().min(2, {
    message: "Password is required.",
  }),
});

export const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Authentication",
      description: `Welcome back ${values.username}`,
    });
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center place-items-center w-full space-y-4">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="w-fit flex flex-col gap-4 items-center"
      ></motion.div>
      <article className="space-y-5 p-5">
        <h1 className="font-bold text-3xl">
          Hello&#128075;, Welcome back to{" "}
          <span className="font-bold text-green-700 animate-pulse">
            Manivas
          </span>
        </h1>
        <Form {...form}>
          <Card>
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>
                Enter your email and password to access your Manivas Account
              </CardDescription>
            </CardHeader>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="abc@example.com"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="********"
                          {...field}
                          type="password"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="mt-5">
                  Sign in
                </Button>
                <div className="mt-5 space-y-5">
                  <center>
                    <strong className="text-slate-500 text-sm text-center">
                      OR
                    </strong>
                  </center>
                  <div>
                    <Button type="button" variant="outline" className="w-full">
                      Sign in with Google
                    </Button>
                  </div>
                </div>
                <p className="font-bold text-slate-500 text-sm text-center">
                  Don't have an account?{" "}
                  <Button
                    type="button"
                    variant="link"
                    className="p-0 font-bold"
                    onClick={() => navigate("/register")}
                  >
                    {" "}
                    Sign Up
                  </Button>
                </p>
              </CardContent>
            </form>
          </Card>
        </Form>
      </article>
    </section>
  );
};
