import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import NotFound from "./pages/PageNotFound";
import Recipes from "./pages/Recipes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/Welcome" replace/>} />

          <Route path="/Welcome" element={<Welcome/>}/>
          <Route path="/Home" element={<Home />} />
          <Route path="/Recipes/:id?" element={<Recipes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
            fontSize: "16px",
          },
        }}
      />
    </>
  );
}

export default App;