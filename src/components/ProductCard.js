import "../assets/ProductCard.css";
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [showAnimation, setShowAnimation] = useState(false);

  if (!product) {
    return <div className="product-card">No product data</div>;
  }

  const handleAdd = () => {
    addToCart(product);
    setShowAnimation(true);
    setTimeout(() => setShowAnimation(false), 1500); // Hide after 1.5s
  };

  return (
    <div className="card" style={{ borderRadius: "40px", position: "relative" }}>
      <img
        src={product.image}
        alt={product.name}
        className="card-img"
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "30px",
        }}
      />
      <h3>{product.name}</h3>
      <p className="price">${product.price}</p>
      <button
        onClick={handleAdd}
        className="bbtn"
        style={{
          backgroundColor: "rgb(250, 235, 215)",
          margin: "50px",
          padding: "10px",
          border: "1px solid hsl(0,1%,84%)",
          borderRadius: "30px",
          color: "black",
          fontFamily: "inherit",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>

      {showAnimation && (
        <div className="added-animation">✨ Added to Cart! ✨</div>
      )}
    </div>
  );
};

export default ProductCard;
