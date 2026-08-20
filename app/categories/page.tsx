'use client';

import { Suspense, useMemo, useState, type ReactNode } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import Button from '@/components/Button';
import PageHeader from '@/components/ui/PageHeader';
import products from '@/data/products.json';
import { FilterState } from '@/types';
import { filterProducts, getPriceRange } from '@/lib/utils';
import { searchProducts } from '@/lib/search';
import businessConfig from '@/config/business.json';

const VALID_CATEGORIES = new Set(
  businessConfig.categories.map((cat) => cat.name)
);

function CategoriesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const categoryParam = searchParams.get('category');
  const categoryFromQuery =
    categoryParam && VALID_CATEGORIES.has(categoryParam)
      ? categoryParam
      : 'All';

  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<FilterState['sortBy']>('relevance');

  const priceRange = getPriceRange(products);
  const [selectedPriceRange, setSelectedPriceRange] = useState<[number, number]>(
    priceRange
  );

  const updateCategory = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (!category || category === 'All') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  const searchedProducts = useMemo(
    () => searchProducts(products, searchQuery),
    [searchQuery]
  );

  const filteredProducts = useMemo(() => {
    const filterState: Partial<FilterState> = {
      category: categoryFromQuery === 'All' ? undefined : categoryFromQuery,
      sortBy,
      priceRange: selectedPriceRange,
    };
    return filterProducts(searchedProducts, filterState);
  }, [searchedProducts, categoryFromQuery, sortBy, selectedPriceRange]);

  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <Navbar />
      <PageHeader
        eyebrow="Shop"
        title="Our Products"
        description={`Browse our complete collection of ${products.length} plants and garden essentials.`}
      />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search plants, pots, seeds..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-cream-dark bg-white px-5 py-4 text-sm text-charcoal outline-none transition-colors focus:border-olive-600"
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            <aside className="lg:col-span-1">
              <div className="sticky top-24 border border-cream-dark bg-white p-6">
                <div className="mb-8">
                  <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-charcoal">
                    Category
                  </h3>
                  <div className="space-y-1">
                    <FilterButton
                      active={categoryFromQuery === 'All'}
                      onClick={() => updateCategory('All')}
                    >
                      All
                    </FilterButton>
                    {businessConfig.categories.map((cat) => (
                      <FilterButton
                        key={cat.id}
                        active={categoryFromQuery === cat.name}
                        onClick={() => updateCategory(cat.name)}
                      >
                        {cat.name}
                      </FilterButton>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-charcoal">
                    Price Range
                  </h3>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min={priceRange[0]}
                      max={priceRange[1]}
                      value={selectedPriceRange[0]}
                      onChange={(e) =>
                        setSelectedPriceRange([
                          parseInt(e.target.value),
                          selectedPriceRange[1],
                        ])
                      }
                      className="w-full accent-olive-600"
                    />
                    <input
                      type="range"
                      min={priceRange[0]}
                      max={priceRange[1]}
                      value={selectedPriceRange[1]}
                      onChange={(e) =>
                        setSelectedPriceRange([
                          selectedPriceRange[0],
                          parseInt(e.target.value),
                        ])
                      }
                      className="w-full accent-olive-600"
                    />
                    <p className="text-sm text-stone">
                      ₹{selectedPriceRange[0]} - ₹{selectedPriceRange[1]}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-charcoal">
                    Sort By
                  </h3>
                  <select
                    value={sortBy}
                    onChange={(e) =>
                      setSortBy(e.target.value as FilterState['sortBy'])
                    }
                    className="w-full border border-cream-dark bg-white px-3 py-2 text-sm text-charcoal outline-none focus:border-olive-600"
                  >
                    <option value="relevance">Relevance</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="alphabetical">Alphabetical</option>
                  </select>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-3">
              {filteredProducts.length === 0 ? (
                <div className="py-16 text-center">
                  <p className="mb-4 text-stone">
                    No products found matching your criteria.
                  </p>
                  <Button
                    variant="primary"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedPriceRange(priceRange);
                      setSortBy('relevance');
                      updateCategory('All');
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <>
                  <p className="mb-6 text-sm text-stone">
                    Showing {filteredProducts.length} of {products.length}{' '}
                    products
                  </p>
                  <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`block w-full px-3 py-2 text-left text-sm transition-colors ${
        active
          ? 'bg-olive-600 text-white'
          : 'text-charcoal hover:bg-cream-dark'
      }`}
    >
      {children}
    </button>
  );
}

export default function CategoriesPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-cream text-charcoal">
          Loading products...
        </div>
      }
    >
      <CategoriesContent />
    </Suspense>
  );
}
