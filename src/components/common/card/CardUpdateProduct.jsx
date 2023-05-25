import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMenuesById, updateMenues } from "../../../services/menuesServices";

const CardUpdateProduct = () => {
  const { id } = useParams();

  const [modMenu, setModMenue] = useState({});

  useEffect(() => {
    const obj = getMenuesById(id);
    obj
      .then((res) => setModMenue(res.data))
      .catch((err) => console.log(" menu not found", err.message));
  }, [id]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setModMenue({ ...modMenu, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMenues(id, modMenu)
      .then((res) => console.log(res.data))
      .catch((err) => console.log("error message", err.message));

    navigate("/home");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input placeholder={modMenu.name} name="name" onChange={handleChange} />
        <label>Price:</label>
        <input
          placeholder={modMenu.price}
          name="price"
          onChange={handleChange}
        />
        <label>Img</label>
        <input placeholder={modMenu.img} name="img" onChange={handleChange} />
        <div>
          <button type="submit">Modify</button>
          <button type="button" onClick={() => navigate("/home")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardUpdateProduct;
