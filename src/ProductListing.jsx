import { useCart } from "./cart-context";
import React from "react";
export default function ProductListing() {
  const { setItems } = useCart();
  function clickHandler() {
    setItems((items) => items + 1);
  }
  return ["1", "2", "3", "4"].map((item) => (
    <div>
      <h2 key={item.id}>product {item}</h2>
      <button onClick={clickHandler}>Add to cart</button>
    </div>
  ));
}
