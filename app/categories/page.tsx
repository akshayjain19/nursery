'use client';

import { Suspense, useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import Button from '@/components/Button';
import products from '@/data/products.json';
import { FilterState } from '@/types';
import { filterProducts, getPriceRange } from '@/lib/utils';
import { searchProducts } from '@/lib/search';
import businessConfig from '@/config/business.json';
import { motion } from 'framer-motion';

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
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 bg-warmwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-2">
              Our Products
            </h1>
            <p className="text-lg text-neutral-700">
              Browse our complete collection of {products.length} products
            </p>
          </motion.div>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <input
              type="text"
              placeholder="Search plants, pots, seeds..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 text-lg border-2 border-primary-200 rounded-lg focus:outline-none focus:border-primary-500 transition-colors shadow-soft"
            />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              className="md:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-lg p-6 shadow-soft sticky top-20">
                <div className="mb-8">
                  <h3 className="font-display font-semibold text-charcoal mb-4">
                    Category
                  </h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => updateCategory('All')}
                      className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                        categoryFromQuery === 'All'
                          ? 'bg-primary-500 text-white font-medium'
                          : 'text-charcoal hover:bg-primary-50'
                      }`}
                    >
                      All
                    </button>
                    {businessConfig.categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => updateCategory(cat.name)}
                        className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                          categoryFromQuery === cat.name
                            ? 'bg-primary-500 text-white font-medium'
                            : 'text-charcoal hover:bg-primary-50'
                        }`}
                      >
                        {cat.emoji} {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-display font-semibold text-charcoal mb-4">
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
                      className="w-full"
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
                      className="w-full"
                    />
                    <div className="text-sm text-neutral-600">
                      ₹{selectedPriceRange[0]} - ₹{selectedPriceRange[1]}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-display font-semibold text-charcoal mb-4">
                    Sort By
                  </h3>
                  <select
                    value={sortBy}
                    onChange={(e) =>
                      setSortBy(e.target.value as FilterState['sortBy'])
                    }
                    className="w-full px-3 py-2 border border-primary-200 rounded focus:outline-none focus:border-primary-500"
                  >
                    <option value="relevance">Relevance</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="alphabetical">Alphabetical</option>
                  </select>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="md:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-lg text-neutral-600 mb-4">
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
                  <p className="text-sm text-neutral-600 mb-6">
                    Showing {filteredProducts.length} of {products.length}{' '}
                    products
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product, index) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.05,
                        }}
                      >
                        <ProductCard product={product} />
                      </motion.div>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function CategoriesPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-warmwhite text-charcoal">
          Loading products...
        </div>
      }
    >
      <CategoriesContent />
    </Suspense>
  );
}
