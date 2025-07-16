import React from "react";

interface Props {
  questionList: {
    question: string;
    type: string;
  }[];
}
const QuestionListContainer: React.FC<Props> = ({ questionList }) => {
  return (
    <div>
      {" "}
      <div className="">
        <h2 className="font-medium  mb-4 text-lg">
          Generated Interview Questions:-
        </h2>
        <div className="p-5 border rounded-2xl shadow-md   ">
          {questionList.map((item, index) => (
            <div
              key={index}
              className="mb-4 *:p-2 border shadow-sm rounded-md hover:shadow-lg transition duration-200 ease-in-out"
            >
              <h3 className="font-medium text-blue-700">{`Question ${
                index + 1
              }`}</h3>
              <p className="text-gray-800 font-medium">{item.question}</p>
              <p className="italic text-gray-600 mt-1">Type:- {item.type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionListContainer;
