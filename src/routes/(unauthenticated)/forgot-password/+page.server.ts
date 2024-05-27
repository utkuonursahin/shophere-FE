import type {Actions, PageServerLoad} from './$types';
import { superValidate } from "sveltekit-superforms";

import { zod } from "sveltekit-superforms/adapters";
import {forgotFormSchema} from "$lib/components/ForgotPasswordForm/ForgotPasswordFormSchema";
import {fail} from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
    return {
        forgotPasswordForm: await superValidate(zod(forgotFormSchema)),
    };
};

export const actions: Actions = {
    default: async (event) => {
        const form = await superValidate(event, zod(forgotFormSchema));
        if (!form.valid) {
            return fail(400, {
                form,
            });
        }
        return {
            form,
        };
    },
};