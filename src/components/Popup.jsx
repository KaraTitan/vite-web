import { atom, useRecoilState } from "recoil";
const cartNumber = atom({
  key: "cartState",
  default: 0,
});
function Popup(props) {
  const [cartnum, setCartNum] = useRecoilState(cartNumber);
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          X
        </button>
        {props.children}
        <button className="cart-btn" onClick={() => setCartNum(cartnum + 1)}>
          ADD TO CART
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
