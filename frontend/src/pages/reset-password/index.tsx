import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { z } from "zod";
import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";

const ResetFormSchema = z.object({
    email: z.string().min(1, {
      message: "Email address is required.",
    }),
   
  });

export const ResetPassword = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const navigate = useNavigate()
    const ResetForm = useForm<z.infer<typeof ResetFormSchema>>({
        resolver: zodResolver(ResetFormSchema),
        defaultValues: {
          email: "",
        },
      });

      const onSubmit = (values: z.infer<typeof ResetFormSchema>) => {
        setIsSubmitting(true)
        console.log(values)
        setTimeout(() => {
          setIsSubmitting(false)
        }, 2000 )
      }
    return <main>
       
        <article className="flex flex-col items-center space-y-5">
        <Button variant="link" type="button" title="Back" onClick={() => navigate(-1)}><IoArrowBack /></Button>
        <p>If you've forgotten your password, don't worry – we're here to help you regain access to your account swiftly and securely. </p>
        <p><br/> Follow the instructions in the email to create a new password and regain access to your account. <br/>If you encounter any issues or need further assistance, our support team is ready to assist you. Thank you for choosing us!</p>
        <section>
        <Form {...ResetForm}>
          <Card className="max-w-[500px]">
            <CardHeader>
              <CardTitle>Reset Password</CardTitle>
              <CardDescription>
              Enter your registered email address, and we'll send you a link to reset your password.
              </CardDescription>
            </CardHeader>
            <form onSubmit={ResetForm.handleSubmit(onSubmit)} className="space-y-8">
              <CardContent className="space-y-4">
                <FormField
                  control={ResetForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
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
                
                <Button type="submit" className="mt-5">
                  {isSubmitting ? <ClipLoader size={20} color="white"/> : "Send instructions"}
                </Button>
                
                
              </CardContent>
            </form>
          </Card>
        </Form>
        </section>
        </article>
    </main>
}