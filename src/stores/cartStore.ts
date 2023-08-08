import { atom, computed } from "nanostores";
import type { CartItemType } from "../types/cart";
import type { ProductType } from "../types/product";
import {addToast} from "./toastStore";

export const cartStore = atom<CartItemType[]>([]);
export const isOpenCart = atom<boolean>(false)

export const totalAmountInCart = computed(cartStore, () => {
  return cartStore.get().reduce((total, cart) => total + (Number(cart.product.price) * Number(cart.quantity)),0).toFixed(2)
})

export const addToCartAction = (product: ProductType) => {
  const carts = [...cartStore.get()]

  const index = carts.findIndex(item => item.product.id === product.id)
  if (index === -1) {
    // Add
    carts.push({
      product,
      quantity: 1,
    })
  } else {
    // Update
    carts[index] = {
      ...carts[index],
      quantity: carts[index].quantity + 1
    }
  }

  cartStore.set(carts)
  addToast({
    message: `Add ${product.title} to cart successfully!`,
    type: 'success'
  })
};
