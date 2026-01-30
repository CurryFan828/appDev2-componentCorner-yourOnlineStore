import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import ProductCard from './components/ProductCard'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import CartItem from "./components/CartItem";
import { v4 as uuidv4 } from "uuid";



function App() {

  // State for cart
  const [cart, setCart] = useState([]);

  // Function to add a tea to the cart
  const addToCart = (product) => {
    setCart([
      ...cart, 
      { ...product, cartId: uuidv4() } // add a unique cartId
    ]);
  };

  // Remove item from cart by filtering out its id
  const removeFromCart = (cartId) => {
    setCart((prevCart) => prevCart.filter((item) => item.cartId !== cartId));
  };

  // Calculate the total price of all items in the cart
  const cartTotal = cart.reduce((total, item) => total + item.price, 0);


  // Tea product array
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
    <>
      <Header storeName="Front Porch Tea" cart={cart} removeFromCart={removeFromCart} cartTotal={cartTotal}/>

      <Hero
        title="Welcome to Front Porch Tea"
        subtitle="Discover the finest teas for every mood"
        ctaText="Shop Now"
        image="https://www.teaforworld.com/wp-content/uploads/2025/05/yall-sweet-tea.jpeg"
      />

      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
            addToCart={() => addToCart(product)} // pass function down
          />
        ))}
      </div>

      <Footer
        storeName="Front Porch Tea"
        address="123 Tea Lane, Cozy Town, USA"
        phone="(555) 123-4567"
        email="info@frontporchtea.com"
      />

    </>
  );
}


export default App;

