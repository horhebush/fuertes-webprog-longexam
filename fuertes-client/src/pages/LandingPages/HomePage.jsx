import Button from '../../components/Button';
import banner from '../../assets/img/nu_bulldogex_banner.jpg';
import aboutPhoto from '../../assets/img/about section photo.jpg';

const HomePage = () => {
    return (
        <div className="flex w-full flex-col">
            <section className="relative min-h-[28rem] overflow-hidden bg-navy px-4 py-10 sm:px-6 lg:px-8">
                <img
                    src={banner}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-navy/60" />

                <div className="relative z-10 flex min-h-[22rem] items-start justify-end text-right sm:min-h-[24rem]">
                    <div className="max-w-xl">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">
                            Campus Marketplace
                        </p>
                        <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                            Welcome to BulldogEx Shop
                        </h1>
                        <p className="mt-4 text-sm leading-7 text-zinc-100 sm:text-base">
                            Explore campus uniforms, student essentials, and school merch in one
                            quick storefront.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-end gap-3">
                            <Button to="/products">
                                Shop Now
                            </Button>
                            <Button to="/about" variant="primary">
                                About Store
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-light px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
                <div className="mb-6">
                    <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                        Store Overview
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-navy">Quick shopping blocks</h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                        <p className="text-2xl font-bold text-navy">08</p>
                        <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-gold">
                            Products
                        </p>
                    </div>
                    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                        <p className="text-2xl font-bold text-navy">04</p>
                        <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-gold">
                            Categories
                        </p>
                    </div>
                    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                        <p className="text-2xl font-bold text-navy">24</p>
                        <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-gold">
                            Orders
                        </p>
                    </div>
                    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                        <p className="text-2xl font-bold text-navy">03</p>
                        <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-gold">
                            Pickup Slots
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
                <div className="mb-6">
                    <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                        Shop Sections
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-navy">Simple store cards</h2>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    <article className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-lg">
                        <div className="overflow-hidden rounded-xl">
                            <img
                                src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
                                alt="Daily Essentials"
                                className="aspect-4/3 w-full object-cover"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-navy">Daily Essentials</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Bags, tumblers, lanyards, and items used every school day.
                        </p>
                        <Button to="/products" className="mt-4" variant="primary">View Products</Button>
                    </article>

                    <article className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-lg">
                        <div className="overflow-hidden rounded-xl">
                            <img
                                src="https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=600&q=80"
                                alt="Study Supplies"
                                className="aspect-4/3 w-full object-cover"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-navy">Study Supplies</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Notes, desk tools, and study kits for class and review weeks.
                        </p>
                        <Button to="/products" className="mt-4" variant="primary">Shop Supplies</Button>
                    </article>

                    <article className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-lg">
                        <div className="overflow-hidden rounded-xl">
                            <img
                                src={aboutPhoto}
                                alt="Campus Apparel"
                                className="aspect-4/3 w-full object-cover"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-navy">Campus Apparel</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Comfortable pieces for class days, commute days, and weekends.
                        </p>
                        <Button to="/products" className="mt-4" variant="primary">
                            View Apparel
                        </Button>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
