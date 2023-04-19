import React, { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "@mui/material";
import { UserData } from "../../context/UserContext";
import "../../../index.css";
import "./navbar.css";

const Navbar = () => {
  const { userstate, userdispatch } = useContext(UserData);

  useEffect(() => {}, [userstate.theme]);

  return (
    <>
      <div className={`${userstate.theme} div-container`}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/template">Template</Link>
        </li>
        <li>
          <Button
            variant="outlined"
            onClick={() => {
              userdispatch({ type: "CHANGE_THEME" });
            }}
          >
            ☀ 🌙
          </Button>
        </li>
      </div>
      <br></br>

      <Outlet />
    </>
  );
};

export default Navbar;
