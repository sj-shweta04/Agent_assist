import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Nbt = () => {
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
        <div className='flex-1 border-l border-gray-400 p-4 h-screen'>
            NBT
            <div className="relative h-full overflow-auto">
            <div className="absolute bottom-10 left-10">
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
                      marginBottom : "20px"
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

          <div className="flex gap-3 mb-4">
            <div>
              {/* <TextField
              type="text"
              label="Type your query"
              onChange={handleChange}
              variant="outlined"
            /> */}

              <Input onChange={handleChange} className="w-56" />
            </div>
            <div>
              <Button onClick={handleClick}>Send</Button>
            </div>
          </div>
        </div>

            </div>
        </div>
    )
}

export default Nbt