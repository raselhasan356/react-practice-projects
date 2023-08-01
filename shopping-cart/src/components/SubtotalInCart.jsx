export default function SubTotalInCart({ products }) {
  const numberOfItems = products.length;
  let totalPrice = 0;
  products.forEach(
    (product) =>
      product.quantityOnCart > 0 &&
      (totalPrice += product.quantityOnCart * product.unitPrice)
  );
  return (
    <div>
      <span>{`Subtotal (${numberOfItems} items): BDT # ${totalPrice} Taka`}</span>
    </div>
  );
}
