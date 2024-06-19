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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const body = {
  //   "transcript": "Customer: Hi, I need to change my ATM PIN and block my previous card.\n\nAgent: Hello! Sure, I can help you with that. Can you please provide me with your account number for verification?\n\nCustomer: Yes, it's 123456789.\n\nAgent: Thank you. I have verified your account. Just to confirm, you want to change your ATM PIN and block your previous card, correct?\n\nCustomer: Yes, that's correct.\n\nAgent: Alright, I have noted your request. Your previous card will be blocked immediately, and you'll receive instructions to change your ATM PIN shortly. Is there anything else I can assist you with?\n\nCustomer: No, that's all for now. Thank you"
  // }
  

  // useEffect(() => {
  //   setInterval(async () => {
  //       try {
  //         const response = await APIUSER.post('/extract_question', body);

  //         console.log(response)
  //         setQuestion(response.data.question);
  //         setAnswer(response.data.Answer);
  //       } catch (error) {
  //         setError(error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     },100000)
  // }, []);

  useEffect(() => {
    const main = async () => {
        try {
          
          const response = await APIUSER.post('/extract_question');

          console.log(response)
          setQuestion(response.data.question);
          setAnswer(response.data.Answer);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }
      main();
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
              <KnowledgeAI />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
