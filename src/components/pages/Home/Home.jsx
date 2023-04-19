import React, { useContext, useEffect, useState } from "react";
import { getMenues } from "../../../services/menuesServices";
import CardContainerProduct from "../../common/card/CardContainerProduct";
import { UserData } from "../../context/UserContext";

const Home = () => {
  const [menues, setMenues] = useState([]);
  const { userstate } = useContext(UserData);

  const infoUser = userstate.userInfo;
  const infoSegurity = infoUser.segurity;

  useEffect(() => {
    const menuApi = getMenues();
    menuApi.then((res) => setMenues(res.data));
  }, []);

  return (
    <>
      <h1>Bienvenido {infoSegurity.name}</h1>
      <CardContainerProduct menues={menues} />;
    </>
  );
};

export default Home;
