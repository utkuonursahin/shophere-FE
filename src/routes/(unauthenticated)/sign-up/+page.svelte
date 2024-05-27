<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import SignUpForm from "$lib/components/SignUpForm/SignUpForm.svelte";
    import type { PageData } from './$types';
    export let data : PageData;
</script>

<Card.Root class="w-96">
    <Card.Header>
        <Card.Title>
            <h1 class="text-4xl">
                Sign Up
            </h1>
        </Card.Title>
        <Card.Description>Create your Shophere account right now.</Card.Description>
    </Card.Header>
    <Card.Content>
        <SignUpForm data={data.signUpForm} />
    </Card.Content>
    <Card.Footer>
        <footer class="flex flex-col gap-4 w-full items-center">
            <p>Already have an account? <a href="/sign-in" class="underline hover:text-primary"> Sign in </a></p>
        </footer>
    </Card.Footer>
</Card.Root>