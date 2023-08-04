/* eslint-disable react/prop-types */
import { useState } from "react";
import SubTotal from "./Subtotal";
import Product from "./Product";
import { initialProducts } from "../utils/data";

export default function ProductsList() {
  const [cartProducts, setCartProducts] = useState(
    initialProducts.filter((product) => product.quantityOnCart > 0)
  );

  console.log(cartProducts);

  function handleOnProductDelete(productId) {
    setCartProducts(cartProducts.filter((product) => product.id !== productId));
  }

  function handleOnChangeProductQuantity(changeType, productId) {
    const items = changeProductQuantity(changeType, productId);
    setCartProducts(items);
  }

  function changeProductQuantity(changeType, productId) {
    return cartProducts.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantityOnCart:
            changeType === "+"
              ? product.quantityOnCart + 1
              : Math.max(1, product.quantityOnCart - 1),
        };
      }
      return product;
    });
  }

  return (
    <div className="flex space-x-5">
      <div className="border-2 rounded-md p-5 space-y-5">
        {cartProducts.map((product) => (
          <Product
            key={product.id}
            product={product}
            onChangeProductQuantity={handleOnChangeProductQuantity}
            onProductDelete={handleOnProductDelete}
          />
        ))}
      </div>
      <div>
        <SubTotal products={cartProducts} />
      </div>
    </div>
  );
}
