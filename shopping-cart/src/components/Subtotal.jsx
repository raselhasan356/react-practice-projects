/* eslint-disable react/prop-types */
export default function SubTotal({ products }) {
  const numberOfItems = products.length;
  console.log(numberOfItems);
  let totalPrice = 0;
  products.map(
    (product) => (totalPrice += product.quantityOnCart * product.unitPrice)
  );
  return (
    <div className="p-5 border-2 rounded-md">
      <span>
        <strong>{`Subtotal (${numberOfItems} items): BDT # ${totalPrice} Taka`}</strong>
      </span>
    </div>
  );
}
