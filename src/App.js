import "./App.css";
import { React, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar";
import Home from "./pages/home";
import MenCategory from "./pages/menCategory";
import WomenCategory from "./pages/womenCategory";
import Electronics from "./pages/electronics";
import Jewellery from "./pages/jewellery";
import ProductDetails from "./pages/productDetails";
import Cart from "./pages/cart";
import Profile from "./pages/profile";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  let totalItems = 0;
  cart.map((item) => {
    return (totalItems += Number(item.prodQty));
  });

  useEffect(() => {
    async function api() {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      setItems(products);
    }
    api();
    setIsLoading(!isLoading);
  }, []);

  return (
    <div className="App">
      <Navbar totalItems={totalItems} />
      {!isLoading && (
        <main className="main-content">
          <Routes>
            <Route
              path="/e-commerce-website/"
              element={
                <Home
                  products={items}
                  loading={isLoading}
                  cart={cart}
                  setCart={setCart}
                />
              }
            />
            <Route
              path="/e-commerce-website/men-clothing"
              element={
                <MenCategory
                  loading={isLoading}
                  products={items}
                  cart={cart}
                  setCart={setCart}
                />
              }
            />
            <Route
              path="/e-commerce-website/women-clothing"
              element={
                <WomenCategory
                  loading={isLoading}
                  products={items}
                  cart={cart}
                  setCart={setCart}
                />
              }
            />
            <Route
              path="/e-commerce-website/electronics"
              element={
                <Electronics
                  loading={isLoading}
                  products={items}
                  cart={cart}
                  setCart={setCart}
                />
              }
            />
            <Route
              path="/e-commerce-website/jewellery"
              element={
                <Jewellery
                  loading={isLoading}
                  products={items}
                  cart={cart}
                  setCart={setCart}
                />
              }
            />
            <Route
              path="/e-commerce-website/:category/:prodId"
              element={
                <ProductDetails
                  loading={isLoading}
                  products={items}
                  cart={cart}
                  setCart={setCart}
                />
              }
            />
            <Route
              path="/e-commerce-website/cart"
              element={
                <Cart
                  loading={isLoading}
                  products={items}
                  cart={cart}
                />
              }
            />
            <Route
              path="/e-commerce-website/profile"
              element={
                <Profile
                  loading={isLoading}
                  products={items}
                  cart={cart}
                />
              }
            />
          </Routes>
        </main>
      )}
    </div>
  );
}

export default App;
