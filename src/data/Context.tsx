import React, { useState, useEffect } from 'react';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const QUERY = gql`
  query {
    products {
      url
      productName
      brand
      description
      price
    }
  }
`;
export type ProductType = {
  url: string;
  productName: string;
  brand: string;
  description: string;
  price: number;
};

interface Products {
  products: ProductType[];
}

interface ContextProps {
  value: ProductType[];
  sortContextDesc: Function;
  sortContextAsc: Function;
  submitContext: Function;
  getDataContext: Function;
  selectProductContext: Function;
  selectedProduct: ProductType;
}

const defaultDetail: ProductType = {
  url: '/no_picture.png',
  productName: 'default',
  brand: 'default',
  description: 'asuhdiuashd',
  price: 0,
};

const DataContext = React.createContext<ContextProps>({
  value: [],
  sortContextDesc: () => {},
  sortContextAsc: () => {},
  submitContext: () => {},
  getDataContext: () => {},
  selectProductContext: () => {},
  selectedProduct: defaultDetail,
});

const Provider: React.FunctionComponent<ContextProps> = ({ children }) => {
  const [state, newData] = useState([]);
  const [selectedProductState, SelectedProduct] = useState<ProductType>({
    url: '/no_picture.png',
    productName: 'asdas',
    brand: 'asdasd',
    description: 'asdasdasd',
    price: 0,
  });
  const client = useApolloClient();
  // const { loading, error, data } = useQuery<Heros>(QUERY);
  // if (loading) {
  //   return <div>loading</div>; // TO DO Implementing Loading Page
  // }
  useEffect(() => {
    client
      .query<Products>({ query: QUERY })
      .then(result => newData(() => result.data.products));
  }, [client]);

  const sortAsc = () => {
    const sortArray = [...state];
    sortArray.sort(function(a, b) {
      const nameA = a.productName.toUpperCase(); // Groß-/Kleinschreibung ignorieren
      const nameB = b.productName.toUpperCase(); // Groß-/Kleinschreibung ignorieren
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // Namen müssen gleich sein
      return 0;
    });

    newData(sortArray);
  };

  const selectedProduct = (product: ProductType) => {
    SelectedProduct(product);
    console.log(product);
  };

  const sortDesc = () => {
    const sortArray = [...state];
    sortArray.sort(function(a, b) {
      const nameA = a.productName.toUpperCase(); // Groß-/Kleinschreibung ignorieren
      const nameB = b.productName.toUpperCase(); // Groß-/Kleinschreibung ignorieren
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }

      // Namen müssen gleich sein
      return 0;
    });
    newData(sortArray);
  };
  const submit = () => {};

  const getData = () => {
    return state;
  };

  return (
    <DataContext.Provider
      value={{
        value: state!,
        sortContextAsc: sortAsc,
        sortContextDesc: sortDesc,
        submitContext: submit,
        getDataContext: getData,
        selectProductContext: selectedProduct,
        selectedProduct: selectedProductState,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default { DataContext, Provider };
