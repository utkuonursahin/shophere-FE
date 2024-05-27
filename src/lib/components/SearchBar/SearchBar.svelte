<script lang="ts">
    import {Search} from "lucide-svelte";
    import {Input} from "$lib/components/ui/input";
    export let value: string = "";
</script>

<div class="relative w-96 ml-auto">
    <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
    <Input
            type="search"
            placeholder="Search..."
            class="w-full rounded-lg bg-background pl-8"
            on:change={(e) => value = e.target?.value}
    />
</div>