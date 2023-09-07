import { useState } from "react";
import "../styles/Cart.css";
import { useRecoilState } from "recoil";
import { cartNumber } from "../GlobalStates.jsx";
import { Icon } from "@iconify/react";
function Cart() {
  const [cartnum, setCartNum] = useRecoilState(cartNumber);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("my-items") || "[]") || []
  );

  function handleDelete(prod) {
    const updated = cart.filter((product) => {
      return prod.name !== product.name;
    });
    localStorage.setItem("my-items", JSON.stringify(updated));
    setCart(updated);
    setCartNum(updated.length);
  }

  return (
    <>
      <div className="cartbody">
        <form action="checkout" className="checkout-btn">
          <button className="checkout-btn">Check Out</button>
        </form>

        {cart.map((product) => (
          <div className="cartproduct" key={product}>
            <h1>{product.name}</h1>
            <h2>${product.price}</h2>
            <img src={product.image} />
            <p>{product.desc}</p>
            <button onClick={() => handleDelete(product)}>
              <Icon icon="material-symbols:delete-outline" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart;
