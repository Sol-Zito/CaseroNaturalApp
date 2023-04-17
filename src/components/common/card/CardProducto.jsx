import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import { InfoContext } from "../../context/InfoContext";

const CardProducto = ({ producto, addToday }) => {
  const { name, precio, img } = producto;
  const { state } = useContext(InfoContext);
  const isAdd = state.menues;

  return (
    <Card
      sx={{
        margin: "auto",
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
      <CardContent
        sx={{ display: "flex", flexDirection: "column", padding: "4px" }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <CardMedia
          component="img"
          image={img}
          alt={name}
          sx={{ height: "60px" }}
        />
        <Typography variant="h6" color="text.secondary" name="precio">
          {precio}
        </Typography>
      </CardContent>

      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        {isAdd.some((el) => el.id === producto.id) ? (
          <Button variant="contained" disabled>
            Agregar
          </Button>
        ) : (
          <Button
            onClick={() => {
              addToday(producto);
            }}
            style={{ color: "white", backgroundColor: "blue" }}
          >
            Agregar
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default CardProducto;
