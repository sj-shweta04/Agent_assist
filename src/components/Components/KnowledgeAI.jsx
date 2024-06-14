import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { IoMdSend } from "react-icons/io";
import axios from "axios";

const KnowledgeAI = () => {
  const [response, setResponse] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const fetchResponse = async () => {
    if (inputValue.trim() !== "") {
      try {
        const response = await axios.post("/api/getResponse", {
          question: inputValue.trim(),
        });
        setResponse(response.data.response);
      } catch (error) {
        console.error("Error fetching response:", error);
      }
    }
  };

  return (
    <>
    <div className="h-auto bg-white rounded-lg p-4 shadow">
    <Card className="h-[300px]">
        <CardHeader>
          <CardTitle>Knowledge AI</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-3 mb-4">
            <div className="">
              <Input
                value={inputValue}
                onChange={handleChange}
                className="w-[300px]"
              />
            </div>
            <div>
              <Button onClick={fetchResponse}>
                <IoMdSend />
              </Button>
            </div>
          </div>
          <div>
            <Textarea className="h-[160px]" value={response} readOnly />
          </div>
        </CardContent>
      </Card>
    </div>
  </>
  );
};

export default KnowledgeAI;
