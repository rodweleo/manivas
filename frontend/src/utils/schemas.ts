import { z } from "zod";

const SubscribeFormSchema = z.object({
    email: z.string().email({
        message: "Enter a valid email address"
    }),
  });

export {
    SubscribeFormSchema
}