import { z } from "zod";

export const signInFormSchema = z.object({
    email: z.string().email("Sorry, this doesn't seem like a valid email."),
    password: z.string()
});

export type SignInFormSchema = typeof signInFormSchema;