import { initialProducts } from "../data/data";
import ProductsInCart from "./ProductsInCart";

export default function ShoppingCart() {
  return (
    <>
      <h1>Shopping Cart</h1>
      <ProductsInCart products={initialProducts} />
    </>
  );
}
