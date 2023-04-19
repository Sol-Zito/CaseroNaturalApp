import React, { useContext, useState } from "react";
import { UserData } from "../../context/UserContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FormContainer = () => {
  const { userdispatch } = useContext(UserData);
  const [newUser, setNewUser] = useState({
    name: "",
    namestore: "",
    email: "",
    password: "",
  });

  console.log("newUser", newUser);

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    userdispatch({ type: "CHANGE_ALL", payload: newUser });
    Swal.fire("Good job!", "You clicked the button!", "success");
    navigate("/home");
  };

  return (
    <>
      <h1>Complete los siguientes campos:</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyItems: "stretch",
          flexDirection: "column",
          alignItems: "stretch",
          gap: "9px",
        }}
      >
        <label>Nombre completo:</label>
        <input
          placeholder="nombre apellido"
          name="name"
          onChange={handleChange}
          required
        />
        <label>namestore:</label>
        <input
          placeholder="namestore"
          name="namestore"
          onChange={handleChange}
          required
        />
        <label>Email:</label>
        <input
          placeholder="name@gmail.com"
          name="email"
          onChange={handleChange}
          required
        />
        <label>Password:</label>
        <input
          placeholder="********"
          name="password"
          onChange={handleChange}
          required
        />

        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default FormContainer;
