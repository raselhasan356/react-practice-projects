/* eslint-disable react/prop-types */
export default function Product({
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
      <div className="flex items-center space-x-2">
        <label>
          Qty: <b> {product.quantityOnCart} </b>
        </label>
        <button
          onClick={() => onChangeProductQuantity("+", product.id)}
          className="border-2 border-gray rounded-md hover:text-white hover:bg-green-600 duration-500"
        >
          <span className="material-symbols-outlined flex items-center">
            arrow_upward
          </span>
        </button>
        <button
          onClick={() => onChangeProductQuantity("-", product.id)}
          className="border-2 border-gray rounded-md hover:text-white hover:bg-red-600 duration-500"
        >
          <span className="material-symbols-outlined flex items-center">
            arrow_downward
          </span>
        </button>
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
