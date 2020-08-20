import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <p className="madeBy">
        {" "}
        Made with{" "}
        <span role="img" aria-label="img">
          💖
        </span>{" "}
        by <span className="org"> ARM Enterprises</span> .
      </p>
      <p> © All rights reserved by ShahanaMart 2020 </p>
    </footer>
  );
};
export default Footer;
