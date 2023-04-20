import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { createNewMenue } from "../../../services/menuesServices";
import { Link, useNavigate } from "react-router-dom";

const CreateProducto = () => {
  const navigate = useNavigate();
  const [newMenu, setNewMenu] = useState({
    name: "",
    price: "",
    img: "",
    option: "",
    priceOption: "",
  });

  const handleChange = (e) => {
    setNewMenu({ ...newMenu, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewMenue(newMenu);
    alert("menu added successfully");
    navigate("/home");
  };
  return (
    <div style={{ width: " 90%", margin: "auto" }}>
      <Typography variant="h6" gutterBottom>
        Add new menu:
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="price"
            name="price"
            label="Price"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="img"
            name="img"
            label="Image"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="option"
            name="option"
            label="Option"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="priceOption"
            name="priceOption"
            label="Price option"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Button onClick={handleSubmit}>Send</Button>
      <Link to="/home">
        <Button>Cancel</Button>
      </Link>
      {/* </Modal> */}
    </div>
  );
};

export default CreateProducto;
