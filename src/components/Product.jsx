import { useState } from "react";
function Product(props) {
  return (
    <div className="card">
      <img src={props.img} />
      <h2>{props.produtName}</h2>
    </div>
  );
}

export default Product;
