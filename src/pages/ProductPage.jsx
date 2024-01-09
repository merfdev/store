import { useProducts } from "../context/ProductContext";

function ProductPage() {
  const products = useProducts();
  console.log(products);
  return <div>ProductPage</div>;
}

export default ProductPage;
