import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";

const CreateProducto = () => {
  return (
    <div style={{ width: " 90%", margin: "auto" }}>
      <Typography variant="h6" gutterBottom>
        Ingresar nuevo menu:
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
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="img"
            name="img"
            label="Image"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Opcion"
            name="Opcion"
            label="Opcion"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="price-option"
            name="price-option"
            label="Price option"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
      <Button>Enviar</Button>
      {/* </Modal> */}
    </div>
  );
};

export default CreateProducto;
