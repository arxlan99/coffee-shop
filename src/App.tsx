import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
        <Route path="/login"></Route>
        <Route path="/sign-up"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
