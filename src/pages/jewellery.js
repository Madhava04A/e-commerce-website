import React from "react";
import { memo } from "react";
import CardComponent from "../components/cardComponent";

const Jewellery = ({ products, loading, cart, setCart }) => {
  const jewelleryProducts = products.filter((prod) => {
    return prod.category === "jewelery";
  });

  const jewelleryList = jewelleryProducts.map((product) => {
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
        jewelleryList
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

export default memo(Jewellery);
