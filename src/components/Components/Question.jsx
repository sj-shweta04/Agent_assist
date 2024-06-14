import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const Question = ({ question, loading, error }) => {
  return (
    <>
      <div className="h-auto bg-white rounded-lg p-4 shadow">
        <Card className="h-[250px] overflow-auto">
          <CardHeader>
            <CardTitle>Question</CardTitle>
          </CardHeader>
          {loading ? (
            <div className="m-9">Loading question...</div>
          )  : error ? (
            <div>Error</div>
          ) : (
            <CardContent>
              <p>{question}</p>
            </CardContent>
          )}
        </Card>
      </div>
    </>
  );
};

export default Question;
