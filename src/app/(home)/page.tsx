import getProducts, { ProductsParams } from '../actions/getProducts';
import getCurrentUser from '../actions/getCurrentUser';
import Container from '@/components/Container';
import ProductCard from '@/components/ProductCard';
import FloatingButton from '@/components/FloatingButton';
import EmptyState from '@/components/EmptyState';

interface HomeProps {
  searchParams: ProductsParams
};

export default async function Home({ searchParams }: HomeProps) {
  const products = await getProducts(searchParams);
  const currentUser = await getCurrentUser();

  console.log(currentUser);

  console.log(products);

  return (
    <Container>
      {/* Category */}

      {products?.data.length === 0
        ?
        <EmptyState showReset />
        :
        <>
          <div className='
grid
grid-cols-1
gap-8
pt-12
sm:grid-cols-2
md:grid-cols-3
lg:grid-cols-4
xl:grid-cols-5
2xl:grid-cols-6
'>
            {products?.data.map((product) => (
              <ProductCard
                currentUser={currentUser}
                key={product.id}
                data={product}
              />
            ))}
          </div>
          {/* Pagination */}

          <FloatingButton href="/products/upload">+</FloatingButton>
        </>

      }
    </Container>
  );
}
