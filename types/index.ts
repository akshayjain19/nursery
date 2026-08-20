export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description?: string;
  scientificName?: string;
  careLevel?: string;
  medicinal?: boolean;
}

export interface FilterState {
  search: string;
  category: string;
  priceRange: [number, number];
  sortBy: 'relevance' | 'price-low' | 'price-high' | 'alphabetical';
}

export type Category =
  | 'Indoor Plants'
  | 'Outdoor Plants'
  | 'Flowering Plants'
  | 'Fruit Plants'
  | 'Pots & Planters'
  | 'Seeds'
  | 'Soil & Compost';

export const CATEGORIES: Category[] = [
  'Indoor Plants',
  'Outdoor Plants',
  'Flowering Plants',
  'Fruit Plants',
  'Pots & Planters',
  'Seeds',
  'Soil & Compost',
];
