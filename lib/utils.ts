import { Product, FilterState } from '@/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getWhatsAppLink(product: Product, phoneNumber = '+918305449559'): string {
  const message = `Hi, I am interested in:\n\n${product.name}\n\nPrice: ₹${product.price}`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  }).format(price);
}

export function filterProducts(
  products: Product[],
  filters: Partial<FilterState>
): Product[] {
  let filtered = [...products];

  // Filter by category
  if (filters.category && filters.category !== 'All') {
    filtered = filtered.filter(p => p.category === filters.category);
  }

  // Filter by price range
  if (filters.priceRange) {
    const [min, max] = filters.priceRange;
    filtered = filtered.filter(p => p.price >= min && p.price <= max);
  }

  // Sort
  if (filters.sortBy) {
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'alphabetical':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
  }

  return filtered;
}

export function getPriceRange(products: Product[]): [number, number] {
  const prices = products.map(p => p.price);
  return [Math.min(...prices), Math.max(...prices)];
}
