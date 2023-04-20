import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserData } from "../../context/UserContext";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const Layout = () => {
  const { userstate } = useContext(UserData);
  return (
    <div className={`${userstate.theme} App`}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
