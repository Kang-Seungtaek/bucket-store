'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { useLoading, useProductList } from '@/context';
import { BaseResponse, Product } from '@/types';
import { Grid } from 'react-loader-spinner';

export default function InfiniteScroll() {
  const { loading, openLoading, closeLoading } = useLoading();
  const { currentPage, handleCurrentPage, handleSetProductList } = useProductList();

  const searchParams = useSearchParams();

  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMore();
        }
      },
      { rootMargin: '100px' },
    );
    if (observerRef.current && loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current && loadMoreRef.current) {
        observerRef.current.unobserve(loadMoreRef.current);
      }
    };
  }, [loading]);

  const loadMore = async () => {
    if (loading) return;
    openLoading();
    try {
      const searchParam = new URLSearchParams(searchParams);
      searchParam.set('page', (currentPage + 1).toString());

      const response = await fetch(`/api/products?${searchParam.toString()}`);
      const { status, data } = await response.json() as BaseResponse<Product[]>;

      if (status !== 200) throw new Error();
      handleCurrentPage(currentPage + 1);
      handleSetProductList(data.body);
    } catch (error) {
      console.error('ERROR', error);
    } finally {
      closeLoading();
    }
  };

  return <>
    {loading &&
      <div className={'w-full flex justify-center'}>
        <Grid
          visible={true}
          width="30"
          height="30"
          color="#000"
          ariaLabel="tail-spin-loading"
        />
      </div>
    }
    <div ref={loadMoreRef} />
  </>;
}
