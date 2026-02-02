// src/pages/ProductsPage.jsx
import ProductCard from "../components/ProductCard";

function ProductsPage({ products, addToCart }) {
  return (
    <div style={{ paddingTop: "calc(80px + 24px)" }}>
      <h1 className="section-title">All Teas</h1>
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
    </div>
  );
}

export default ProductsPage;
