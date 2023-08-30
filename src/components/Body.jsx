import Product from "./Product";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Popup from "./Popup";
import { useState } from "react";
import db from "../data/db.json";

function Body() {
  const [buttonPopup, setButtonPopUp] = useState(false);
  const [image, setImage] = useState("");
  const [productname, setProductName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  function handleClick(img, name, description, price) {
    setButtonPopUp(true);
    setImage(img);
    setProductName(name);
    setDesc(description);
    setPrice(price);
  }

  return (
    <>
      {/* <Reviews /> */}
      <div className="body">
        <Popup trigger={buttonPopup} setTrigger={setButtonPopUp}>
          <h1>{productname}</h1>
          <p>{desc}</p>
          <img src={image} />
          <h2>${price}</h2>
        </Popup>
        <Slide
          indicators={true}
          pauseOnHover={true}
          easing="cubic"
          infinite={true}
          transitionDuration={500}
          autoplay={true}

        >
          {db.map((product) => (
            <div
              key={product}
              className="each-slide-effect"
              onClick={() =>
                handleClick(
                  product.img,
                  product.name,
                  product.desc,
                  product.price
                )
              }
            >
              <Product produtName={product.name} img={product.img} />
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
}

export default Body;
