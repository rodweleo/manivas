import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const ContactFormSchema = z.object({
    firstName: z.string().min(1, {
      message: "Username is required.",
    }),
    lastName: z.string().min(2, {
      message: "Password is required.",
    }),
    email: z.string().max(35, {
        message: "Maximum length for email reached."
    }).email(),
    phoneNumber: z.string().regex(/^\+\d{1,15}$/),
    message: z.string().max(250, {
        message: "Maximum length for message reached."
    })
  });
  
export const ContactUs = () => {
    const [characters, setCharacters] = useState("")
    const { toast } = useToast()
    const ContactForm = useForm<z.infer<typeof ContactFormSchema>>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            message: ""
        },
      });

      const onSubmit = (values: z.infer<typeof ContactFormSchema>) => {
        console.log(values)
        toast({
            variant: "default",
            description: `Hello ${values.firstName + " " + values.lastName}, your message has been received. We'll get back to you as soon as possible.`
        })
      }
    
    return <section className="min-h-screen">
        <Form {...ContactForm}>
          <Card className="max-w-[450px]">
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>
                Fill in details below
              </CardDescription>
            </CardHeader>
            <form onSubmit={ContactForm.handleSubmit(onSubmit)} className="space-y-8">
              <CardContent className="space-y-4">
                <FormField
                  control={ContactForm.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Firt Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="John"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={ContactForm.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Doe"
                          {...field}
                          type="text"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={ContactForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="abc@example.com"
                          {...field}
                          type="email"
                        />
                      </FormControl>
                      
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={ContactForm.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="##########"
                          {...field}
                          type="tel"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={ContactForm.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                      <Textarea placeholder="Type your message here." {...field} maxLength={250} onKeyUp={(e) => setCharacters(e.currentTarget.value)}/>
                      </FormControl>
                      <FormDescription>{characters.length}/250</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
               
                
              </CardContent>
              <CardFooter>
                <Button type="submit" className="mt-5" disabled>
                  Send Message
                </Button>
              </CardFooter>
            </form>
          </Card>
        </Form>
    </section>
}