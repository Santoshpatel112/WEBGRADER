import React from "react";
import { Routes, Route } from "react-router-dom";
import WebsiteGrader from "./components/WebsiteGrader";
import Lighthouse from "./components/Lighthouse";
import { PageSpeedProvider } from "./Context/context";
import PerformanceWrapper from "./components/PerformanceWrapper ";

function App() {
  console.log("App Component Rendering");
  return (
    <PageSpeedProvider>
      <div>
        <Routes>
          <Route path="/" element={<WebsiteGrader />} />
          <Route path="/lighthouse" element={<Lighthouse />} />
        </Routes>
      </div>
    </PageSpeedProvider>
  );
}

export default App;
