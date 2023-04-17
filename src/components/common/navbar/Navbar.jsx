import React from "react";
import { Link, Outlet } from "react-router-dom";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "2px",
          justifyContent: "flex-end",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <li>
          <IconButton color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/template">Template</Link>
        </li>
      </div>
      <br></br>

      <Outlet />
    </>
  );
};

export default Navbar;
