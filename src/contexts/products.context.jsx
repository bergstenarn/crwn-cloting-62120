import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";
// import SHOP_DATA from "../shop-data.js";

export const productsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);
  const value = { products };
  return (
    <productsContext.Provider value={value}>
      {children}
    </productsContext.Provider>
  );
};
