<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import type {ActionData, PageData } from './$types';
    import {toast} from "svelte-sonner";
    import SignInForm from "$lib/components/SignInForm/SignInForm.svelte";
    import {Toaster} from "$lib/components/ui/sonner";
    import {goto} from "$app/navigation";
    export let data : PageData;
    export let form: ActionData;

    $: {
        if(form?.success) {
            toast.success("Sign in successful");
            setTimeout(() => goto("/dashboard"),1000);
        } else if(form?.error) {
            toast.error("Sign in failed");
        }
    }
</script>

<Card.Root class="w-96">
    <Card.Header>
        <Card.Title>
            <h1 class="text-4xl">
                Sign In
            </h1>
        </Card.Title>
        <Card.Description>Sign into your Shophere account.</Card.Description>
    </Card.Header>
    <Card.Content>
        <SignInForm data={data.signInForm} />
    </Card.Content>
    <Card.Footer>
        <footer class="flex flex-col gap-4 w-full items-center">
            <p>Don&apos;t have an account? <a href="/sign-up" class="underline hover:text-primary"> Sign up </a></p>
        </footer>
    </Card.Footer>
</Card.Root>

<Toaster theme="light"/>
