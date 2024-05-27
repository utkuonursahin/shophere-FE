import { z } from "zod";

export const signUpFormSchema = z.object({
    name: z.string(),
    surname: z.string(),
    birthDate: z.string().date(),
    email: z.string().email("Sorry, this doesn't seem like a valid email."),
    password: z.string(),
    passwordConfirm: z.string(),
});

export type SignUpFormSchema = typeof signUpFormSchema;