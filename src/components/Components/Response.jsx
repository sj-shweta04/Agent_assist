import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const Response = ({ answer, loading, error }) => {
  return (
    <>
      <div className="h-auto bg-white rounded-lg p-4 shadow">
        <Card className="h-[300px] overflow-auto">
          <CardHeader>
            <CardTitle>Response</CardTitle>
          </CardHeader>
          {loading ? (
            <div className="m-9">Loading response...</div>
          )  : error ? (
            <div>Error</div>
          ) : (
            <CardContent>
             {answer.split("\n").map((data, index) => (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: data }}
                  />
                ))}
            </CardContent>
          )}
        </Card>
      </div>
    </>
  );
};

export default Response;
