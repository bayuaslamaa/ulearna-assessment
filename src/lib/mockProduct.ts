// lib/mockProduct.ts

export const product = {
    id: 'prod-1',
    name: 'Puffer Jacket',
    basePrice: 100, // fallback if needed
    variants: [
      {
        name: 'Mustard Yellow',
        price: 105,
        images: ['/images/jacket-mustard.webp'],
        stock: 3,
      },
      {
        name: 'Olive Green',
        price: 110,
        images: ['/images/jacket-olive.webp'],
        stock: 5,
      },
      {
        name: 'Burnt Orange',
        price: 115,
        images: ['/images/jacket-burnt-orange.webp'],
        stock: 8,
      },
    ],
    description:
      'This puffer jacket is lightweight yet warm, with water-resistant material and stylish colors. Ideal for cold-weather adventures.',
  }
  