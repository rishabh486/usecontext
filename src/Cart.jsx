import { useCart } from "./cart-context";
export default function Cart() {
  const { items } = useCart();
  return <h1> items in cart {items}</h1>;
}
