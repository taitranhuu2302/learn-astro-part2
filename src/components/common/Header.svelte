<script>
  import {cartStore} from './../../stores/cartStore.ts';
  import CartDropdown from "./CartDropdown.svelte";
  import {isOpenCart} from "../../stores/cartStore";
  import {setContext} from 'svelte';
  import {clickOutside} from '../../directives/svelte/click-outside'

  setContext('clickOutside', clickOutside)

  const handleOpenCart = () => {
    $isOpenCart = !$isOpenCart
  }
</script>

<header class="py-4 shadow-sm bg-white fixed w-full top-0 left-0 z-[100]">
  <div class="container mx-auto flex items-center justify-between">
    <a href="/">
      <img src={"/assets/images/logo.svg"} class="w-32" alt="">
    </a>

    <div class="w-full max-w-xl relative flex">
                <span
                  class="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-400">
                    <i class="far fa-search"></i>
                </span>
      <input type="text" name="search" id="search"
             alt=""
             class="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
             placeholder="Search...">
      <button
        class="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition hidden md:flex items-center">
        Search
      </button>
    </div>

    <div class="flex items-center space-x-4">
      <div class="relative cursor-pointer select-none"
           use:clickOutside={() => $isOpenCart = false}
           on:click={handleOpenCart}
           on:keydown={() => {}}
      >
        <div class="text-center text-gray-700 hover:text-primary transition">
          <div class="text-2xl">
            <i class="far fa-shopping-cart"></i>
          </div>
          <div class="text-xs leading-3">Cart</div>
          {#if $cartStore.length !== 0}
            <div
              class="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              {$cartStore.length}
            </div>
          {/if}
        </div>
        <CartDropdown open={true}/>
      </div>
    </div>
  </div>
</header>
