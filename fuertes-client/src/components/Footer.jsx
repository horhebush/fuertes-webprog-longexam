import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-[#003087] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 text-white sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-lg font-bold">BulldogEx Shop</p>
          <p className="mt-1 text-sm text-zinc-300">
            Your one-stop campus merch store — by Bulldogs, for Bulldogs.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
          <Link to="/" className="transition hover:text-[#F5A623]">Home</Link>
          <Link to="/products" className="transition hover:text-[#F5A623]">Products</Link>
          <Link to="/about" className="transition hover:text-[#F5A623]">About</Link>
          <Link to="/auth/signin" className="transition hover:text-[#F5A623]">Sign In</Link>
          <Link to="/auth/signup" className="transition hover:text-[#F5A623]">Sign Up</Link>
        </nav>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-white/20 pt-6 text-center text-xs text-zinc-300">
        © 2025 BulldogEx Shop. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
