import React from "react";
import { Link } from "react-router-dom";

const CardComponent = ({ product, cart, setCart }) => {
  function addToCart(id, price, title, image) {
    const newItem = {
      prodId: id,
      prodPrice: price,
      prodTitle: title,
      prodImage: image,
      prodQty: 1,
    };
    cart.some((item) => {
      return item.prodId.toString() === id.toString();
    })
      ? setCart(
          cart.map((item) => {
            if (item.prodId.toString() === id.toString()) {
              return { ...item, prodQty: item.prodQty + 1 };
            } else {
              return item;
            }
          })
        )
      : setCart([...cart, { ...newItem }]);
  }
  function removeFromCart(id) {
    cart.map((item) => {
      if (item.prodId.toString() === id.toString()) {
        if (item.prodQty > 1) {
          setCart(
            cart.map((item) => {
              if (item.prodId.toString() === id.toString()) {
                return { ...item, prodQty: item.prodQty - 1 };
              } else {
                return item;
              }
            })
          );
        } else {
          setCart(
            cart.filter((item) => {
              return Number(item.prodId) !== Number(id);
            })
          );
        }
      }
    });
  }
  return (
    <div
      className="card"
      key={product.id}>
      <Link
        to={`/e-commerce-website/${product.category}/${product.id}`}
        style={{ textDecoration: "none" }}>
        <img
          src={product.image}
          className="card-image"
          width="250px"
          height="250px"
        />
      </Link>

      <div className="title-add-btn">
        <Link
          to={`/e-commerce-website/${product.category}/${product.id}`}
          style={{ textDecoration: "none", padding: "0px" }}>
          <p className="product-name">
            {product.title.length > 25
              ? `${product.title.slice(0, 30)}...`
              : product.title}
          </p>
        </Link>
        <div className="CTA-price">
          <span className="card-price">{product.price}$</span>
          <span className="card-CTA">
            <button
              onClick={() => {
                addToCart(
                  product.id,
                  product.price,
                  product.title,
                  product.image
                );
              }}
              className="add-item-btn"
              type="button">
              +
            </button>
            <span className="items-number">
              {cart.some((item) => {
                return item.prodId.toString() === product.id.toString();
              })
                ? cart.map((item) => {
                    if (item.prodId.toString() === product.id.toString()) {
                      return Number(item.prodQty);
                    }
                  })
                : 0}
            </span>
            <button
              onClick={(e) => {
                removeFromCart(product.id);
              }}
              className="subtract-item-btn"
              type="button">
              -
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};
export default CardComponent;
