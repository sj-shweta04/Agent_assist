import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { IoMdSend } from "react-icons/io";
import { APIUSER } from "../../E2E/axios.util";

const KnowledgeAI = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handlediscussion = () => {
    setLoading(true);
    const payload = { question: question };
    APIUSER.get("/api", payload)
      .then((response) => {
        setAnswer(response.data.answer);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handlediscussion();
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
              <div className="flex justify-between">
                <Input
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyDown={handleKeyPress}
                />
              </div>
              <div>
                <Button onClick={handlediscussion}>
                  <IoMdSend />
                </Button>
              </div>
            </div>
              <div>
                <Textarea className="h-[160px]" readOnly value={answer || ''} />
              </div>
       
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default KnowledgeAI;
