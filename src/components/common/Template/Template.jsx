import React, { useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import { InfoContext } from "../../context/InfoContext";
import { UserData } from "../../context/UserContext";
import { Delete } from "@mui/icons-material";
import styles from "./Template.module.css";

const Template = () => {
  const { state, dispatch } = useContext(InfoContext);
  const { userstate } = useContext(UserData);
  const infoUser = userstate.userInfo;
  const menues = state.menues;
  const sandwicheria = state.sandwicheria;

  const removeProduct = (obj) => {
    dispatch({ type: "REMOVE_MENUE", payload: obj });
  };

  useEffect(() => {}, [state.menues]);

  return (
    <>
      <div className={styles.divbtn}>
        <Button variant="outlined">Imprimir</Button>
        <Button
          variant="outlined"
          onClick={() => dispatch({ type: "CLEAR_ALL" })}
        >
          Vaciar template
        </Button>
      </div>
      <div className={styles.box}>
        <main>
          <h1>Name: {infoUser.namestore}</h1>
          <h4>@intagram: {infoUser.instagram}</h4>
          {/* <h3>
            Horario: {infoUser.horario.dias} {infoUser.horario.horas}
          </h3> */}
        </main>
        <section>
          <h2>Menu del dia:</h2>
          <ol>
            {menues.map((menu) => {
              return (
                <li key={menu.id}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "nowrap",
                      justifyContent: "flex-start",
                      alignItems: "stretch",
                    }}
                  >
                    <button
                      onClick={() => {
                        removeProduct(menu);
                      }}
                      style={{ margin: "2px 5px", padding: "unset" }}
                    >
                      <Delete />
                    </button>
                    <p>
                      {menu.name} {menu.precio}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
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
        <h3>Anticipen su pedido</h3>
      </div>
    </>
  );
};

export default Template;
