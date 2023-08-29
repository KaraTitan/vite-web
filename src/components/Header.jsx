import React from "react";
import { Icon } from "@iconify/react";
import { atom, useRecoilState } from "recoil";

const cartNumber = atom({
  key: "cartState",
  default: 0,
});
function Header() {
  const [cartnum, setCartNum] = useRecoilState(cartNumber);

  return (
    <>
      <div className="topnav">
        <h1>Website</h1>
        <a className="active" href="home">
          Home
        </a>
        <a href="contact">Contact</a>
        <a href="about">About</a>
        <a href="cart" style={{ float: "right" }} className="count">
          <Icon icon="mi:shopping-cart" />
          {cartnum}
        </a>
      </div>
      <div class="dropdown">
        <button class="dropbtn" for="btnControl">
          <Icon icon="material-symbols:list" />
        </button>
        <div class="dropdown-content">
          <a href="Home">Home</a>
          <a href="contact">Contact</a>
          <a href="about">About</a>
          <a href="cart">
            <Icon icon="mi:shopping-cart" />
            {cartnum}
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
