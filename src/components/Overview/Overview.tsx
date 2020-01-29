/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import Card from '../Card/Card';
import Headline from '../Headline/Headline';
import css from './Overview.scss';
import DataContext from '../../data/Context';
import Product from '../Product/Product';

const Overview: React.FunctionComponent = () => {
  const context = useContext(DataContext.DataContext);
  const products = context.getDataContext();

  return (
    <React.Fragment>
      <Headline text={'Overview'}></Headline>
      <div className={css.cardslayout}>
        {products &&
          products.map(prod => {
            return (
              <div
                role="button"
                tabIndex={-1}
                key={prod.productName}
                className={css.card}
                onClick={() => {
                  context.selectProductContext(prod);
                }}
              >
                <Card>
                  <Product
                    url={prod.url}
                    productName={prod.productName}
                    brand={prod.brand}
                    description={prod.description}
                    price={prod.price}
                    isDetail={false}
                  />
                </Card>
              </div>
            );
          })}
      </div>
    </React.Fragment>
  );
};
export default Overview;
