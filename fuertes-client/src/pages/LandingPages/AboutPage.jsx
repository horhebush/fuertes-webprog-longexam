import Button from '../../components/Button';
import coverPhoto from '../../assets/img/nu bulldogs cover photo.jpg';
import grid1 from '../../assets/img/grid 1.jpg';
import grid2 from '../../assets/img/grid 2.jpg';
import grid3 from '../../assets/img/grid 3.jpg';
import grid4 from '../../assets/img/grid 4.jpg';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col">
      <section className="bg-light px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <img src={coverPhoto} alt="NU Bulldogs" className="h-full w-full object-cover" />
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">
              About Store
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-navy sm:text-4xl">
              A campus shop focused on useful products and simple ordering.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              BulldogEx Shop is the official campus merchandise store of National University.
              From apparel and accessories to collectibles and drinkware, we bring Bulldogs pride
              straight to your doorstep with easy ordering and on-campus pickup.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/products">Open Products</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            Store Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-navy">Quick store blocks</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-2xl font-bold text-navy">08</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-gold">
              Items
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-2xl font-bold text-navy">04</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-gold">
              Categories
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-2xl font-bold text-navy">03</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-gold">
              Pickup Slots
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-2xl font-bold text-navy">24</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-gold">
              Orders
            </p>
          </div>
        </div>
      </section>

      <section className="bg-light px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              Store Flow
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-navy">Stacked shopping wireframe</h2>

            <div className="mt-6 space-y-4">
              <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-navy">Curated Catalog</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Products are grouped by daily need so shoppers can scan faster.
                </p>
              </article>

              <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-navy">Simple Checkout</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Product pages keep price, stock, and action buttons easy to find.
                </p>
              </article>

              <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-navy">Pickup Ready</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Store information stays direct for students who need quick order updates.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              Bulldogs Lookbook
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-xl">
                <img src={grid1} alt="NU Apparel Collection" className="aspect-square w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img src={grid2} alt="Wear It Your Way" className="aspect-square w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img src={grid3} alt="Elevate Your Style" className="aspect-square w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img src={grid4} alt="Bulldogs Exchange" className="aspect-square w-full object-cover" />
              </div>
            </div>
            <Button to="/products" className="mt-5">View Products</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
