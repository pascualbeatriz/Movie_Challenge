import React from "react";
import Header from "./components/Header";
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
      Aquí el contenido de nuestra lista, esto sería la home
      <Home/>
      </main>
    </div>
  );
}

export default App;
