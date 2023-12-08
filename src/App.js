import "./App.css";
import Nav from "./components/Nav";
import Product from "./components/Product";
import { useEffect } from "react";

function App() {
  console.log("hello");

  useEffect(() => {
    console.log("effect");
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="App">
      <Nav />
      <Product />
    </div>
  );
}

export default App;
