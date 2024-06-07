import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:0000"); // We need backend/AI port here
console.log("URL",import.meta.env.VITE_SERVER_APP_URL)

function Transcription() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("data", (data) => {
      console.log(data);
      setMessages((prevMessages) => [...prevMessages, data.data]);
    });

    return () => {
      socket.off("data");
    };
  }, []);

  return (
    <>
      <div className="min-h-screen border-2 border-black relative">
        <div className="flex justify-center">
          <h1 className="text-2xl font-bold mb-4">Transcription</h1>
        </div>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Transcription;
