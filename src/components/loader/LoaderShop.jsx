// components/Loader.jsx
import React from "react";
import lazyImg from "../../assets/imgsrc/lazyImg.gif";
export default function LoaderShop() {
  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <img src={lazyImg} alt="Loading..." width="500" />
    </div>
  );
}

