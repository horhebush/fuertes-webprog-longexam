import { Link } from 'react-router-dom';
import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="bg-[#F5F5F5] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#F5A623]">
            Oops — Wrong Turn
          </p>
          <h1 className="text-6xl font-bold leading-tight text-[#003087] sm:text-7xl">
            404
          </h1>
          <p className="mt-4 text-lg leading-7 text-zinc-600">
            Looks like this page wandered off campus! The page you're looking for doesn't exist or may have been moved.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-[#003087] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#F5A623] hover:text-[#003087]"
            >
              Back to Home
            </Link>
            <Button to="/products">View Products</Button>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#F5A623]">
            Quick Links
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#003087]">Explore BulldogEx Shop</h2>

          <div className="mt-6 space-y-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-[#003087]">Home</h3>
              <p className="mt-1 text-sm text-zinc-600">Head back to the BulldogEx homepage</p>
              <Button to="/" className="mt-3">Go Home</Button>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-[#003087]">Products</h3>
              <p className="mt-1 text-sm text-zinc-600">Browse all NU campus merch and essentials</p>
              <Button to="/products" className="mt-3">View Products</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
