/* eslint-disable react/prop-types */
export default function ProductInCart({
  product,
  onChangeProductQuantity,
  onProductDelete,
}) {
  console.log(product.name);
  return (
    <div className="p-4 border-2 rounded-md">
      <img src={product.imageUrl} alt={product.imageAlt} />
      <h3>{product.name}</h3>
      <h5>
        BDT: <b>{product.unitPrice}</b>
      </h5>
      <div className="space-x-2">
        <label>Qty: </label>
        <select
          className="p-1 border-2 rounded-md"
          id="product_quantity"
          defaultValue={product.quantityOnCart}
          onChange={() =>
            onChangeProductQuantity(event.target.value, product.id)
          }
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <button
          className="hover:text-white hover:bg-red-600 duration-500 focus:outline-none focus:ring-2 px-4 py-1 border-2 rounded-full text-sm text-red-600"
          onClick={() => onProductDelete(product.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
