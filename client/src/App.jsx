import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Blog from "./pages/Blog";
import Conatct from "./pages/Conatct";
import Cart from "./pages/Cart";
import AddressForm from "./pages/AddressForm";
import MyOrder from "./pages/MyOrder";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
const App = () => {
  return (
    <main className="max-padd-container overflow-hidden text-textColor">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Conatct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/address-form" element={<AddressForm />} />
        <Route path="/my-order" element={<MyOrder />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
