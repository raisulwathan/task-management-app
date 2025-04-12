export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 599000,
    image: "/images/wireless.jpg",
    description: "High-quality wireless headphones with noise cancellation.",
  },
  {
    id: 2,
    name: "Gaming Mouse",
    price: 299000,
    image: "/images/mouse.jpg",
    description: "Ergonomic gaming mouse with customizable buttons.",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 899000,
    image: "/images/watched.jpg",
    description: "Smart watch with fitness tracker and notifications.",
  },
];
