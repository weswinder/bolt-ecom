export interface Product {
  id: string;
  title: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}