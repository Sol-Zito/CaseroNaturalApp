import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Delete } from "@mui/icons-material";

const CardProducto = ({ producto, addToday, removeProducto }) => {
  const { name, precio, imagen } = producto;

  const [agregado, setAgreado] = useState(false);


  return (
    <>
      <Card
        sx={{
          margin: 'auto',
          maxWidth: "70%",
          maxHeight: "300px",
          textAlign: "center",
          alignContent: "center",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "beige",
          border: "solid",
        }}
      >
        <CardActionArea>
          <CardMedia component="img" image={imagen} alt={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="h6" color="text.secondary" name="precio">
              {precio}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={() => {
              setAgreado(false);
              addToday(producto);
            }}
            style={{ color: "white", backgroundColor: "blue" }}
          >
            Agregar
          </Button>
          <Button
            onClick={() => {
              setAgreado(true);
              removeProducto(producto);
            }}
            style={{ color: "white", backgroundColor: "red" }}
          >
            <Delete></Delete>
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CardProducto;
