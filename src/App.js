import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import GetTitle from "./components/GetTitle";
import GetVoTitle from "./components/GetVoTitle";
import GetOverview from "./components/GetOverview"

function App() {
  return (
    <div className="App--movie-challenge">
    <BrowserRouter>
      <Header/>
      <main>
      {/* <Home/> */}
      </main>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/title/:info" element={<GetTitle/>}/>
        <Route path="/title_original/:info" element={<GetVoTitle/>}/>
        <Route path="/overview/:info" element={<GetOverview/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
