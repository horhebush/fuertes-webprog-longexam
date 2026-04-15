import Button from './Button';

const ProductCard = ({ product, index }) => {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-lg">
      <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-xl bg-light">
        <img
          src={product.image}
          alt={product.displayName}
          className="h-full w-full object-cover"
        />
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-gold">
        {product.category} {String(index + 1).padStart(2, '0')}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-navy">{product.displayName}</h3>
      <p className="mt-2 text-base font-bold text-navy">₱{product.price.toLocaleString()}</p>
      <p className="mt-3 text-sm leading-6 text-zinc-600">
        {product.description.substring(0, 120)}…
      </p>
      <Button to={`/products/${product.name}`} className="mt-4">View Product</Button>
    </article>
  );
};

export default ProductCard;
