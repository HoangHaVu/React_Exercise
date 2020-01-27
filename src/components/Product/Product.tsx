import React from 'react';
import css from './Product.scss';

interface ProductProps {
  url: string;
  productName: string;
  brand: string;
  description: string;
  price: number;
  detail: boolean;
}

const Product: React.FunctionComponent<ProductProps> = ({ url, productName, brand, description, price, detail }) => {
  return (
    <div className={css.productWrapper}>
      <div className={css.imagewrapper}>
        <img src={url} alt="Product" />
      </div>
      <p className={css.productName}>{productName}</p>
      <p className={css.brand}>{brand}</p>
      <p className={css.price}>{price}</p>
      {detail && <p className={css.description}>{description}</p>}
    </div>
  );
};
export default Product;
