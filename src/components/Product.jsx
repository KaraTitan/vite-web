import { useState } from "react";
import { motion } from "framer-motion";

function Product(props) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      className="card"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img src={props.img} onClick={() => setButtonPopUp(true)} />
      <h2>{props.produtName}</h2>
      {isHovering && <h3>{props.productPrice}</h3>}
    </motion.div>
  );
}

export default Product;
