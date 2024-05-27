<script lang="ts">
    import {Button} from "$lib/components/ui/button";
    import {toast} from "svelte-sonner";
    import {Toaster} from "$lib/components/ui/sonner";
    import axios from "axios";
    import {Plug, Unplug} from "lucide-svelte";
    import { fly } from 'svelte/transition';
    import * as Tooltip from "$lib/components/ui/tooltip";
    import {goto} from "$app/navigation";
    let isConnected = false;
    function sendDbConnectionReq(){
        return axios.post("http://localhost:8080/test/db-connection");
    }

    function sendDbDisconnectionReq(){
        return axios.post("http://localhost:8080/test/db-disconnection");
    }

    async function onButtonClick(){
        /*let toastMsg: string;
        const requestTime = new Date();
        const toastOptions = {description : "at " + requestTime.toLocaleDateString("tr-TR") + " " + requestTime.toLocaleTimeString("tr-TR")};
        try{
            if(isConnected){
                const {data : {data : response}} : any = await sendDbDisconnectionReq();
                isConnected = !response;
                toastMsg = response ? "Disconnected from database" : "Disconnection from database failed";
                response ? toast.success(toastMsg, toastOptions) : toast.error(toastMsg, toastOptions);
            } else {
                const {data : {data : response}} : any = await sendDbConnectionReq();
                isConnected = response;
                toastMsg = response ? "Connected to database" : "Connection to database failed";
                response ? toast.success(toastMsg,toastOptions) : toast.error(toastMsg, toastOptions);
            }
        } catch (e:any) {
            toast.error("Error occurred: " + e.message, toastOptions);
        }*/
        goto("/sign-in")
    }
</script>
<Tooltip.Root>
    <Tooltip.Trigger asChild let:builder>
        <Button builders={[builder]} on:click={onButtonClick} class="flex flex-col w-64">
            {#if isConnected}
                <p in:fly={{ y: -50, duration: 100, delay: 150}} out:fly={{y: 50, duration: 150, opacity: 0}} class="flex gap-2 items-center">
                    <Unplug/> Disconnect from database
                </p>
            {:else}
                <p in:fly={{ y: -50, duration: 100, delay: 150}} out:fly={{y: 50, duration: 150, opacity: 0}} class="flex gap-2 items-center">
                    <Plug/> Connect to database
                </p>
            {/if}
        </Button>
    </Tooltip.Trigger>
    <Tooltip.Content side="bottom">
        {isConnected ? "Database connection will be halted." : "Backend server will connect to the database."}
    </Tooltip.Content>
</Tooltip.Root>

<Toaster theme="light"/>
