import { useParams } from "react-router-dom";

function ProductDetailsPage({ products, addToCart }) {
  const { id } = useParams(); // get id from URL
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Tea not found!</p>;

  return (
    <div style={{ padding: "20px", paddingTop: "calc(80px + 24px)", textAlign: "center" }}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: "360px", height: "360px", objectFit: "cover", borderRadius: "12px", maxWidth: "90%" }} />
      <p style={{ fontWeight: "bold", marginTop: "10px" }}>${product.price.toFixed(2)}</p>
      <p>{product.description}</p>
      <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductDetailsPage;
