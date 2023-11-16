import React from "react";
import { memo } from "react";
import CardComponent from "../components/cardComponent";

const WomenCategory = ({ loading, products, cart, setCart }) => {
  const womenList = products.filter((prod) => {
    return prod.category === "women's clothing";
  });

  const list = womenList.map((product) => {
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
        list
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

export default memo(WomenCategory);
