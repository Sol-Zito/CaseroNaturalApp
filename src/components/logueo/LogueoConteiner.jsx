import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Logueo from "./Logueo";

const LogueoConteiner = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const changeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  console.log(user);

  const validEmail = (email) => {
    let reMedio =
      /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    return reMedio.test(email);
  };

  const [error, setError] = useState({
    isErr: false,
    errorMessage: "** Please verify your information again **",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validEmail(user.email) && user.password.length > 8) {
      dispatch({
        type: "CHANGE_ALL",
        payload: user,
      });

      navigate("/home");
    } else {
      setError({ ...error, isErr: true });
    }
  };
  return (
    <>
      <Logueo
        handleSubmit={handleSubmit}
        changeUser={changeUser}
        error={error}
      />
    </>
  );
};

export default LogueoConteiner;
