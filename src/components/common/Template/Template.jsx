import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { InfoContext } from "../../context/InfoContext";
import { UserData } from "../../context/UserContext";
import { Delete } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "70%",
  maxHeight: "85%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Template = () => {
  const { state, dispatch } = useContext(InfoContext);
  const { userstate } = useContext(UserData);

  const menues = state.menues;
  const sandwicheria = state.sandwicheria;

  const removeProduct = (obj) => {
    dispatch({ type: "REMOVE_MENUE", payload: obj });
  };

  return (
    <>
      <Box sx={style}>
        <main>
          <h1>Name: {userstate.nameStore}</h1>
          <h3>
            Horario: {userstate.horario.dias} {userstate.horario.horas}
          </h3>
        </main>
        <section>
          <h2>Menu del dia:</h2>
          <ol>
            {menues.map((menu) => {
              return (
                <div key={menu.id}>
                  {menu.name} {menu.precio}
                  <Button
                    onClick={() => {
                      removeProduct(menu);
                    }}
                    variant="outlined"
                    style={{ color: "white", backgroundColor: "red" }}
                  >
                    <Delete />
                  </Button>
                </div>
              );
            })}
          </ol>
          <h3>Anticipen su pedido</h3>
          <h4>@intagram: {userstate.instagram}</h4>
        </section>
        <section>
          <h2>Sandwicheria:</h2>
          <ul>
            {sandwicheria.map((sandwich) => {
              return (
                <li key={sandwich.id}>
                  {sandwich.name} {sandwich.precio} / {sandwich.opcion}
                  {sandwich.precioOpcion}
                </li>
              );
            })}
          </ul>
        </section>
      </Box>
    </>
  );
};

export default Template;
