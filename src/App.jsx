import { Navigate, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/404";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductProvider from "./context/ProductContext";
function App() {
  return (
    <ProductProvider>
      <Routes>
        <Route index element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </ProductProvider>
  );
}

export default App;
