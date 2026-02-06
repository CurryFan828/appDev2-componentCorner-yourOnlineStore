import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ id, name, price, image, description, addToCart }) {
  return (
    <div className="product-card">
      <Link to={`/product/${id}`} className="product-link">
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p className="price">${price}</p>
        <p className="description">{description}</p>
      </Link>
      <button className="add-to-cart-btn" onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
