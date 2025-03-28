// lib/preload.ts
export function preloadData() {
    if (typeof window === 'undefined') {
      const categories = require('@/data/categories.json');
      return { categories };
    }
    return null;
  }