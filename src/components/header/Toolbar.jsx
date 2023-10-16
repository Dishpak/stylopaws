import React from 'react';
import {Link} from "react-router-dom";
import useCartIco from "../../hooks/useCartIco";

const Toolbar = () => {
  const [cartCounter] = useCartIco();

  return (
    <div className="toolbar">
      <a href="#" className="px-2"><i className="fa-solid fa-magnifying-glass"></i></a>
      <Link to={"/cart"} className="px-2"><i className="fa-solid fa-cart-shopping"></i>{cartCounter}</Link>
      <a href="#" className="px-2"><i className="fa-solid fa-right-to-bracket"></i></a>
    </div>
  );
};

export default Toolbar;
