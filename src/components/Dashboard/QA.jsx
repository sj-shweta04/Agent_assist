import React, { useState } from "react";
import Question from "./Question";
import Response from "./Response";

const QA = () => {
  // const [transcription, setTranscription] = useState('');

  // const handleTranscriptionChange = (event) => {
  //   setTranscription(event.target.value);
  // };

  return (
    <div className="h-screen flex flex-col gap-2">
      <Question />

      <Response />
    </div>
  );
};

export default QA;
