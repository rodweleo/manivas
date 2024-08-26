import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { provider } from "@/auth/google/google-auth-provider";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";

const formSchema = z.object({
  username: z.string().min(1, {
    message: "Username is required.",
  }),
  password: z.string().min(2, {
    message: "Password is required.",
  }),
});

export default function Login() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const auth = getAuth();
  const LoginForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    signInWithEmailAndPassword(auth, values.username, values.password)
      .then((userCredential) => {
        setIsSubmitting(false);
        if (userCredential.user !== null) {
          window.open("/dashboard", "_blank")
        }
      })
      .catch((error) => {
        setIsSubmitting(false);
        const errorMessage = error.message;
        if (errorMessage.includes("invalid-credential")) {
          toast.error("Authentication error: Incorrect username or password", {
            theme: "complete"
          })
        }
      });
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);

      toast.success("Authenticated successfully!")
      setTimeout(() => {
        toast.success("Redirecting...")
      }, 1000)

      window.location.href = "/account/dashboard";

    } catch (e) {
      console.error(e);
      toast.error("Something went wrong")
    }

  };

  const resetPassword = () => {
    navigate("/reset-password", {
      preventScrollReset: true,
    });
  };
  return (
    <section className="min-h-screen flex flex-col items-center justify-center place-items-center w-full space-y-4">
      <article className="space-y-5 p-5">
        <h1 className="font-bold text-3xl">
          Hello&#128075;, Welcome back to{" "}
          <span className="font-bold text-blue-500 animate-pulse">
            Manivas
          </span>
        </h1>

        <Form {...LoginForm}>
          <Card>
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>
                Enter your email and password to access your Manivas Account
              </CardDescription>
            </CardHeader>
            <form
              onSubmit={LoginForm.handleSubmit(onSubmit)}
              className="space-y-8"
            >
              <CardContent className="space-y-4">
                <FormField
                  control={LoginForm.control}
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
                  control={LoginForm.control}
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
                      <FormDescription className="flex w-full justify-end">
                        <Button
                          className="p-0 m-0"
                          type="button"
                          variant="link"
                          onClick={resetPassword}
                        >
                          Forgot Password ?
                        </Button>
                      </FormDescription>
                    </FormItem>
                  )}
                />
                <Button type="submit" className="mt-5">
                  {isSubmitting ? (
                    <ClipLoader size={20} color="white" />
                  ) : (
                    "Sign In"
                  )}
                </Button>
                <div className="mt-5 space-y-5">
                  <center className="flex items-center gap-2.5">
                    <hr className="w-full" />
                    <strong className="text-slate-400 text-sm text-center">
                      or
                    </strong>
                    <hr className="w-full" />
                  </center>

                  <div>
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full flex items-center gap-1"
                      onClick={signInWithGoogle}
                    >
                      <img
                        src="/icons/icons8-google-48.png"
                        height={15}
                        width={15}
                        loading="lazy"
                        alt="Google"
                      />
                      <span>Sign in with Google</span>
                    </Button>
                  </div>
                </div>
                <p className="font-bold text-slate-500 text-sm text-center">
                  Don't have an account?{" "}
                  <Button
                    type="button"
                    variant="link"
                    className="p-0 font-bold"
                    onClick={() => navigate("/sign-up")}
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
}
