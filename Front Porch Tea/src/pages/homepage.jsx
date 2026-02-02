// src/pages/HomePage.jsx
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

function HomePage({ products, addToCart }) {
  return (
    <div className="page home-page">
      <Hero
        title="Welcome to Front Porch Tea"
        subtitle="Discover the finest teas for every mood"
        ctaText="Shop Now"
        image="https://www.teaforworld.com/wp-content/uploads/2025/05/yall-sweet-tea.jpeg"
      />

      <section>
        <h1 className="section-title">Our Fan Favorite Teas</h1>
        <div className="product-list">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
              addToCart={() => addToCart(product)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}


export default HomePage;
