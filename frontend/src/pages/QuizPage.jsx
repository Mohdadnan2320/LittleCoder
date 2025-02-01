import { useState } from "react";
import LessonNavbar from "../components/LessonNavbar";

const PythonQuizPage = () => {
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizResult, setQuizResult] = useState(null);

  const quizData = [
    { question: "What is the correct file extension for Python files?", options: [".py", ".txt", ".java", ".html"], answer: ".py" },
    { question: "Which function is used to print something in Python?", options: ["print()", "echo()", "display()", "output()"], answer: "print()" },
    { question: "What keyword is used to define a function in Python?", options: ["def", "function", "func", "define"], answer: "def" },
    { question: "What data type is the result of 10 / 2 in Python?", options: ["int", "float", "str", "bool"], answer: "float" },
    { question: "Which of the following is a valid variable name in Python?", options: ["2var", "_var", "var name", "$var"], answer: "_var" },
    { question: "What does 'len()' function do in Python?", options: ["Counts characters", "Calculates length of a list or string", "Prints output", "Checks if variable exists"], answer: "Calculates length of a list or string" },
    { question: "Which Python statement is used to handle exceptions?", options: ["try...except", "if...else", "catch...throw", "begin...rescue"], answer: "try...except" },
    { question: "What does the 'input()' function do in Python?", options: ["Returns user input as string", "Prints text to screen", "Calculates mathematical expressions", "Returns a number"], answer: "Returns user input as string" },
    { question: "Which of the following is NOT a Python data type?", options: ["list", "int", "tuple", "array"], answer: "array" },
    { question: "Which of the following is the correct way to comment a single line in Python?", options: ["# This is a comment", "// This is a comment", "/* This is a comment */", "// comment"], answer: "# This is a comment" },
    { question: "Which operator is used to multiply two numbers in Python?", options: ["*", "/", "%", "+"], answer: "*" },
    { question: "Which of the following is used to create a new Python class?", options: ["class MyClass:", "new MyClass()", "create class MyClass", "def MyClass:"], answer: "class MyClass:" },
    { question: "What is the output of 3 * 2 in Python?", options: ["6", "5", "32", "None of the above"], answer: "6" },
    { question: "Which operator is used to compare two values for equality in Python?", options: ["==", "=", "!==", "==="], answer: "==" },
    { question: "What is the result of '5' + 5 in Python?", options: ["'55'", "10", "TypeError", "None of the above"], answer: "TypeError" },
  ];

  const handleQuizChange = (questionIndex, selectedOption) => {
    setQuizAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedOption,
    }));
  };

  const evaluateQuiz = () => {
    let score = 0;
    quizData.forEach((question, index) => {
      if (quizAnswers[index] === question.answer) {
        score++;
      }
    });
    setQuizResult(`You scored ${score} out of ${quizData.length}`);
  };

  return (
    <>
      <LessonNavbar />
      <div className="p-6 bg-gradient-to-r from-blue-400 to-purple-500 shadow-md text-white">
        <h1 className="text-3xl font-semibold mb-6 text-center">Python Quiz</h1>

        <div className="space-y-4">
          {quizData.map((question, index) => (
            <div key={index} className="p-4 border rounded-md bg-white text-black shadow-sm">
              <h3 className="text-xl font-medium">{question.question}</h3>
              <div className="mt-2 space-y-2">
                {question.options.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      onChange={() => handleQuizChange(index, option)}
                      className="w-4 h-4"
                    />
                    <label className="text-lg">{option}</label>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <button
            onClick={evaluateQuiz}
            className="w-full py-2 bg-green-500 text-white rounded-lg mt-4 hover:bg-green-600 transition duration-300"
          >
            Submit Quiz
          </button>

          {quizResult && (
            <h2 className="mt-6 text-xl text-center font-semibold">{quizResult}</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default PythonQuizPage;
