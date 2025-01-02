'use server';

import { BaseResponse, Product } from '@/types';

export const getData = async (searchParams: {
  [key: string]: string
} | URLSearchParams): Promise<BaseResponse<Product[]> | undefined> => {
  try {
    const params = new URLSearchParams(searchParams);
    const response = await fetch(`https://bucket-assignment-vercel.vercel.app/api?${params.toString()}`);
    return await response.json() as BaseResponse<Product[]>;
  } catch (error: any) {
    throw new Error(error);
  }
};
