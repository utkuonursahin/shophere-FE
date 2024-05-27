<script>
    import {Cog, Home, LogOut, Package2, ShoppingCart, Truck} from "lucide-svelte";
</script>

<aside class="w-full h-full  bg-secondary border-t border-b border-l border-secondary-foreground/25 col-start-2 col-end-3 row-span-full rounded-l-lg">
    <div class="h-[10%] border-b border-secondary-foreground/25 flex gap-2 items-center justify-center">

    </div>
    <ul class="flex flex-col py-10 px-8">
        <li class="h-12 py-2 text-secondary-foreground opacity-50 hover:opacity-100">
            <a href="/dashboard" class="flex gap-2 w-full"><Home/> Dashboard</a>
        </li>
        <li class="h-12 py-2 text-secondary-foreground opacity-50 hover:opacity-100">
            <a href="/products" class="flex gap-2 w-full"><Package2/> Products</a>
        </li>
        <li class="h-12 py-2 text-secondary-foreground opacity-50 hover:opacity-100">
            <a href="/orders" class="flex gap-2 w-full"><Truck/> Orders</a>
        </li>
        <li class="h-12 py-2 text-secondary-foreground opacity-50 hover:opacity-100">
            <a href="/settings" class="flex gap-2 w-full"><Cog/> Settings</a>
        </li>
        <li class="h-12 py-2 text-secondary-foreground opacity-50 hover:opacity-100">
            <a href="/sign-in" class="flex gap-2 w-full"><LogOut/> Logout</a>
        </li>
    </ul>
</aside>