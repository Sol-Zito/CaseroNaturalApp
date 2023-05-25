import React from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {SearchOutlined } from "@mui/icons-material";
import { TextField } from "@mui/material";

const HeaderHome = () => {
  return (
    <div style={{ display: "flex", gap: "12px", flexDirection: 'column' , margin: '15px' }}>
      <div style={{ display: "flex", gap: "2px", justifyContent: 'start' }}>
        <IconButton color="inherit" aria-label="open drawer">
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" noWrap component="div">
          Productos
        </Typography>
      </div>
      <div>
        <TextField inputMode="text" placeholder="Buscar producto">
          Buscar producto
        </TextField>
        <SearchOutlined />
      </div>
    </div>
  );
};

export default HeaderHome;
