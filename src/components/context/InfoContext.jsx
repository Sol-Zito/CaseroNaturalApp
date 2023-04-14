import { createContext, useState } from "react";

export const InfoContext = createContext();

const InfoContextProvider = ({ children }) => {
  const [infoData, setInfoData] = useState({});

  const infoUser = {
    infoData,
    setInfoData,
  };

  return (
    <>
      <InfoContext.Provider value={infoUser}>{children}</InfoContext.Provider>
    </>
  );
};

export default InfoContextProvider;
