import React from "react";
import styled from "./footer.module.css";

const Footer = () => {
  return (
    <ul className={styled.lista}>
      Contactenos
      <li>WhatsApp</li>
      <li>Instagram</li>
      <li>Facebook</li>
      <li>Gmail</li>
    </ul>
  );
};

export default Footer;
