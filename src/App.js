import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import SingleBlog from "./pages/SingleBlog";
import TermAndCondition from "./pages/TermAndCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/term-and-condition" element={<TermAndCondition />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
