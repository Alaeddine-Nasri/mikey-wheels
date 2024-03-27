import React, { useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner"; // Assuming qr-scanner is installed via npm or yarn
//import 'qr-scanner/dist/qr-scanner.min.js'; // Importing the JavaScript file
import "./qrCode.css";

interface QRScannerProps {
  setQrResult: React.Dispatch<React.SetStateAction<string>>;
}

const QRScannerComponent: React.FC<QRScannerProps> = ({ setQrResult }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [camHasCamera, setCamHasCamera] = useState<boolean>(false);
  const [camQrResult, setCamQrResult] = useState<string>("None");
  const [camQrError, setCamQrError] = useState<string>("None");
  const [camQrResultTimestamp, setCamQrResultTimestamp] = useState<string>("");

  useEffect(() => {
    const scanner = new QrScanner(
      videoRef.current!,
      (result) => {
        //TODO navigate
        setQrResult(result.data);
        setCamQrResult(result.data); // Extracting data property
        setCamQrResultTimestamp(new Date().toString());
      },
      {
        onDecodeError: (error) => {
          setCamQrError(error.toString());
        },
        highlightScanRegion: true,
        highlightCodeOutline: true,
      }
    );

    scanner.start().then(() => {
      QrScanner.hasCamera().then((hasCamera) => setCamHasCamera(hasCamera));
    });

    return () => {
      scanner.stop();
    };
  }, []);

  return (
    <div>
      <h1>Scan from WebCam:</h1>
      <div id="video-container">
        <video id="qr-video" ref={videoRef}></video>
      </div>
      <div>
        <b>Device has camera:</b>
        <span id="cam-has-camera">{camHasCamera ? "Yes" : "No"}</span>
      </div>
      <br />
      <b>Detected QR code: </b>
      <span id="cam-qr-result">{camQrResult}</span>
      <br />
      <b>Last detected at: </b>
      <span id="cam-qr-result-timestamp">{camQrResultTimestamp}</span>
      <br />
      <hr />
      <b>Detected QR code: </b>
      <span id="file-qr-result">None</span>
    </div>
  );
};

export default QRScannerComponent;
