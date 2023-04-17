import React, { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "@mui/material";
import "../../../index.css";
import "./navbar.css";
import { InfoContext } from "../../context/InfoContext";
import { UserData } from "../../context/UserContext";

const Navbar = () => {
  const { dispatch } = useContext(InfoContext);
  const { userstate } = useContext(UserData);

  useEffect(() => {}, [userstate.theme]);

  return (
    <>
      <div className={`${userstate.theme} div-container`}>
        {/* <li>
          <IconButton color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
        </li> */}
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
              dispatch({ type: "CHANGE_THEME" });
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
