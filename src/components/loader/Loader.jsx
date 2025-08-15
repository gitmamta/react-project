// components/Loader.jsx
import React from "react";
import loadingImg from "../loader/loadingImg.gif";
export default function Loader() {
  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <img src={loadingImg} alt="Loading..." width="200" />
    </div>
  );
}

