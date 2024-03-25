// App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componenets/pages/home/Home";
import Map from "./componenets/pages/map/map";
import Landing from "./componenets/pages/landing/landing";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/map" element={<Map />} /> */}
        <Route path="/map/:roomId" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
