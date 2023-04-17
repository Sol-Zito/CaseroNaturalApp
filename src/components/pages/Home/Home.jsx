import React, { useEffect, useState } from "react";
import { getMenues } from "../../../services/menuesServices";
import CardContainerProduct from "../../common/card/CardContainerProduct";

const Home = () => {
  const [menues, setMenues] = useState([]);

  useEffect(() => {
    const menuApi = getMenues();
    menuApi.then((res) => setMenues(res.data));
  }, []);

  return (
    <>
      <CardContainerProduct menues={menues} />;
    </>
  );
};

export default Home;
