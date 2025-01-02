'use client';

import { HTMLAttributes } from 'react';
import Image from 'next/image';
import { Product } from '@/types';
import { HeartIcon } from 'lucide-react';

import { useProductList } from '@/context';
import { AspectRatio } from '@/components/ui';
import { cn } from '@/lib/utils';

interface ProductItemProps extends HTMLAttributes<HTMLLIElement> {
  item: Product;
}

export default function ProductItem({ item, ...props }: ProductItemProps) {
  const { code, name, url, brandName, price, isFavorite } = item;
  const { handleChangeFavorite } = useProductList();

  const handleClickHeart = async () => {
    try {
      const response = await fetch('/api/products/wish', { method: 'POST' });
      const result = await response.json() as { status: number };
      if (result.status !== 200) throw new Error();
      handleChangeFavorite(code);
    } catch (error) {
      console.error(error);
    }
  };

  return <li  {...props} className={`w-full flex flex-col items-start gap-y-[10px] ${props.className}`}>
    <AspectRatio ratio={3 / 4} className={'relative'}>
      <Image src={url} alt="product thumbnail" fill unoptimized />
      <button onClick={handleClickHeart}>
        <HeartIcon color={isFavorite ? 'black' : 'lightgray'}
                   className={cn('absolute top-[10px] right-[5px]', isFavorite ? 'fill-red-500' : 'fill-white')} />
      </button>
    </AspectRatio>
    <div className={'w-full flex flex-col items-start gap-y-[5px] p-[0_0_10px] sm:p-[0_10px] text-[13px]'}>
      <span className={'font-semibold'}>{brandName}</span>
      <span>{name}</span>
      <span>{price.real.toLocaleString()}</span>
    </div>
  </li>;
}
