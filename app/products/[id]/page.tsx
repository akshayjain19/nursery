import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import { formatPrice } from '@/lib/utils';
import {
  getAllProducts,
  getProductById,
  getRelatedProducts,
} from '@/lib/products';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return getAllProducts().map((product) => ({
    id: String(product.id),
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(Number(id));

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product);

  return (
    <div className="flex min-h-screen flex-col bg-forest">
      <Navbar />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm text-white/50">
            <Link href="/" className="hover:text-lime">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/categories" className="hover:text-lime">
              Shop
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{product.name}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-2">
            <div className="card-surface relative aspect-square overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-lime">
                {product.category}
              </p>
              <h1 className="mt-3 font-display text-4xl font-bold text-white md:text-5xl">
                {product.name}
              </h1>
              {product.scientificName && (
                <p className="mt-2 text-sm italic text-white/50">
                  {product.scientificName}
                </p>
              )}
              <p className="mt-6 text-3xl font-semibold text-lime">
                {formatPrice(product.price)}
              </p>
              {product.description && (
                <p className="mt-6 leading-relaxed text-white/70">
                  {product.description}
                </p>
              )}

              <dl className="mt-8 grid gap-4 border-y border-white/10 py-6 text-sm">
                {product.careLevel && (
                  <div className="flex justify-between gap-4">
                    <dt className="font-semibold uppercase tracking-[0.12em] text-white">
                      Care level
                    </dt>
                    <dd className="text-white/60">{product.careLevel}</dd>
                  </div>
                )}
                {product.medicinal && (
                  <div className="flex justify-between gap-4">
                    <dt className="font-semibold uppercase tracking-[0.12em] text-white">
                      Type
                    </dt>
                    <dd className="text-white/60">Medicinal plant</dd>
                  </div>
                )}
                <div className="flex justify-between gap-4">
                  <dt className="font-semibold uppercase tracking-[0.12em] text-white">
                    Delivery
                  </dt>
                  <dd className="text-white/60">Free shipping in Indore</dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-wrap gap-4">
                <WhatsAppButton
                  product={product}
                  variant="lime"
                  size="lg"
                  className="rounded-full"
                />
                <Link
                  href={`/categories?category=${encodeURIComponent(product.category)}`}
                  className="inline-flex items-center justify-center rounded-full border border-lime/40 px-8 py-4 text-sm font-semibold text-lime transition-colors hover:bg-lime hover:text-forest"
                >
                  More in {product.category}
                </Link>
              </div>
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <section className="mt-20">
              <h2 className="font-display text-3xl font-bold text-white">
                You may also like
              </h2>
              <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
                {relatedProducts.map((related) => (
                  <ProductCard key={related.id} product={related} theme="dark" />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
