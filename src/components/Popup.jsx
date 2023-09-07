import { useRecoilState } from "recoil";
import "../styles/PopUp.css";
import { cartNumber } from "../GlobalStates.jsx";
import { Icon } from "@iconify/react";

function Popup(props) {
  const [cartnum, setCartNum] = useRecoilState(cartNumber);
  const textFromStorage =
    JSON.parse(localStorage.getItem("my-items") || "[]") || [];


  function handleClick() {
    setCartNum(textFromStorage.length + 1);
    localStorage.setItem(
      "my-items",
      JSON.stringify([
        ...textFromStorage,
        { name: props.productname, image: props.image, desc: props.desc, price: props.price},
      ])
    );
  }

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
        <Icon icon="zondicons:close-outline" />
        </button>
        <h1>{props.productname}</h1>
        <p>{props.desc}</p>
        <img src={props.image} />
        <h2>${props.price}</h2>
        <button className="cart-btn" onClick={handleClick}>
          
          Add To Cart
          <Icon icon="tdesign:shop" />
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
