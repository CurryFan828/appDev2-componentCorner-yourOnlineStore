import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import ProductCard from './components/ProductCard'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header storeName="Front Porch Tea"/>

      <Hero
        title="Welcome to Front Porch Tea"
        subtitle="Discover the finest teas for every mood"
        ctaText="Shop Now"
        image="https://www.teaforworld.com/wp-content/uploads/2025/05/yall-sweet-tea.jpeg"
      />

      <div className="product-list">
        <ProductCard
          name="Green Tea"
          price={4.99}
          image="https://adayincandiland.com/wp-content/uploads/2023/06/1-2.jpg"
          description="A light and refreshing tea packed with antioxidants."
        />

        <ProductCard
          name="Black Tea"
          price={3.99}
          image="https://mehtaperturk.com/wp-content/uploads/2022/04/turkish-tea.jpg"
          description="A bold and classic tea with a rich, strong flavor."
        />

        <ProductCard
          name="Herbal Chamomile Tea"
          price={5.49}
          image="https://cdn.shopify.com/s/files/1/1980/1825/files/uptown-tea-shop-chamomile-tea-cup-93193226-2500.jpg?v=1627569674"
          description="A calming caffeine-free tea perfect for relaxing."
        />
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

