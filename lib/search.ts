import Fuse from 'fuse.js';
import { Product } from '@/types';

export function createSearchIndex(products: Product[]) {
  const fuse = new Fuse(products, {
    keys: ['name', 'category', 'description'],
    threshold: 0.3,
  });
  return fuse;
}

export function searchProducts(
  products: Product[],
  query: string
): Product[] {
  if (!query.trim()) return products;

  const fuse = createSearchIndex(products);
  const results = fuse.search(query);
  return results.map(result => result.item);
}
