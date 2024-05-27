<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import type { PageData } from './$types';
    import ForgotPasswordForm from "$lib/components/ForgotPasswordForm/ForgotPasswordForm.svelte";
    import {Button} from "$lib/components/ui/button";
    export let data : PageData;
</script>

<Card.Root class="w-96">
    <Card.Header>
        <Card.Title>
            <h1 class="text-4xl">
                Reset Password
            </h1>
        </Card.Title>
        <Card.Description>Claim your reset link.</Card.Description>
    </Card.Header>
    <Card.Content>
        <ForgotPasswordForm data={data.forgotPasswordForm} />
    </Card.Content>
    <Card.Footer>
        <footer class="flex justify-between items-center">
            <p class="text-accent-foreground text-sm" >* Password reset link will be send to the given email if it is exists in our system.</p>
            <Button href="/sign-in" variant="link" class="text-sm">Cancel</Button>
        </footer>
    </Card.Footer>
</Card.Root>