import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const NextBestAction = () => {
  const [questions, setQuestions] = useState([]);

  const addQuestions = (que) => {
    console.log(que);
    let q = [...questions];
    q.add(que);
    setQuestions(q);
  };

  const [inputValue, setInputValue] = useState("");

  console.log("Val");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    console.log(inputValue);
    let q = [...questions];
    q.push(inputValue);
    setQuestions(q);
  };
  return (
    <>
       <div className="h-auto bg-white rounded-lg p-4 shadow">
       <Card className="h-[250px] overflow-auto">
            <CardHeader>
              <CardTitle>Next Best Action</CardTitle>
            </CardHeader>
            <CardContent>
              {/* api data here */}

              {questions.length > 0 &&
                questions.map((q) => {
                  // console.log("qa.answer", qa.answer.retrieved_chunks);
                  return (
                    questions.length && (
                      <div
                        style={{
                          padding: "10px",
                          borderRadius: "10px",
                          // marginLeft: "10px",
                          // textAlign: "left",
                          border: "1px solid #d3d3d3",
                          // width: "82%",
                          marginBottom: "20px",
                        }}
                      >
                        {questions.length > 0 && (
                          <span
                            style={{
                              paddingLeft: 10,
                              paddingRight: 5,
                            }}
                          >
                            {q}
                          </span>
                        )}
                      </div>
                    )
                  );
                })}
              
            </CardContent>
          </Card>
        </div>
    </>
  );
};

export default NextBestAction;
