import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "70%",
  maxHeight: "85%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Template = ({ today, sandwicheria }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const sandwiches = sandwicheria;

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <main>
            <h1>Casero.natural</h1>
            <h3>horario</h3>
          </main>
          <section>
            <h2>Menu del dia:</h2>
            <ol>
              {today.map((menu) => {
                return (
                  <li key={menu.id}>
                    {menu.name} {menu.precio}
                  </li>
                );
              })}
            </ol>
            <h3>Anticipen su pedido</h3>
            <h4>@intagram</h4>
          </section>
          <section>
            <h2>Sandwicheria:</h2>
            <ul>
              {sandwiches.map((sandwich) => {
                return (
                  <li key={sandwich.id}>
                    {sandwich.name} {sandwich.precio} / {sandwich.opcion}
                    {sandwich.precioOpcion}
                  </li>
                );
              })}
            </ul>
          </section>
        </Box>
      </Modal>
    </>
  );
};

export default Template;
