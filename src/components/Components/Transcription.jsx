import React from "react";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

// const socket = io("http://localhost:0000"); // We need backend/AI port here
// console.log("URL", import.meta.env.VITE_SERVER_APP_URL);

const Transcription = () => {
  // const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   socket.on("data", (data) => {
  //     console.log(data);
  //     setMessages((prevMessages) => [...prevMessages, data.data]);
  //   });

  //   return () => {
  //     socket.off("data");
  //   };
  // }, []);

  return (
    <div className="w-[450px] bg-white rounded-lg p-4 shadow">
      <div className=" h-full overflow-auto">
        <Card className="h-[600px] overflow-auto">
          <CardHeader>
            <CardTitle>Transcription</CardTitle>
          </CardHeader>
          <CardContent>
            <div >
              {/* {messages} */}
             <p><b>Customer :</b> Hi, I need to change my ATM PIN and block my previous card. <br /><br /> <b>Agent:</b> Hello! Sure, I can help you with that. Can you please provide me with your account number for verification? <br /><br /><b>Customer:</b> Yes, it's 123456789. <br /><br /><b>Agent:</b> Thank you. I have verified your account. Just to confirm, you want to change your ATM PIN and block your previous card, correct?<br /><br /> <b>Customer:</b> Yes, that's correct.<br /><br /><b>Agent:</b> Alright, I have noted your request. Your previous card will be blocked immediately, and you'll receive instructions to change your ATM PIN shortly. Is there anything else I can assist you with?<br /><br /><b>Customer:  </b> No, that's all for now. Thank you
             </p>
             
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
