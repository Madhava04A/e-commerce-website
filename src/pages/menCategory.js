import CardComponent from "../components/cardComponent";
import { memo } from "react";

const MenCategory = ({ products, loading, cart, setCart }) => {
  const menProducts = products.filter((prod) => {
    return prod.category === "men's clothing";
  });

  const menList = menProducts.map((product) => {
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
        menList
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

export default memo(MenCategory);
