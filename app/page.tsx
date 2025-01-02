import { InfiniteScroll, MobileFilter, ProductList, ProductSort } from '@/components/display';
import { getData } from '@/lib/api';
import { ProductListContextProvider } from '@/context';

export default async function Home(props: { searchParams: Promise<{ [key: string]: string }> }) {
  const searchParams = await props.searchParams;
  const data = await getData({ order_type: 'newest', ...searchParams });

  if (!data?.data) return null;

  return (
    <ProductListContextProvider>
      <ProductSort />
      <ProductList list={data?.data.body} />
      <InfiniteScroll />
      <MobileFilter />
    </ProductListContextProvider>
  );
}
