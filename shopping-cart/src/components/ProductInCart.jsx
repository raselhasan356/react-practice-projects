export default function ProductInCart({
  product,
  onChangeProductQuantity,
  onProductDelete,
}) {
  console.log(product.name);
  return (
    <div>
      <img src={product.imageUrl} alt={product.imageAlt} />
      <h3>{product.name}</h3>
      <h5>
        BDT: <b>{product.unitPrice}</b>
      </h5>
      <label>Qty: </label>
      <select
        id="product_quantity"
        onChange={() => onChangeProductQuantity(event, product.id)}
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <button onClick={() => onProductDelete(product.id)}>Delete</button>
    </div>
  );
}
