import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyMain from "./components/MyMain";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MyMain />} />
          <Route path="/:id" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
