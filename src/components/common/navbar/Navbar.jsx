import React, { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "@mui/material";
import { UserData } from "../../context/UserContext";
import "../../../index.css";
import styles from "./navbar.module.css";

const Navbar = () => {
  const { userstate, userdispatch } = useContext(UserData);

  useEffect(() => {}, [userstate.theme]);

  return (
    <>
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
      <br></br>

      <Outlet />
    </>
  );
};

export default Navbar;
