'use client';

import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import { CATEGORIES } from '@/types';
import products from '@/data/products.json';
import businessConfig from '@/config/business.json';
import { motion } from 'framer-motion';

export default function Home() {
  // Get featured/best-selling products
  const featuredProducts = products.slice(0, 6);

  // Count products by category
  const categoryCounts = CATEGORIES.map((category) => ({
    category,
    count: products.filter((p) => p.category === category).length,
  }));

  // Category emojis from config
  const categoryEmojis: Record<string, string> = businessConfig.categories.reduce(
    (acc, cat) => ({ ...acc, [cat.name]: cat.emoji }),
    {}
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Featured Categories Section */}
      <section className="py-20 bg-warmwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-4">
              Explore Categories
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              Browse through our curated collection of plants and garden essentials.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryCounts.map((cat, index) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CategoryCard
                  name={cat.category}
                  emoji={categoryEmojis[cat.category] || '🌿'}
                  count={cat.count}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-4">
              Best Sellers
            </h2>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              Our most loved products by customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-warmwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-4">
              Why Choose Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessConfig.whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white rounded-xl p-6 text-center shadow-soft hover:shadow-soft-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-display font-semibold text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to Green Your Space?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Browse our complete catalogue or chat with us on WhatsApp for personalized recommendations.
          </p>
          <button
            onClick={() => {
              window.open('https://wa.me/919999999999', '_blank');
            }}
            className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Chat on WhatsApp 💬
          </button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
