import { z } from "zod";

export const forgotFormSchema = z.object({
    email: z.string().email("Sorry, this doesn't seem like a valid email.")
});

export type ForgotPasswordFormSchema = typeof forgotFormSchema;