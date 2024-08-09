import React from "react";
import { Header } from "./components";

import "./App.scss";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Normal from "./pages/normal/Normal";
import Dynamic from "./pages/dynamic/Dynamic";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="normal" element={<Normal />} />
        <Route path="dynamic" element={<Dynamic />} />
      </Routes>
      <Outlet />
    </div>
  );
};

export default App;
