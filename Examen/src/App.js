import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Manage from "./components/manage";
import Depositar from "./components/depositar";
import Retirar from "./components/retirar";
import Log from "./components/log";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Log />}></Route>
        <Route path="/depositar" element={<Depositar />}></Route>
        <Route path="/retirar" element={<Retirar />}></Route>
        <Route path="/createUser" element={<Manage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
