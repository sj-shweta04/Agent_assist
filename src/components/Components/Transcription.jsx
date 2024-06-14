import React from "react";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const socket = io("http://localhost:0000"); // We need backend/AI port here
console.log("URL", import.meta.env.VITE_SERVER_APP_URL);

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
    <div className="w-[450px] bg-white rounded-lg p-4 shadow">
      <div className=" h-full overflow-auto">
        <Card className="h-[600px] overflow-auto">
          <CardHeader>
            <CardTitle>Transcription</CardTitle>
          </CardHeader>
          <CardContent>
            <div >
              {messages}
              <h1>hiiiiiiiii</h1>
             
              {/* api data here */}
            </div>
          </CardContent>
        </Card>
        {/* // ))} */}
      </div>
    </div>
  );
};

export default Transcription;
