import { useEffect, useState } from "react";
import "./loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <p className="mt-4">Iltimos kuting..</p>
    </div>
  );
};

export default Loader;
