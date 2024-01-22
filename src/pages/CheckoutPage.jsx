import { useCart } from "../context/CartContext";

function CheckoutPage() {
  const [state, dispatch] = useCart();
  return <div>CheckoutPage</div>;
}

export default CheckoutPage;
