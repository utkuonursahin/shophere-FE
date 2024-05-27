<script lang="ts">
    import {Button} from "$lib/components/ui/button";
    import axios from "axios";
    export let cart: any[] = [];
    export let showCart: boolean = false;
    function closeCart(){
        showCart = false;
    }
    async function onRemoveBtnClick(e:any){
        const id = e.target.dataset.id;
        const {data: removeReq} = await axios.delete(`http://localhost:8080/api/cart/${id}`, {withCredentials: true})
        cart = removeReq.data.products;
    }

</script>
<div class="absolute top-full right-0 w-1/3 m-3 h-64 bg-primary-foreground outline outline-primary bg-opacity-95 z-10 rounded-lg " class:showCart={showCart}>
    <div class="flex flex-col w-full p-4 overflow-y-scroll h-full">
        {#if cart.length === 0}
            <p>Your cart is empty</p>
        {:else}
            {#each cart as product}
                <div class="w-full flex justify-between items-center p-2 border-b border-secondary-foreground/25">
                    <p>{product.name}</p>
                    <p>{product.price} ₺</p>
                    <Button variant="outline" class="text-xs" data-id={product.id} on:click={onRemoveBtnClick}>Remove</Button>
                </div>
            {/each}
        {/if}
    </div>
</div>