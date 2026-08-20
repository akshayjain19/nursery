'use client';

import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturesBar from '@/components/FeaturesBar';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import PromoBanner from '@/components/PromoBanner';
import InstagramFeed from '@/components/InstagramFeed';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/Button';
import products from '@/data/products.json';
import Link from 'next/link';
import { motion } from 'framer-motion';

const featuredCategories = [
  'Indoor Plants',
  'Succulents',
  'Creepers & Hanging Plants',
  'Garden Accessories',
  'Seasonal Plants',
];

export default function Home() {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <Navbar />
      <Hero />
      <FeaturesBar />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Shop by Category"
            subtitle="Browse through our curated collection of plants and garden essentials."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
            {featuredCategories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <CategoryCard name={category} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Best Sellers"
            subtitle="Our most loved products by customers."
          />
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/categories">
              <Button variant="primary" size="lg">
                View All Plants
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <PromoBanner />
      <InstagramFeed />
      <Footer />
    </div>
  );
}
