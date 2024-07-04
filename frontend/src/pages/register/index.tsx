import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { auth } from "@/firebase/firebase.config";
import { useToast } from "@/components/ui/use-toast";
import axios, { AxiosError } from "axios";

const RegisterUserSchema = z.object({
  firstName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }).email(),
  phoneNumber: z.string().regex(/^\+\d{1,15}$/),
  password: z.string().min(8, {
    message: "Password is too short"
  })
});

export default function Register() {
  document.title =
    "Welcome to Manivas | Your Gateway to a Digital Financial World";
  const navigate = useNavigate();
  const { toast } = useToast()
  const RegisterForm = useForm<z.infer<typeof RegisterUserSchema>>({
    resolver: zodResolver(RegisterUserSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: ""
    },
  });

  const onSubmit = async (values: z.infer<typeof RegisterUserSchema>) => {
   try{
    await createUserWithEmailAndPassword(auth, values.email, values.password)
    await updateProfile(auth.currentUser!, {
      displayName: values.firstName + " " + values.lastName, 
       
    })

    //send a verification email to the user
    await sendEmailVerification(auth.currentUser!);
    toast({
      title: "Account Creation", 
      description: `Good news ${values.firstName}, your account has been created successfully. However, for secure and reliable services, we've sent a verification email to your inbox. Kindly check your inbox to continue enjoying our services.`
    })
    
      
   }catch(error: AxiosError | unknown | any ){
    if(axios.isAxiosError(error)){
      const errorCode = error.code;

      if(errorCode!.includes("email-already-in-use")){
        toast({
          variant: "destructive", 
          title: "Error", 
          description: "Email address is already in use."
        })
      }
    }
   }
  }
  
  return (
    <main className="min-h-screen flex items-center justify-center p-3">
      <Form {...RegisterForm}>
        <form onSubmit={RegisterForm.handleSubmit(onSubmit)}>
          <Card className="max-w-[800px]">
            <CardHeader>
              <CardTitle>Create Account</CardTitle>
              <CardDescription>
                Enter your details to create an account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={RegisterForm.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="John" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={RegisterForm.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={RegisterForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="abc@example.com" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={RegisterForm.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="2547********" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={RegisterForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="********" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-5">
              <Button className="disabled:cursor-not-allowed">
                Create Account
              </Button>

              <div>
                <p>Already have an account ? <Button variant="link" className="font-bold" type="button" onClick={() => navigate("/sign-in")}>Sign In</Button></p>
              </div>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </main>
  );
}
