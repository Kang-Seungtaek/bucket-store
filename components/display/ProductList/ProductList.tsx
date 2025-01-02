'use client';

import { HTMLAttributes, useEffect } from 'react';
import { Product } from '@/types';
import { ProductItem } from '@/components/display';
import { useLoading, useProductList } from '@/context';


interface ListProps extends HTMLAttributes<HTMLUListElement> {
  list: Product[];
}

export default function ProductList({ list, ...props }: ListProps) {
  const { closeLoading } = useLoading();
  const { productList, initProductList } = useProductList();

  useEffect(() => {
    if (list.length > 0) {
      initProductList(list);
      closeLoading();
    }
  }, [list]);

  return <ul {...props}
             className={`w-full grid grid-cols-4 sm:grid-cols-2 gap-x-px gap-y-[60px] sm:gap-y-[30px] ${props.className}`}>
    {productList.map((item) => {
      return <ProductItem key={`${item.brandId}-${item.code}`} item={item} />;
    })}
  </ul>;
}
