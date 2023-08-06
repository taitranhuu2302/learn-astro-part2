<script lang="ts">
  import Product from "../common/Product.svelte";
  import type {ProductType} from "../../types/product";

  export let products: ProductType[];
</script>

<div class="container pb-16">
    <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">recommended for you</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        {#each products as product}
            <Product product={product}/>
        {/each}
    </div>
</div>