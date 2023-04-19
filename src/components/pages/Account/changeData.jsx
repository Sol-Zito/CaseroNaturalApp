import React, { useContext, useState } from "react";
import { UserData } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

import styled from "./Account.module.css";

export const ChangeDataPersonal = () => {
  const navigate = useNavigate();
  const { userstate, userdispatch } = useContext(UserData);
  const infoPersonal = userstate.userInfo.segurity;
  const [dataP, setDataP] = useState(infoPersonal);

  const handlechange = (e) => {
    setDataP({ ...dataP, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userdispatch({ type: "CHANGE_PERSONAL_DATA", payload: dataP });
    navigate("/account");
  };
  return (
    <div>
      <h1>Datos personales:</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input placeholder={dataP.name} onChange={handlechange} name="name" />
        </div>
        <div>
          <label>Email:</label>
          <input
            placeholder={dataP.email}
            onChange={handlechange}
            name="email"
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            placeholder={dataP.phone}
            onChange={handlechange}
            name="phone"
          />
        </div>
        <div>
          <label>Addres:</label>
          <input
            placeholder={dataP.addres}
            onChange={handlechange}
            name="addres"
          />
        </div>
        <div className={styled.divbtn}>
          <button type="submit">Modificar</button>
          <button type="button" onClick={() => navigate("/account")}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export const ChangeDataBussines = () => {
  const navigate = useNavigate();
  const { userstate, userdispatch } = useContext(UserData);
  const infoBussines = userstate.userInfo;

  const [dataB, setDataB] = useState(infoBussines);

  const handlechangeBuss = (e) => {
    setDataB({ ...dataB, [e.target.name]: e.target.value });
  };
  console.log("dataB", dataB);

  const handleSubmitBuss = (e) => {
    e.preventDefault();
    userdispatch({ type: "CHANGE_BUSSINES_DATA", payload: dataB });
    navigate("/account");
  };
  return (
    <div>
      <h1>Datos Empresa:</h1>
      <form onSubmit={handleSubmitBuss}>
        <div>
          <label>Store:</label>
          <input
            placeholder={dataB.namestore ? dataB.namestore : "name store"}
            onChange={handlechangeBuss}
            name="namestore"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            placeholder={dataB.email ? dataB.email : "nameStore@gmail.com"}
            onChange={handlechangeBuss}
            name="email"
          />
        </div>
        <div>
          <label>Instagram:</label>
          <input
            placeholder={dataB.instagram ? dataB.instagram : "@name_instagram"}
            onChange={handlechangeBuss}
            name="instagram"
          />
        </div>

        <div className={styled.divbtn}>
          <button type="submit">Modificar</button>
          <button type="button" onClick={() => navigate("/account")}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};
