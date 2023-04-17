import React, { useContext } from "react";
import { InfoContext } from "../../context/InfoContext";
import CardProducto from "./CardProducto";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CardContainerProduct = ({ menues }) => {
  const { dispatch } = useContext(InfoContext);

  const addToday = (menu) => {
    dispatch({ type: "ADD_MENUE", payload: menu });
  };

  return (
    <>
      <Link to="/newProduct">
        <Button>Nuevo producto</Button>
      </Link>
      <h2>Menues para elegir:</h2>
      {menues.map((menu) => (
        <CardProducto key={menu.id} producto={menu} addToday={addToday} />
      ))}
    </>
  );
};

export default CardContainerProduct;
