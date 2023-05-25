import React, { useContext } from "react";
import { InfoContext } from "../../context/InfoContext";
import CardProducto from "./CardProducto";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { UserData } from "../../context/UserContext";
import styled from "../../pages/Home/home.module.css";
import Swal from "sweetalert2";

const CardContainerProduct = ({ menues }) => {
  const { dispatch } = useContext(InfoContext);
  const { userstate } = useContext(UserData);
  const addToday = (menu) => {
    dispatch({ type: "ADD_MENUE", payload: menu });
    Swal.fire(`${menu.name} was added`);
  };

  return (
    <div className={`${userstate.theme} ${styled.h1H}`}>
      <Link to="/newProduct">
        <Button variant="outlined">New product</Button>
      </Link>
      <h2>Menues to select:</h2>
      {menues.map((menu) => (
        <CardProducto key={menu.id} product={menu} addToday={addToday} />
      ))}
    </div>
  );
};

export default CardContainerProduct;
