import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { CartProvider } from "./context/CartContext";
import { CustomerProvider } from "./context/CustomerContext";
import { About } from "./pages/About";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <CustomerProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="cart" element={<Cart />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </CustomerProvider>
      </CartProvider>
    </BrowserRouter>
  );
}
