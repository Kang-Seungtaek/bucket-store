'use client';

import { HTMLAttributes, useEffect, useMemo, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const SortOption = [
  { value: 'newest', label: '최신순' },
  { value: 'low_price', label: '낮은 가격순' },
  { value: 'high_price', label: '높은 가격순' },
  { value: 'high_discount_rate', label: '할인율 높은순' },
  { value: 'best', label: '판매 인기순' },
];

type ProductSortProps = HTMLAttributes<HTMLDivElement>

export default function ProductSort({ ...props }: ProductSortProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  useEffect(() => {
    const orderType = searchParams.get('order_type');
    if (orderType) setSelectedValue(orderType);
  }, []);

  useEffect(() => {
    if (selectedValue) {
      router.push(`${pathname}?order_type=${selectedValue}`);
    }
  }, [selectedValue]);

  const selectedName = useMemo(() => SortOption.find(({ value }) => value === selectedValue)?.label ?? null, [selectedValue]);

  return (
    <div {...props}
         className={`w-full p-[10px_20px] sm:p-[10px_5px] flex items-center justify-end ${props.className}`}>
      <Select onValueChange={setSelectedValue}>
        <SelectTrigger className={'max-w-[120px]'}>
          <SelectValue placeholder={selectedName ?? '최신순'}>{selectedName ?? '최신순'}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {SortOption.map(({ value, label }) => {
            return (
              <SelectItem key={value} value={value}>{label}</SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}
