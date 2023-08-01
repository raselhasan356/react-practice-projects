import { useState } from "react";
import SubTotalInCart from "./SubtotalInCart";
import ProductInCart from "./ProductInCart";

export default function ProductsInCart({ products }) {
  const [cartProducts, setCartProducts] = useState(products);

  console.log(cartProducts);

  function handleOnProductDelete(productId) {
    setCartProducts(cartProducts.filter((product) => product.id !== productId));
  }

  function handleOnChangeProductQuantity(event, productId) {
    console.log("Changed to=>", event.target.value);
    setCartProducts(
      cartProducts.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantityOnCart: event.target.value,
          };
        }
        return product;
      })
    );
  }

  return (
    <>
      <div>
        {cartProducts.map(
          (product) =>
            product.quantityOnCart > 0 && (
              <ProductInCart
                key={product.id}
                product={product}
                onChangeProductQuantity={handleOnChangeProductQuantity}
                onProductDelete={handleOnProductDelete}
              />
            )
        )}
      </div>
      <div>
        <SubTotalInCart products={cartProducts} />
      </div>
    </>
  );
}
