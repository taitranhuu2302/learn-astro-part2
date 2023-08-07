<script lang="ts">
  import { isOpenCart, cartStore, totalAmountInCart } from "../../stores/cartStore";
</script>

<div class="shopping-cart" class:is-open={$isOpenCart}>
  <div class="shopping-cart-header">
    <i class="fa fa-shopping-cart cart-icon"></i>
    <div class="shopping-cart-total">
      <span class="lighter-text">Total:</span>
      <span class="main-color-text">${$totalAmountInCart}</span>
    </div>
  </div>
  <!--end shopping-cart-header -->

  <ul class="shopping-cart-items">
    {#each $cartStore as cart}
      <li class="flex gap-2.5">
        <img src={cart.product.image} alt="item1" class="min-w-[70px] max-w-[70px] max-h-[70px] h-[70px] object-contain"/>
        <div>
          <p class="item-name">{cart.product.title}</p>
          <p class="item-price">${cart.product.price}</p>
          <p class="item-quantity">Quantity: {cart.quantity.toString().padStart(2, "0")}</p>
        </div>
      </li>
    {:else}
      <li class="text-center">There is nothing in the cart yet</li>
    {/each}
  </ul>

  <a href="/" class="btn w-full block text-center">Checkout</a>
</div>

<style lang="scss">
  .shopping-cart {
    @apply border absolute rounded-[3px] p-5 top-full right-0 w-[320px] bg-white hidden;

    &.is-open {
      @apply block;
    }

    .shopping-cart-header {
      border-bottom: 1px solid #e8e8e8;
      padding-bottom: 15px;
      @apply flex items-center justify-between;
    }

    .shopping-cart-items {
      @apply flex gap-2.5 flex-col py-5;
      .item-name {
        @apply text-[16px] line-clamp-1;
      }

      .item-price {
        @apply text-primary;
      }

      .item-quantity {
        color: #abb0be;
      }
    }
  }
</style>
