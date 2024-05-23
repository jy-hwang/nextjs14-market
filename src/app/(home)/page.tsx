import Image from 'next/image';
import getProducts, { ProductsParams } from '../actions/getProducts';
import getCurrentUser from '../actions/getCurrentUser';

interface HomeProps {
  searchParams: ProductsParams
};

export default async function Home({ searchParams }: HomeProps) {
  const products = await getProducts(searchParams);
  const currentUser = await getCurrentUser();

  console.log(currentUser);

  console.log(products);


  return <main>누구나 볼 수 있는 페이지 입니다.</main>;
}
