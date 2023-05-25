import React, { useContext } from "react";
import styled from "./footer.module.css";
import "../../../../index.css";
import "../../../../App.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { UserData } from "../../../context/UserContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { userstate } = useContext(UserData);
  return (
    <footer className={`${styled.lista} ${userstate.theme}`}>
      <Link>
        <WhatsAppIcon />
      </Link>
      <Link>
        <InstagramIcon />
      </Link>
      <Link>
        <FacebookIcon />
      </Link>
      <Link>
        <AlternateEmailIcon />
      </Link>
    </footer>
  );
};

export default Footer;
