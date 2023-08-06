import type {ProductType} from "./product";

export type CartItemType = {
  product: ProductType,
  quantity: number;
}