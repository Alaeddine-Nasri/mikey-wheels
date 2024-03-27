// App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componenets/pages/home/Home";
import Map from "./componenets/pages/map/map";
import Landing from "./componenets/pages/landing/landing";
import QRScannerComponent from "./componenets/pages/qrCode/qrCodeComponent";
import QrCodeListScreen from "./componenets/pages/qrPositionList/qrPositionList";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/map" element={<Map />} /> */}

        <Route path="/map/:departId/:roomId" element={<Map id="1" />} />
        {/* <Route path="/qrCodeScreen" element={<QRScannerComponent />} /> */}
        <Route path="/qrPositionList" element={<QrCodeListScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
