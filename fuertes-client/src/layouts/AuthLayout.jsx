import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-white text-zinc-900">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">
        <div className="flex items-center justify-center border-b-2 border-zinc-200 bg-navy p-8 sm:p-10 lg:border-b-0 lg:border-r-2 lg:border-zinc-200 lg:p-16">
          <div className="flex w-full max-w-md items-center justify-center rounded-4xl border-2 border-dashed border-white/30 bg-white/10 p-8 sm:p-10">
            <div className="relative aspect-square w-full max-w-[18rem] border-10 border-white/20">
              <span className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 rotate-45 bg-gold/60" />
              <span className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 -rotate-45 bg-gold/60" />
            </div>
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
