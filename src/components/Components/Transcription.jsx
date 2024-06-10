import React from 'react'
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:0000"); // We need backend/AI port here
console.log("URL",import.meta.env.VITE_SERVER_APP_URL)



const Transcription = () => {
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
        <div className='flex-1 border-r border-gray-400 p-4 h-screen'>
     
            <div className=" h-full overflow-auto">
            <div className="flex justify-center">
          <h1 className="text-2xl font-bold mb-4">Transcription</h1>
        </div>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>

            </div>
        </div>
    )
}

export default Transcription
