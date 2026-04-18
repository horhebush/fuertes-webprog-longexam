import { Outlet } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-white text-zinc-900">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">
        <div className="flex items-center justify-center border-b-2 border-zinc-200 bg-navy p-8 sm:p-10 lg:border-b-0 lg:border-r-2 lg:border-zinc-200 lg:p-16">
          <div className="flex w-full max-w-md flex-col items-center justify-center rounded-4xl border-2 border-dashed border-white/30 bg-white/10 p-8 sm:p-10">
            <div className="flex aspect-square w-full max-w-[18rem] items-center justify-center">
              <img
                src={logo}
                alt="Bulldogs Exchange"
                className="h-full w-full object-contain drop-shadow-2xl"
              />
            </div>
            <p className="mt-6 text-center text-xl font-bold uppercase tracking-widest text-white">
              Bulldogs Exchange
            </p>
            <p className="mt-1 text-center text-sm text-gold">
              National University Campus Store
            </p>
          </div>
        </div>

        <main className="flex items-center bg-white px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;
