import { initialProducts } from "../data/data";
import ProductsInCart from "./ProductsInCart";

export default function ShoppingCart() {
  return (
    <div className="p-10 bg-white rounded-xl shadow-md mt-10 mb-10">
      <h1 className="text-3xl font-bold text-gray-900 text-center p-2 mb-5">
        Shopping Cart
      </h1>
      <ProductsInCart products={initialProducts} />
    </div>
  );
}
