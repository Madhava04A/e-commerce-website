import React from "react";
import CardComponent from "../components/cardComponent";
import { memo } from "react";

const Electronincs = ({ products, loading, cart, setCart }) => {
  const electronincsProducts = products.filter((prod) => {
    return prod.category === "electronics";
  });

  const electronicsList = electronincsProducts.map((product) => {
    return (
      <CardComponent
        product={product}
        cart={cart}
        setCart={setCart}
      />
    );
  });

  return (
    <>
      {!loading ? (
        electronicsList
      ) : (
        <p
          style={{
            textAlign: "center",
            margin: "2rem",
            fontSize: "1.5rem",
            fontWeight: "600",
          }}>
          ...Loading
        </p>
      )}
    </>
  );
};

export default memo(Electronincs);
