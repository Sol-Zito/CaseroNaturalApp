import React, { useContext } from "react";
import { InfoContext } from "../../context/InfoContext";
import CardProducto from "./CardProducto";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { UserData } from "../../context/UserContext";
import styled from "../../pages/Home/home.module.css";

const CardContainerProduct = ({ menues, setChange }) => {
  const { dispatch } = useContext(InfoContext);
  const { userstate } = useContext(UserData);
  const addToday = (menu) => {
    dispatch({ type: "ADD_MENUE", payload: menu });
  };

  return (
    <div className={`${userstate.theme} ${styled.h1H}`}>
      <Link to="/newProduct">
        <Button variant="outlined" onClick={() => setChange(true)}>
          New product
        </Button>
      </Link>
      <h2>Menues to select:</h2>
      {menues.map((menu) => (
        <CardProducto
          key={menu.id}
          product={menu}
          addToday={addToday}
          setChange={setChange}
        />
      ))}
    </div>
  );
};

export default CardContainerProduct;
