import { useEffect } from 'react';
const Price = ({
  firstPrice,
  secondPrice,
  baseAmount,
  orderPriceChange,
}: any) => {
  const price =
    parseInt(baseAmount) + parseInt(firstPrice) + parseInt(secondPrice);
  useEffect(() => {
    orderPriceChange(price);
  });
  return (
    <>
      <span className='price'>{price} zł</span>
    </>
  );
};
export default Price;
