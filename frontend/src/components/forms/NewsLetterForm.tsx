import { useState } from "react";
import { FieldValues } from "react-hook-form";
import axios, { AxiosError } from "axios";
import {
  Card,
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const SubscribeFormSchema = z.object({
  email: z.string().min(2).max(50).email(),
});
export const NewsLetterForm = () => {
  const [isSubmitting, setSubmitting] = useState(false);
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
      setSubmitting(false);
      toast({
        title: "Alert",
        description: response.data.message,
      });
    } catch (error: AxiosError | unknown | any) {
      setSubmitting(false);
      if (axios.isAxiosError(error)) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <Form {...SubscribeForm}>
        <Card>
          <CardHeader>
            <CardTitle>Get the latest news from Manivas</CardTitle>
          </CardHeader>
          <form
            onSubmit={SubscribeForm.handleSubmit(subscribe)}
            className="space-y-8"
          >
            <CardContent>
              <FormField
                control={SubscribeForm.control}
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
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button className="disabled:cursor-not-allowed" disabled>
                {isSubmitting ? (
                  <ClipLoader color="white" size={20} />
                ) : (
                  "Subscribe"
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </Form>
    </>
  );
};
