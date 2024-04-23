import React, { useState } from "react";
import Product from "./Product/Product";

const Photo = ({ model }: any) => {
  const [order, setOrder] = useState(model);
  return (
    <>
      <Product order={order} />
    </>
  );
};

export default Photo;
