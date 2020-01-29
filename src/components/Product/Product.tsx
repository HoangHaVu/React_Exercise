import React from 'react';
import css from './Product.scss';
import classNames from 'classnames';

interface ProductProps {
  url: string;
  productName: string;
  brand: string;
  description: string;
  price: number;
  isDetail: boolean;
}

const Product: React.FunctionComponent<ProductProps> = ({ url, productName, brand, description, price, isDetail }) => {
  const styles = classNames(css.product, { [css.productWide]: isDetail });
  return (
    <div className={styles}>
      <div className={css.imagewrapper}>
        <img src={url} alt="Product" />
      </div>
      <p className={css.productName}>{productName}</p>
      <p className={css.brand}>{brand}</p>
      <p className={css.price}>{price}</p>
      {isDetail && <p className={css.description}>{description}</p>}
    </div>
  );
};

export default Product;
