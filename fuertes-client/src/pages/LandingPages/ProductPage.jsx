import { useParams } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import products from '../../assets/product-content.js'

function ProductPage() {
  const { name } = useParams();
  const product = products.find(product => product.name === name);

  if (!product) {
    return (
      <div className="flex w-full flex-col">
        <section className="bg-light px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-navy">Product not found</h1>
            <Button to="/products" className="mt-6">Back to Products</Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col">

      <section className="bg-light px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-4">
            <Button to="/products">Back to Products</Button>
          </div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">
            {product.category}
          </p>
          <h1 className="text-3xl font-bold leading-tight text-navy sm:text-4xl">
            {product.displayName}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-zinc-600">
            <span className="text-xl font-bold text-navy">₱{product.price.toLocaleString()}</span>
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">{product.stock} in stock</span>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex aspect-4/3 items-center justify-center overflow-hidden rounded-2xl border border-zinc-200 bg-light shadow-sm">
            <img
              src={product.image}
              alt={product.displayName}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="prose prose-sm max-w-none space-y-4 text-zinc-700">
            <p className="text-base leading-7 text-zinc-700 whitespace-pre-wrap">
              {product.description}
            </p>
          </div>

          <div className="mt-8 border-t border-zinc-200 pt-6">
            <Button variant="primary" className="mr-3">Add to Cart</Button>
            <Button to="/products">Back to Products</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
