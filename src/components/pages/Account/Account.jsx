import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "./Account.module.css";
import { UserData } from "../../context/UserContext";
import { Button } from "@mui/material";

const Account = () => {
  const { userstate } = useContext(UserData);
  const infoPersonal = userstate.userInfo;

  return (
    <div className={styled.row}>
      <section>
        <h1>Mi cuenta</h1>
      </section>

      <div className={styled.divider}></div>
      <section className={styled.box}>
        <div>
          <h3>Datos</h3>
          <div className={styled.divider}></div>
          <h4>
            Datos Personales --
            <Link to="/account/changeDataPersonal">
              <Button>Editar</Button>
            </Link>
          </h4>
          <div className={styled.divider}></div>
          <p>Name: {infoPersonal.segurity.name}</p>
          <p>Email: {infoPersonal.segurity.email}</p>
          <p>
            Phone:
            {infoPersonal.segurity.phone
              ? infoPersonal.segurity.phone
              : " no hay"}
          </p>
          <p>
            Addres:
            {infoPersonal.segurity.addres
              ? infoPersonal.segurity.addres
              : " no hay"}
          </p>
          <div className={styled.divider}></div>
          <h4>
            Datos Empresa --
            <Link to="/account/ChangeDataBussines">
              <Button>Editar</Button>
            </Link>
          </h4>
          <p>Store: {infoPersonal.namestore}</p>
          <p>
            Instagram:
            {infoPersonal.instagram ? infoPersonal.instagram : " no hay"}
          </p>
          <p>Email: {infoPersonal.email ? infoPersonal.email : " no hay"}</p>
        </div>
      </section>
    </div>
  );
};

export default Account;
