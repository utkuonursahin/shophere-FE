<script lang="ts">
    import * as Form from "$lib/components/ui/form";
    import { Input } from "$lib/components/ui/input";

    import {
        type SuperValidated,
        type Infer,
        superForm,
    } from "sveltekit-superforms";
    import { zodClient } from "sveltekit-superforms/adapters";
    import {forgotFormSchema, type ForgotPasswordFormSchema} from "$lib/components/ForgotPasswordForm/ForgotPasswordFormSchema";
    import {KeyRound, Mail, User} from "lucide-svelte";

    export let data: SuperValidated<Infer<ForgotPasswordFormSchema>>;

    const form = superForm(data, {
        validators: zodClient(forgotFormSchema),
    });

    const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance>
    <Form.Field {form} name="email" class=" grid grid-cols-[3fr,1fr] grid-rows-[min-content,1fr,min-content,min-content] gap-x-2">
        <Form.Control let:attrs>
            <Form.Label class="row-start-1 flex gap-1 items-center text-primary"><Mail size={16}/> Email</Form.Label>
            <Input class="row-start-2"  {...attrs} bind:value={$formData.email} placeholder="trolley@mail.com"/>
        </Form.Control>
        <Form.Button class="row-start-2 transition-all duration-100">Submit</Form.Button>
        <Form.Description class="row-start-3">Enter your email.</Form.Description>
        <Form.FieldErrors class="row-start-4"/>
    </Form.Field>
</form>