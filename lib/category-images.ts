import products from '@/data/products.json';

const categoryImageMap: Record<string, string> = {};

for (const product of products) {
  if (!categoryImageMap[product.category]) {
    categoryImageMap[product.category] = product.image;
  }
}

export function getCategoryImage(category: string): string {
  return categoryImageMap[category] ?? '/images/monstera.jpg';
}
