'use client';

import { Product } from '@/types';
import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

type ProductListContextType = {
  currentPage: number;
  handleCurrentPage: (v: number) => void;
  productList: Product[];
  initProductList: (list: Product[]) => void;
  clearProductList: () => void;
  handleSetProductList: (list: Product[]) => void;
  handleChangeFavorite: (code: Product['code']) => void
}

const ProductListContext = createContext<ProductListContextType | undefined>(undefined);


export const ProductListContextProvider = ({ children }: { children: ReactNode }) => {
  const [_currentPage, setCurrentPage] = useState<number>(1);
  const [_productList, setProductList] = useState<Product[]>([]);

  const handleCurrentPage = (value: number) => setCurrentPage(value);

  const handleSetProductList = (value: Product[]) => {
    setProductList(prevState => value.reduce((pre, cur) => {
      if (!pre.find(({ code }) => cur.code === code)) {
        pre.push(cur);
      }
      return pre;
    }, prevState));
  };

  const handleChangeFavorite = (code: Product['code']) => {
    setProductList(prevState => prevState.map((x) => {
      if (x.code === code) {
        x = { ...x, isFavorite: !x.isFavorite };
      }
      return x;
    }));
  };

  const initProductList = (value: Product[]) => setProductList(value);
  const clearProductList = () => setProductList([]);

  const currentPage = useMemo(() => _currentPage, [_currentPage]);
  const productList = useMemo(() => _productList, [_productList]);

  return (
    <ProductListContext.Provider value={{
      currentPage,
      handleCurrentPage,
      productList,
      initProductList,
      clearProductList,
      handleSetProductList,
      handleChangeFavorite,
    }}>{children}</ProductListContext.Provider>
  );
};

export const useProductList = () => {
  const context = useContext(ProductListContext);
  if (context === undefined) {
    throw new Error('');
  }
  return context;
};
