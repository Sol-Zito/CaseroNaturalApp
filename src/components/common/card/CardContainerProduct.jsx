import React, { useContext } from "react";
import { InfoContext } from "../../context/InfoContext";
import CardProducto from "./CardProducto";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { UserData } from "../../context/UserContext";

const CardContainerProduct = ({ menues }) => {
  const { dispatch } = useContext(InfoContext);
  const { userstate } = useContext(UserData);
  const addToday = (menu) => {
    dispatch({ type: "ADD_MENUE", payload: menu });
  };

  return (
    <div className={userstate.theme}>
      <Link to="/newProduct">
        <Button>Nuevo producto</Button>
      </Link>
      <h2>Menues para elegir:</h2>
      {menues.map((menu) => (
        <CardProducto key={menu.id} producto={menu} addToday={addToday} />
      ))}
    </div>
  );
};

export default CardContainerProduct;
