/* eslint-disable react/prop-types */
import { useState } from "react";
import SubTotalInCart from "./SubtotalInCart";
import ProductInCart from "./ProductInCart";

export default function ProductsInCart({ products }) {
  const [cartProducts, setCartProducts] = useState(
    products.filter((product) => product.quantityOnCart > 0)
  );

  console.log(cartProducts);

  function handleOnProductDelete(productId) {
    setCartProducts(cartProducts.filter((product) => product.id !== productId));
  }

  function handleOnChangeProductQuantity(newQuantityOnCart, productId) {
    console.log("Changed to=>", newQuantityOnCart);
    setCartProducts(
      cartProducts.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantityOnCart: newQuantityOnCart,
          };
        }
        return product;
      })
    );
  }

  return (
    <div className="flex space-x-5">
      <div className="border-2 rounded-md p-5 space-y-5">
        {cartProducts.map((product) => (
          <ProductInCart
            key={product.id}
            product={product}
            onChangeProductQuantity={handleOnChangeProductQuantity}
            onProductDelete={handleOnProductDelete}
          />
        ))}
      </div>
      <div>
        <SubTotalInCart products={cartProducts} />
      </div>
    </div>
  );
}
