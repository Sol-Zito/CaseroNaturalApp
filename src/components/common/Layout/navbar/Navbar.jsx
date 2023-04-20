import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import styles from "./navbar.module.css";
import { UserData } from "../../../context/UserContext";

const Navbar = () => {
  const { userstate, userdispatch } = useContext(UserData);

  useEffect(() => {}, [userstate.theme]);

  return (
    <div className={`${userstate.theme} ${styles.divContainer}`}>
      <Link to="/home">
        <Button>Home</Button>
      </Link>

      <Link to="/account">
        <Button>Mi cuenta</Button>
      </Link>

      <Link to="/template">
        <Button>Template</Button>
      </Link>

      <Button
        onClick={() => {
          userdispatch({ type: "CHANGE_THEME" });
        }}
      >
        ☀ 🌙
      </Button>
    </div>
  );
};

export default Navbar;
