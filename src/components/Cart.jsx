import { useState } from "react";
import "../styles/Cart.css";
import { useRecoilState } from "recoil";
import { cartNumber } from "../GlobalStates.jsx";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
function Cart() {
  const [cartnum, setCartNum] = useRecoilState(cartNumber);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("my-items") || "[]") || []
  );

  function handleDelete(index) {
    const updated = cart.filter((_, product) => product !== index);
    localStorage.setItem("my-items", JSON.stringify(updated));
    setCart(updated);
    setCartNum(updated.length);
  }

  return (
    <>
      <div className="cartbody">
        <Link to="/vite-web/checkout" className="checkout-btn">Check Out</Link>
        {cart.map((product, index) => (
          <div className="cartproduct" key={index}>
            <h1>{product.name}</h1>
            <h2>${product.price}</h2>
            <img src={product.image} />
            <p>{product.desc}</p>
            <button onClick={() => handleDelete(index)}>
              <Icon icon="material-symbols:delete-outline" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart;
