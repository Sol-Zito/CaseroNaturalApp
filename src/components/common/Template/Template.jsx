import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { InfoContext } from "../../context/InfoContext";
import { UserData } from "../../context/UserContext";
import { Delete } from "@mui/icons-material";
import styles from "./Template.module.css";
import Swal from "sweetalert2";

const Template = () => {
  const { state, dispatch } = useContext(InfoContext);
  const { userstate } = useContext(UserData);
  const infoUser = userstate.userInfo;
  const [menues, setMenues] = useState([]);
  const sandwicheria = state.sandwicheria;

  const removeProduct = (obj) => {
    Swal.fire({
      title: "Are you sure?",
      text: `${obj.name} -- will be removed`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({ type: "REMOVE_MENUE", payload: obj });
        Swal.fire("Deleted!", "Your menu has been deleted.", "success");
      }
    });
  };

  useEffect(() => {
    setMenues(state.menues);
    console.log(state.menues);
  }, [state.menues]);

  const clearTemplate = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({ type: "CLEAR_ALL" });
        Swal.fire("Deleted!", "Template has been emptied.", "success");
      }
    });
  };

  return (
    <>
      {menues.length > 0 && (
        <div className={styles.divbtn}>
          <Button variant="outlined">Print</Button>
          <Button variant="outlined" onClick={clearTemplate}>
            Empty template
          </Button>
        </div>
      )}
      <div className={styles.box}>
        <main>
          <h1>Name: {infoUser.namestore}</h1>
          <h4>Intagram: {infoUser.instagram}</h4>
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
