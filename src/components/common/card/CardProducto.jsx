import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import { InfoContext } from "../../context/InfoContext";
import { Link } from "react-router-dom";

const CardProducto = ({ product, addToday, setChange }) => {
  const { name, price, img } = product;
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
        <Typography variant="h6" color="text.secondary" name="price">
          {price}
        </Typography>
      </CardContent>

      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        {isAdd.some((el) => el.id === product.id) ? (
          <Button variant="contained" disabled>
            Add menu
          </Button>
        ) : (
          <Button
            onClick={() => {
              addToday(product);
            }}
            style={{ color: "white", backgroundColor: "blue" }}
          >
            Add menu
          </Button>
        )}
        <Link to={`/updateProduct/${product.id}`}>
          <Button
            style={{ color: "white", backgroundColor: "blue" }}
            onClick={() => setChange(true)}
          >
            Modify
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardProducto;
