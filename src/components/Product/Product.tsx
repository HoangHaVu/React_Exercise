import React from "react";
import css from "./Product.scss";

interface ProductProps {
  url: string;
  productName: string;
  brand: string;
  description: string;
  price: string;
}

const Product: React.FunctionComponent<ProductProps> = ({
  url,
  productName,
  brand,
  description,
  price
}) => {
  return (
    <React.Fragment>
      <img src={url} alt="Product Image" />
      <ul className={css.list}>
        <li>{productName}</li>
        <li>{brand}</li>
        <li>{price}</li>
        <li>{description}</li>      
      </ul>
    </React.Fragment>
  );
};
export default Product;
