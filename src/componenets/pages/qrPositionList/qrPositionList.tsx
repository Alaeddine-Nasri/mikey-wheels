import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./qrPositionList.css";

interface QRCodeData {
  title: string;
  x: string;
  y: string;
}

const QrCodeListScreen: React.FC = () => {
  const qrCodes: QRCodeData[] = [
    { title: "Salle 1", x: "100", y: "200" },
    { title: "Salle 2", x: "300", y: "400" },
    { title: "Salle 3", x: "500", y: "600" },
    // Add more QR codes as needed
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <button className="print-button" onClick={handlePrint}>
        Print QR Codes
      </button>
      <div className="qr-code-list">
        {qrCodes.map((qrCode, index) => (
          <div key={index} className="qr-code-item">
            <h3>{qrCode.title}</h3>
            <QRCode
              size={256}
              //   value={`Title: ${qrCode.title}, X: ${qrCode.x}, Y: ${qrCode.y}`}
              value={`${qrCode.title}`}
              viewBox={`0 0 256 256`}
            />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QrCodeListScreen;
