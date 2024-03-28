import React, { useState } from "react";

const SpeechToText: React.FC = () => {
  const [recognizedText, setRecognizedText] = useState<string>("");

  const startListening = () => {
    const recognition = new (window as any).webkitSpeechRecognition(); // Adjust according to browser support

    // recognition.onresult = (event: SpeechRecognitionEvent) => {
    //   const transcript = event.results[0][0].transcript;
    //   setRecognizedText(transcript);
    // };

    recognition.start();
  };

  return (
    <div>
      <button onClick={startListening}>Start Listening</button>
      <p>Recognized Text: {recognizedText}</p>
    </div>
  );
};

export default SpeechToText;
