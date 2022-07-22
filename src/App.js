import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import GetTitle from "./components/GetTitle";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
      <main>
      Aquí el contenido de nuestra lista, esto sería la home
      <Home/>
      </main>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/title/:info" element={<GetTitle/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
