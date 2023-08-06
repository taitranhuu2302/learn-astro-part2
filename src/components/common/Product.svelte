<script lang="ts">
	import { addToCartAction } from './../../stores/cartStore';
  import type {ProductType} from "../../types/product";

  export let product: ProductType;

  const handleAddCart = (product: ProductType) => {
    addToCartAction(product)
  }
</script>

<div class="bg-white shadow-lg border p-2 rounded overflow-hidden group flex flex-col">
    <div class="relative">
        <img src={product.image} alt="product 1" class="w-full rounded h-[170px] object-contain">
        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center rounded
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
            <a href="/"
               class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
               title="view product">
                <i class="far fa-search"></i>
            </a>
            <a href="/"
               class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
               title="add to wishlist">
                <i class="fas fa-heart"></i>
            </a>
        </div>
    </div>
    <div class="pt-4 pb-3 px-4 flex-grow">
        <a href="/">
            <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition line-clamp-2">{product.title}</h4>
        </a>
        <div class="flex items-baseline mb-1 space-x-2">
            <p class="text-xl text-primary font-semibold">${product.price}</p>
        </div>
        <div class="flex items-center">
            <div class="flex gap-1 text-sm text-yellow-400">
                <span><i class="fas fa-star"></i></span>
                <span><i class="fas fa-star"></i></span>
                <span><i class="fas fa-star"></i></span>
                <span><i class="fas fa-star"></i></span>
                <span><i class="fas fa-star"></i></span>
            </div>
            <div class="text-xs text-gray-500 ml-3">({product.rating.count})</div>
        </div>
    </div>
    <button on:click={() => handleAddCart(product)} class="block w-full rounded py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
        Add to cart
    </button>
</div>