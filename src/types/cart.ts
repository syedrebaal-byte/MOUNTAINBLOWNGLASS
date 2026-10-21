import { Product } from '../data/products';

export interface CartItem {
  product: Product;
  quantity: number;
  engraving?: string;
  selectedColorway?: string;
}

export interface OrderDetails {
  orderId: string;
  date: string;
  customerName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  deliveryMethod: string;
}
