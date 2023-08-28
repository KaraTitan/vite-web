import Product from "./Product";
import "react-slideshow-image/dist/styles.css";
import Popup from "./Popup";
import { useState } from "react";
import db from "../data/db.json";
import { motion } from "framer-motion";

function LowerBody() {
  const [buttonPopup, setButtonPopUp] = useState(false);
  const [image, setImage] = useState("");
  const [productname, setProductName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  const [search, setSearch] = useState("");

  function handleClick(img, name, description, price) {
    setButtonPopUp(true);
    setImage(img);
    setProductName(name);
    setDesc(description);
    setPrice(price);
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        className="LowerBodySearchBar"
        onChange={(e) => setSearch(e.target.value)}
      ></input>

      <div className="lowerbody">
        <Popup trigger={buttonPopup} setTrigger={setButtonPopUp}>
          <h1>{productname}</h1>
          <p>{desc}</p>
          <img src={image} />
          <h2>${price}</h2>
        </Popup>

        {db
          .filter((product) => {
            return search.toLowerCase() === ""
              ? product
              : product.name.toLowerCase().includes(search);
          })
          .map((product) => (
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              layout
              key={product.name}
              className="lowerbody-inner"
              onClick={() =>
                handleClick(
                  product.img,
                  product.name,
                  product.desc,
                  product.price
                )
              }
            >
              <Product img={product.img} productPrice={product.price}/>
            </motion.div>
          ))}
      </div>
    </>
  );
}

export default LowerBody;
