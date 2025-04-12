import { Product } from "../data/Products";

const CART_KEY = "shopping_cart";

export const getCartItems = (): Product[] => {
  const items = localStorage.getItem(CART_KEY);
  return items ? JSON.parse(items) : [];
};

export const addToCart = (product: Product) => {
  const cart = getCartItems();
  const isExist = cart.some((item) => item.id === product.id);

  if (!isExist) {
    cart.push(product);
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }
};

export const removeFromCart = (id: number) => {
  const cart = getCartItems().filter((item) => item.id !== id);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const clearCart = () => {
  localStorage.removeItem(CART_KEY);
};
