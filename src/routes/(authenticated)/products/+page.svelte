<script lang="ts">
    import SearchBar from "$lib/components/SearchBar/SearchBar.svelte";
    import {Button} from "$lib/components/ui/button";
    import type { PageData } from './$types';
    import {ShoppingBag} from "lucide-svelte";
    import Cart from "$lib/components/Cart/Cart.svelte";
    import axios from "axios";
    export let data: PageData;
    let searchText: string = '';
    let cart:any[] = data.cart;
    let showCart: boolean = false;
    async function onSearchBtnClick(){
        const filter = {
            name: searchText,
            categories: [searchText.toUpperCase()]
        }
        const {data : filterReq} = await axios.post('http://localhost:8080/api/product/filter', filter, {withCredentials: true});
        data.products = filterReq.data
    }
    async function onBuyBtnClick(e:any){
        const id = e.target.closest('button').dataset.id;
        if(cart?.some((p:any) => p?.id === id)) return;
        const product = data.products.find((p:any) => p.id === id);
        const {data: cartReq} = await axios.post('http://localhost:8080/api/cart', product, {withCredentials: true});
        cart = [...cartReq.data.products];
    }
</script>

<header class="relative w-full bg-secondary border-b border-secondary-foreground/25 rounded-tr-lg flex justify-center items-center gap-2 px-4">
    <SearchBar bind:value={searchText}/>
    <Button on:click={onSearchBtnClick}>Search</Button>
    <button class="ml-auto relative cursor-pointer" on:click={() => showCart = !showCart}>
        <ShoppingBag size={24}/>
        {#if cart?.length > 0}
            <span class="absolute -top-2 -right-2 bg-primary text-secondary rounded-full w-5 h-5 flex items-center justify-center">{cart?.length}</span>
        {/if}
    </button>
    {#if showCart}
        <Cart bind:cart bind:showCart/>
    {/if}
</header>
<section class="m-4 row-start-2 row-span-full grid grid-cols-4 gap-4 p-4 overflow-y-scroll ring-1 ring-secondary-foreground/35 rounded">
    {#each data.products as product}
        <div class="flex flex-col items-center h-64 justify-center gap-4 p-4 ring-1 ring-primary rounded-md">
            <p>{product.name}</p>
            <span class="underline">#{product.category.toLowerCase()}</span>
            <Button on:click={onBuyBtnClick} data-id={product.id} class="flex gap-1 w-1/2">Buy for <span>{product.price} ₺</span></Button>
        </div>
    {/each}
</section>