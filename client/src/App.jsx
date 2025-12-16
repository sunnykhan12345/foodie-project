import React from "react";
import {  Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import ForgetPassword from "./pages/ForgetPassword";
const App = () => {
  return (
    <main className="max-padd-container overflow-hidden text-textColor">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
