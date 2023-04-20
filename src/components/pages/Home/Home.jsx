import React, { useContext, useEffect, useState } from "react";
import { getMenues } from "../../../services/menuesServices";
import CardContainerProduct from "../../common/card/CardContainerProduct";
import { UserData } from "../../context/UserContext";
import styled from "./home.module.css";

const Home = () => {
  const [menues, setMenues] = useState([]);
  const { userstate } = useContext(UserData);

  const infoUser = userstate.userInfo;
  const infoSegurity = infoUser.segurity;

  useEffect(() => {
    const menuApi = getMenues();
    menuApi
      .then((res) => setMenues(res.data))
      .catch((err) => console.log("err message", err));
  }, []);

  return (
    <>
      <h1 className={styled.h1H}>Welcome {infoSegurity.name}!!</h1>
      <CardContainerProduct menues={menues} />
    </>
  );
};

export default Home;
