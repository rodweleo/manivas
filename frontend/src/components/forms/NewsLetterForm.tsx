import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { ThreeDots } from "react-loader-spinner";
import TextField from "../ui/TextField";
import { IconButton } from "../ui/icon_button";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const NewsLetterForm = () => {
  const { handleSubmit, register } = useForm();
  const [isSubmitting, setSubmitting] = useState(false);

  const sendMessage = async (data: FieldValues) => {
    setSubmitting(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/sendMessage",
        data
      );
      setSubmitting(false);
      alert(response.data.response);
    } catch (error: any) {
      setSubmitting(false);
      console.log(error.response.data);
    }
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            Get the latest news from{" "}
            <span className="text-green-700">Manivas</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Input placeholder="abc@example.com" type="email" />
        </CardContent>
        <CardFooter>
          <Button className="bg-deep-blue">Subscribe</Button>
        </CardFooter>
      </Card>
    </>
  );
};
