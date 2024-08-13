import { useState } from "react";
import { FieldValues } from "react-hook-form";
import axios, { AxiosError } from "axios";
import {
  Card,
  CardDescription,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";
import ClipLoader from "react-spinners/ClipLoader";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SubscribeFormSchema } from "@/utils/schemas";


export const NewsLetterForm = () => {
  const [isSending, setSubmitting] = useState(false);
  const { toast } = useToast();

  const SubscribeForm = useForm<z.infer<typeof SubscribeFormSchema>>({
    resolver: zodResolver(SubscribeFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const subscribe = async (data: FieldValues) => {
    setSubmitting(true);
    try {
      const response = await axios.post(
        "https://api-manivas.vercel.app/api/v1/sendMessage",
        data
      );
      toast({
        title: "Alert",
        description: response.data.message,
      });
    } catch (error: AxiosError | unknown | any) {
      toast({
        variant: "destructive",
        description: error.message.includes("Network Error") ? "Failed to subscribe" : "Something went wrong. Please try again later."
      })
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form {...SubscribeForm}>
        <Card className="max-w-[500px]">
          <CardHeader>
            <CardTitle>Subscribe to our Newsletter</CardTitle>
            <CardDescription>Get the latest news from Manivas</CardDescription>
          </CardHeader>
          <form
            onSubmit={SubscribeForm.handleSubmit(subscribe)}
            className="border-0 "
          >
            <CardContent className="w-full">
              <FormField
                control={SubscribeForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem > 
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
            </CardContent>
            <CardFooter>
              <Button className="disabled:cursor-not-allowed" disabled={isSending}>
                {isSending ? (
                  <ClipLoader color="white" size={20} />
                ) : (
                  "Subscribe"
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </Form>
  );
};
