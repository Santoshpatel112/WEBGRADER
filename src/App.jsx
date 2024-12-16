import React from "react";
import { Routes, Route } from "react-router-dom";
import WebsiteGrader from "./components/WebsiteGrader";
import Lighthouse from "./components/Lighthouse";
import { PageSpeedProvider } from "./Context/context";

function App() {
  console.log("App Component Rendering");
  return (
    <div>
      <Routes>
        <Route path="/" element={<WebsiteGrader />} />
        <Route path="/lighthouse" element={<Lighthouse />} />
      </Routes>
    </div>
  );
}

export default App;