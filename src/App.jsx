import React from "react";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Cart from "./pages/Cart/Cart";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
