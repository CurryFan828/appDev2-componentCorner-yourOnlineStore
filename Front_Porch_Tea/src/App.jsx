import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { v4 as uuidv4 } from "uuid";

// Pages
import HomePage from "./pages/homepage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  // State for cart
  const [cart, setCart] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, { ...product, cartId: uuidv4() }]);
  };

  const removeFromCart = (cartId) => {
    setCart((prevCart) => prevCart.filter((item) => item.cartId !== cartId));
  };

  // Calculate total price for cart
  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  // Product array
  const products = [
    { id: 1, name: "Sweet Tea", price: 3.99, image: "https://southernbite.com/wp-content/uploads/2024/08/Southern-Sweet-Tea.jpg", description: "Classic southern-style sweet tea, refreshing and smooth." },
    { id: 2, name: "Strawberry Lemonade Tea", price: 4.49, image: "https://www.fifteenspatulas.com/wp-content/uploads/2018/05/Strawberry-Iced-Tea-Fifteen-Spatulas-8-640x427.jpg", description: "A fruity blend of strawberries and lemon with a tea base." },
    { id: 3, name: "Peach Iced Tea", price: 4.29, image: "https://media.istockphoto.com/id/533553845/photo/two-glasses-of-sweet-peach-iced-tea.jpg?s=612x612&w=0&k=20&c=IvsmjAnnbRemBI3PYHgpC8TDtK88vL_B1yXsdphQnEA=", description: "Sweet peach flavor mixed with refreshing iced tea." },
    { id: 4, name: "Mint Green Tea", price: 4.99, image: "https://www.themidwestkitchenblog.com/wp-content/uploads/2022/11/green-tea-bags-with-fresh-mint.jpg", description: "Refreshing green tea with a hint of cool mint." },
    { id: 5, name: "Hibiscus Tea", price: 5.19, image: "https://magicalbutter.com/cdn/shop/articles/Website_Recipe_Hibiscus_Iced_Tea_Spakler_a842334f-0a80-4584-8ccf-39443ff776b7.jpg?v=1692647211", description: "Tart and fruity hibiscus tea, served hot or iced." },
    { id: 6, name: "Lemon Ginger Tea", price: 4.79, image: "https://www.cubesnjuliennes.com/wp-content/uploads/2023/02/Lemon-Ginger-Tea-1.jpg", description: "Zesty lemon with warming ginger for a soothing cup." },
    { id: 7, name: "Blueberry Green Tea", price: 4.59, image: "https://thedizzycook.com/wp-content/uploads/2025/08/Blueberry-Iced-Tea-Main.jpg", description: "A refreshing blend of blueberry and green tea." },
    { id: 8, name: "Chai Tea", price: 5.49, image: "https://www.allrecipes.com/thmb/T4pRvsbFTLwv7nMHsI9XZ0NXv7Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ChaiTeaMixRecipe_46777_Beauty_4x3_0232-53ee714b5ec240388d31a0b525d4ef04.jpg", description: "Spiced chai tea with a rich and creamy flavor." },
    { id: 9, name: "Raspberry Iced Tea", price: 4.39, image: "https://www.forkinthekitchen.com/wp-content/uploads/2022/09/220818.raspberry.iced_.tea-2213-683x1024.jpg", description: "Sweet and tangy raspberry flavor in a refreshing iced tea." },
  ];

  return (
    <BrowserRouter>
      {/* Header will be shown on all pages */}
      <Header storeName="Front Porch Tea" cart={cart} removeFromCart={removeFromCart} cartTotal={cartTotal} />

      {/* Routes define which page component to render */}
      <Routes>
        <Route path="/" element={<HomePage products={products} addToCart={addToCart} />} />
        <Route path="/products" element={<ProductsPage products={products} addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetailsPage products={products} addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>

      {/* Footer shown on all pages */}
      <Footer
        storeName="Front Porch Tea"
        address="123 Tea Lane, Cozy Town, USA"
        phone="(555) 123-4567"
        email="info@frontporchtea.com"
      />
    </BrowserRouter>
  );
}

export default App;
