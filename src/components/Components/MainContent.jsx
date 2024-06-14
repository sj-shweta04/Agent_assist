import {useEffect, useState } from "react";
import Transcription from "./Transcription";
import KnowledgeAI from "./KnowledgeAI";
import NextBestAction from "./NextBestAction";
import Question from "./Question";
import Response from "./Response";
import { APIUSER } from "../../E2E/axios.util";


const MainContent = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await APIUSER.get('/api');
        setQuestion(response.data.question);
        setAnswer(response.data.answer);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <div className="flex flex-col p-6 flex-1">
        <div className="mb-4">
          <h1 className="text-lg font-semibold mb-4">Agent Assist</h1>
        </div>
        <div className="flex max-[431px]:flex-col">
          <div className="lg:flex-initial sm:flex-1">
            <Transcription />
          </div>
          <div className="flex-1">
            <div className="ml-5 grid lg:grid-cols-2 md:grid-cols-1 gap-4">
              <Question question={question} loading={loading} />
              <NextBestAction />
              <Response answer={answer} loading={loading} />
              {/* <KnowledgeAI /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
