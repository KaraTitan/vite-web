import React from "react";
import { Icon } from "@iconify/react";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import '../styles/Header.css';
import { cartNumber } from "../GlobalStates.jsx"
import { useEffect } from "react";


function Header() {
  const [cartnum, setCartNum] = useRecoilState(cartNumber);
  const textFromStorage =
    JSON.parse(localStorage.getItem("my-items") || "[]") || [];

  useEffect(() => {
    setCartNum(textFromStorage.length);
  }, [textFromStorage.length]);

  return (
    <>
      <div className="topnav">
        <h1>Store</h1>
        <Link to="vite-web/" className="active">
          Home
        </Link>
        <Link to="vite-web/contact">Contact</Link>
        <Link to="vite-web/cart" style={{ float: "right" }} className="count">
          <Icon icon="mi:shopping-cart" />
          {cartnum}
        </Link>
      </div>
      <div class="dropdown">
        <button class="dropbtn" for="btnControl">
          <Icon icon="material-symbols:list" />
        </button>
        <div class="dropdown-content">
          <Link to="vite-web/">Home</Link>
          <Link to="vite-web/contact">Contact</Link>
          <Link to="vite-web/cart">
            <Icon icon="mi:shopping-cart" />
            {cartnum}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
