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
    <div className="flex min-h-screen flex-col bg-cream">
      <Navbar />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm text-stone">
            <Link href="/" className="hover:text-olive-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/categories" className="hover:text-olive-600">
              Shop
            </Link>
            <span className="mx-2">/</span>
            <span className="text-charcoal">{product.name}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-2">
            <div className="relative aspect-square overflow-hidden border border-cream-dark bg-white">
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
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-olive-600">
                {product.category}
              </p>
              <h1 className="mt-3 font-serif text-4xl text-charcoal md:text-5xl">
                {product.name}
              </h1>
              {product.scientificName && (
                <p className="mt-2 text-sm italic text-stone">
                  {product.scientificName}
                </p>
              )}
              <p className="mt-6 text-3xl font-semibold text-charcoal">
                {formatPrice(product.price)}
              </p>
              {product.description && (
                <p className="mt-6 leading-relaxed text-stone">
                  {product.description}
                </p>
              )}

              <dl className="mt-8 grid gap-4 border-y border-cream-dark py-6 text-sm">
                {product.careLevel && (
                  <div className="flex justify-between gap-4">
                    <dt className="font-semibold uppercase tracking-[0.12em] text-charcoal">
                      Care level
                    </dt>
                    <dd className="text-stone">{product.careLevel}</dd>
                  </div>
                )}
                {product.medicinal && (
                  <div className="flex justify-between gap-4">
                    <dt className="font-semibold uppercase tracking-[0.12em] text-charcoal">
                      Type
                    </dt>
                    <dd className="text-stone">Medicinal plant</dd>
                  </div>
                )}
                <div className="flex justify-between gap-4">
                  <dt className="font-semibold uppercase tracking-[0.12em] text-charcoal">
                    Delivery
                  </dt>
                  <dd className="text-stone">Free shipping in Indore</dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-wrap gap-4">
                <WhatsAppButton product={product} variant="primary" size="lg" />
                <Link
                  href={`/categories?category=${encodeURIComponent(product.category)}`}
                  className="inline-flex items-center justify-center border border-olive-600 px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-olive-600 transition-colors hover:bg-olive-600 hover:text-white"
                >
                  More in {product.category}
                </Link>
              </div>
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <section className="mt-20">
              <h2 className="font-serif text-3xl text-charcoal">
                You may also like
              </h2>
              <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
                {relatedProducts.map((related) => (
                  <ProductCard key={related.id} product={related} />
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
