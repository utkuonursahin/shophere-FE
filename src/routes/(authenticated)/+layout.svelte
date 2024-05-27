<script>import "../../app.pcss";
import Aside from "$lib/components/Aside/Aside.svelte";</script>

<div class="h-screen grid grid-cols-[3%,15%,1fr,3%] py-10 grid-rows-1 items-center">
    <Aside></Aside>
    <main class="col-start-3 h-full grid grid-rows-[10%,1fr] w-full border border-secondary-foreground/25 rounded-r-lg">
        <slot></slot>
    </main>
</div>