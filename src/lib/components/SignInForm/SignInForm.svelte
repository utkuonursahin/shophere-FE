<script lang="ts">
    import * as Form from "$lib/components/ui/form";
    import { Input } from "$lib/components/ui/input";

    import {
        type SuperValidated,
        type Infer,
        superForm,
    } from "sveltekit-superforms";
    import { zodClient } from "sveltekit-superforms/adapters";
    import {type SignInFormSchema, signInFormSchema} from "$lib/components/SignInForm/SignInFormSchema";
    import {KeyRound, Mail} from "lucide-svelte";

    export let data : SuperValidated<Infer<SignInFormSchema>>;
    let form = superForm(data, {
        validators: zodClient(signInFormSchema),
    });
    const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance class="flex flex-col gap-4">
    <Form.Field {form} name="email">
        <Form.Control let:attrs>
            <Form.Label class="flex gap-1 items-center text-primary"><Mail size={16}/> Email</Form.Label>
            <Input {...attrs} bind:value={$formData.email} placeholder="trolley@mail.com"/>
        </Form.Control>
        <Form.Description>Enter your email.</Form.Description>
        <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="password">
        <Form.Control let:attrs>
            <Form.Label class="flex gap-1 items-center text-primary"><KeyRound size={16}/> Password</Form.Label>
            <Input {...attrs} type="password" bind:value={$formData.password} placeholder="********" />
        </Form.Control>
        <Form.Description class="flex justify-between">
            Enter your password.
            <a href="/forgot-password" class="text-sm underline hover:text-primary">
                Forgot your password?
            </a>
        </Form.Description>
        <Form.FieldErrors />
    </Form.Field>
    <Form.Button class="w-full transition-all duration-100">Submit</Form.Button>
</form>