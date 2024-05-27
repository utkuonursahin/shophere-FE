import type {Actions, PageServerLoad} from './$types';
import { superValidate } from "sveltekit-superforms";

import { zod } from "sveltekit-superforms/adapters";
import {signUpFormSchema} from "$lib/components/SignUpForm/SignUpFormSchema";

import {fail, redirect} from "@sveltejs/kit";
import axios from "axios";

export const load: PageServerLoad = async () => {
    return {
        signUpForm: await superValidate(zod(signUpFormSchema))
    };
};

export const actions: Actions = {
    default: async (event) => {
        const form = await superValidate(event, zod(signUpFormSchema));
        if (!form.valid) return fail(400, {form});
        const formData = {
            ...form.data,
            birthDate: new Date(form.data.birthDate)
        }
        try{
            const {data : srvResponse} = await axios.post('http://localhost:8080/api/auth/signup',formData, {withCredentials: true})
            if(srvResponse.data) redirect(308,'/sign-in')
            else return fail(400, {form, srvResponse});
        }catch (exception){
            return fail(400, {form, error:true});
        }
    },
};