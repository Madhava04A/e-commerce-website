import React from "react";
import { memo } from "react";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

const Cart = ({ cart }) => {
  const auth = useAuth();
  const navigate = useNavigate();
  let totalPrice = 0;

  cart.map((item) => {
    const qtyPrice = item.prodQty * item.prodPrice;
    totalPrice = totalPrice + Number(qtyPrice);
  });

  const cartList = cart.map((item) => {
    return (
      <div
        key={item.prodId}
        className="item-order-details">
        <img
          src={item.prodImage}
          width="40px"
          height="40px"
          className="cart-item item-image"
        />
        <p className="cart-item item-title">{item.prodTitle}</p>
        <p className="cart-item item-qty">{item.prodQty}</p>
        <p className="cart-item item-price">{item.prodPrice}$</p>
      </div>
    );
  });
  return (
    <div className="cartSummary">
      {auth.user ? (
        <div>
          <p
            style={{
              fontSize: "1.75rem",
              fontWeight: "700",
              fontFamily: "Verdana",
            }}>
            Order Summary
          </p>
          <div className="order-summary">
            {cartList.length ? (
              cartList
            ) : (
              <p style={{ fontSize: "1.5rem", textAlign: "center" }}>
                you have not added any item to the cart
              </p>
            )}
          </div>
          <div className="total-cart-CTA">
            <p className="total-cart-price">Total : {totalPrice}</p>

            <button
              className="cart-page-CTA-btn"
              type="button">
              Buy Now
            </button>
          </div>
        </div>
      ) : (
        <button
          style={{
            fontSize: "1rem",
            fontWeight: "700",
            fontFamily: "Verdana",
            backgroundColor: "red",
            marginTop: "2rem",
            color: "white",
            padding: "0.75rem",
            border: "none",
            borderRadius: "10px",
            boxShadow: "3px 3px 3px 3px #252525",
            cursor: "pointer",
          }}
          onClick={() => navigate("/e-commerce-website/login")}>
          Login to view your cart
        </button>
      )}
    </div>
  );
};

export default memo(Cart);
