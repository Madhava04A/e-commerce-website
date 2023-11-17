import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { memo } from "react";
import { useAuth } from "./auth";
import "./productDetails.css";

const ProductDetails = ({ products, loading, cart, setCart }) => {
  const auth = useAuth();
  const { category, prodId } = useParams();
  const product = products.find((item) => {
    return (
      item.id.toString() === prodId && item.category.toString() === category
    );
  });
  function addToCart(id, price, title, image) {
    if (auth.user) {
      let qty = 1;
      setCart([
        ...cart,
        {
          prodId: id,
          prodPrice: price,
          prodTitle: title,
          prodImage: image,
          prodQty: qty,
        },
      ]);
    } else {
      navigate("/e-commerce-website/login");
    }
  }
  const navigate = useNavigate();
  return (
    <div className="section">
      <button
        type="button"
        className="back-btn"
        onClick={() => {
          navigate(-1);
        }}>
        <span id="arrow">&#8678; </span> back
      </button>
      <div className="productdetails-container">
        <img
          src={product.image}
          className="product-details-image"
        />
        <div className="product-details">
          <p className="product-title">{product.title}</p>
          <div className="ratings">
            <p className="reviews-rate">
              {"Ratings:  "}
              {product.rating.rate}&#127775;
            </p>
            <p className="reviews-count">
              {product.rating.count}&#128101;{"   "} Reviews
            </p>
          </div>
          <p className="product-description">{product.description}</p>
          <div className="price-CTA-container">
            <span className="price">{product.price}$</span>
            <button
              type="button"
              onClick={() => {
                addToCart(
                  product.id,
                  product.price,
                  product.title,
                  product.image
                );
              }}
              className="product-page-btn">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductDetails);
