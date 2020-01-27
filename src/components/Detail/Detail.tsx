import React, { useContext } from 'react';
import Card from '../Card/Card';
import Headline from '../Headline/Headline';
import DataContext from '../../data/Context';
import Product from '../Product/Product';

export type ProductType = {
  url: string;
  productName: string;
  brand: string;
  description: string;
  price: number;
};

const Detail: React.FunctionComponent = () => {
  const context = useContext(DataContext.DataContext);
  const selected = context.selectedProduct;
  return (
    <React.Fragment>
      <Headline text={'Detail'}></Headline>
      <Card>
        <Product
          url={selected.url}
          productName={selected.productName}
          brand={selected.brand}
          description={selected.description}
          price={selected.price}
          detail={true}
        />
      </Card>
    </React.Fragment>
  );
};
export default Detail;
