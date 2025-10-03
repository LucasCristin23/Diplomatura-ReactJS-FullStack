import React from "react";
import Header from "./Components/Header/Header";
import Card from "./Components/Card/Card";
import persona from "./assets/persona.jpeg"; // Importar la imagen te da la ruta final empaquetada
import "./App.css"

function App() {
  return (
    <>
      <Header />

      <div className="cardContainer">
        <Card
          src={persona}
          titulo="Juan "
          profecion="Barbero"
          descripcion="Texto largo"
        />
        <Card
          src={persona}
          titulo="Alberto "
          profecion="Bicicletero"
          descripcion="Texto largo"
        />
        <Card
          src={persona}
          titulo="Alex "
          profecion="Sistemas"
          descripcion="Texto largo"
        />
      </div>
    </>
  );
}

const log = (ola) => {
  return console.log(ola);
};
export default App;
