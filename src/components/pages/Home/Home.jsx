import React, { useContext, useState } from "react";
import CardProducto from "../../common/card/CardProducto";
import CreateProducto from "../../common/CreateProducto/CreateProducto";
import Template from "../../common/Template/Template";
import { InfoContext } from "../../context/InfoContext";

const json = {
  "menues": [
    {
      "name": "tortilla con ensalada",
      "precio": "$360",
      "img": "",
      "agregado": false,
      "id": 1
    },
    {
      "name": "suprema con ensalada",
      "precio": "$360",
      "img": "",
      "agregado": false,
      "id": 2
    },
    {
      "name": "arroz con atun",
      "precio": "$360",
      "img": "",
      "agregado": false,
      "id": 3
    },
    {
      "name": "pastel de papa con ensalada",
      "precio": "$360",
      "img": "",
      "agregado": false,
      "id": 4
    },
    {
      "name": "fideos con bolognesa",
      "precio": "$360",
      "img": "",
      "agregado": false,
      "id": 5
    }
  ],
  "sandwicheria": [
    {
      "name": "Comun de suprema",
      "precio": "$320",
      "descripcion":"",
      "opcion": "Completo",
      "precioOpcion": "$400",
      "descripcionOpcion":"",
      "img": "",
      "agregado": false,
      "id": 1
    },
    {
      "name": "Comun de milanga",
      "precio": "$370",
      "descripcion":"",
      "opcion": "Completo",
      "precioOpcion": "$450",
      "descripcionOpcion":"",
      "img": "",
      "agregado": false,
      "id": 2
    },
    {
      "name": "Hamburguesa comun",
      "precio": "$320",
      "descripcion":"",
      "opcion": "Completo",
      "precioOpcion": "$400",
      "descripcionOpcion":"",
      "img": "",
      "agregado": false,
      "id": 3
    }
  ]
}


const Home = () => {
  const [today, setToday] = useState([]);
  const sandwicheria = json.sandwicheria;

  const {infoData } = useContext(InfoContext);

  console.log("infoData", infoData);

  const addToday = (menu) => {
    let existe = today.some( (el) =>  menu.id === el.id )
    if(!existe){
      setToday([...today, {...menu}]);
      console.log("today en addToday", today);
    }else{
      alert("El menu ya esta en lista")
    }
  };

  const removeProducto = (menu) =>{
    
      setToday((current) =>
        current.filter(
          (menuToday) =>
            menuToday.id !== menu.id
        )
      );   
    
  }

  return (
    <>
      <CreateProducto/>
      <br></br>
      <Template today={today} sandwicheria={sandwicheria} infoData={infoData}/>
      <h2>Menues para elegir:</h2>
      {json.menues.map((menu) => {
        return (
          <CardProducto
            key={menu.id}
            producto={menu}
            addToday={addToday}
            removeProducto={removeProducto}
          />
        );
      })}
    </>
  );
};

export default Home;
