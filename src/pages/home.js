import React from "react";
import CardComponent from "../components/cardComponent";

const Home = ({ products, loading, cart, setCart }) => {
  const list = products.map((product) => {
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

export default Home;
