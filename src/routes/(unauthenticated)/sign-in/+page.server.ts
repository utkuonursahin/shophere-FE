import type {Actions, PageServerLoad} from './$types';
import { superValidate } from "sveltekit-superforms";

import { zod } from "sveltekit-superforms/adapters";
import {signInFormSchema} from "$lib/components/SignInForm/SignInFormSchema";

import {fail} from "@sveltejs/kit";
import axios from "axios";

export const load: PageServerLoad = async () => {
    return {
        signInForm: await superValidate(zod(signInFormSchema))
    };
};

export const actions: Actions = {
    default: async (event) => {
        const form = await superValidate(event,zod(signInFormSchema));
        if (!form.valid) return fail(400, {form});
        try{
            const {headers,data} = await axios.post('http://localhost:8080/api/auth/login',form.data, {withCredentials: true})
            const cookie = headers['set-cookie']?.toString().split(';');
            if(cookie && data.statusCode === 200){
                const [cookieName,cookieValue] = cookie[0].split('=');
                const cookiePath = cookie[1].split('=')[1];
                event.cookies.set(cookieName,cookieValue,{path: cookiePath, httpOnly: true});
                return {success:true, form};
            }
        }catch(exception){
            return  fail(400, {error:true, form})
        }
    },
};