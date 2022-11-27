import './App.css';
import React from "react";
import Cart from "./components/Cart";


function App() {
  return (
    <div>
      <Cart
        title={"Card title"}
        text={
          " Some quick example text to build on the card title and make up the\n" +
          "          bulk of the card's content."
        }
      >
        <img
          alt={""}
          src={"https://img.freepik.com/premium-photo/3d-illustration-of-a-glass-sphere-with-many-faces-crystals-scatter-on-a-black-background-cyber-ball-sphere_116124-6402.jpg?w=1380"}
          className="card-img-top"
        />
      </Cart>
      <Cart
        title={"Special title treatment"}
        text={
          "With supporting text below as a natural lead-in to additional content."
        }
      />
    </div>
  );
}

export default App;
