import { useState } from "react";
import { questions } from "../data/questions";

const TestForm = ({ onSubmit }) => {
  const [answers, setAnswers] = useState(
    Array(questions.length).fill({ type: "", answer: "" }),
  );

  const handleChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = { type: questions[index].type, answer, options: questions[index].options };
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const isComplete = answers.every((ans) => ans.answer !== "");
    // if (!isComplete) {
    //   alert("모든 질문에 답변해 주세요.");
    //   return;
    // }
    onSubmit(answers);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white rounded-lg">
      {questions.map((q, index) => (
        <div key={q.id} className="mb-10">
          <p className="font-semibold text-lg mb-3">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((option, i) => (
              <label
                key={i}
                className={`block p-3 border rounded-lg cursor-pointer transition-colors duration-300 ${
                  answers[index]?.answer === option ? "bg-gray-100" : ""
                } hover:bg-gray-100`}
              >
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={answers[index]?.answer === option}
                  onChange={() => handleChange(index, option)}
                  className="mr-2 text-primary-color"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition duration-300"
      >
        제출하기
      </button>
    </form>
  );
};

export default TestForm;
