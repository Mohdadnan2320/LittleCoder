import { useState, useEffect } from "react";
import axios from "axios";
import CodeEditor from "@uiw/react-textarea-code-editor";
import LessonNavbar from "../components/LessonNavbar";

const lessons = [
  {
    id: 1,
    title: "🐍 What is Python?",
    description: "Python is a simple yet powerful programming language!",
    example: "print('Hello, Python!')",
  },
  {
    id: 2,
    title: "🔧 Installing Python",
    description: "Learn to install Python easily!",
    example: "# No coding example needed",
  },
  {
    id: 3,
    title: "📢 Print & Comments",
    description: "Say hello to the world with Python!",
    example: "print('Hello, World!') # This is a comment",
  },
  {
    id: 4,
    title: "📦 Variables & Data",
    description: "Store information with variables!",
    example: "name = 'Alice'\nage = 12\nprint(name, age)",
  },
  {
    id: 5,
    title: "🔄 Loops & Conditionals",
    description: "Repeat tasks and make decisions!",
    example: "for i in range(5): print(i)\nif a > b: print('A is greater')",
  },
];

const LessonPage = () => {
  const [selectedLesson, setSelectedLesson] = useState(lessons[0]);
  const [code, setCode] = useState(selectedLesson.example);
  const [feedback, setFeedback] = useState("");
  const [description, setDescription] = useState(selectedLesson.description);
  const [isLoading, setIsLoading] = useState(false);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [isDescriptionLoading, setIsDescriptionLoading] = useState(false);

  useEffect(() => {
    const savedLessons =
      JSON.parse(localStorage.getItem("completedLessons")) || [];
    setCompletedLessons(savedLessons);
  }, []);

  const isCompleted = completedLessons.includes(selectedLesson.id);

  const markAsCompleted = () => {
    if (!completedLessons.includes(selectedLesson.id)) {
      const updatedLessons = [...completedLessons, selectedLesson.id];
      setCompletedLessons(updatedLessons);
      localStorage.setItem("completedLessons", JSON.stringify(updatedLessons));
    }
  };

  const fetchDescription = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/description?lesson=${
          selectedLesson.title
        }`
      );
      setDescription(res.data.content);
    } catch (error) {
      console.error("Error fetching description:", error);
      setDescription("Failed to fetch description.");
    }
    setIsLoading(false);
  };

  const checkCode = async () => {
    setIsDescriptionLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/check`,
        {
          code,
          lesson: selectedLesson.title,
        }
      );
      setFeedback(res.data.content);
    } catch (error) {
      console.error("Error checking code:", error);
      setFeedback("Failed to check code.");
    }
    setIsDescriptionLoading(false);
  };

  return (
    <>
      <LessonNavbar />
      <div className="p-6 h-screen bg-gradient-to-r from-blue-400 to-purple-500  shadow-md text-white ">
        <h2 className="text-2xl font-bold text-center mb-4">
          🚀 Learn Python the Fun Way!
        </h2>

        <select
          className="w-full p-3 border rounded-lg text-black font-semibold hover:bg-yellow-300 cursor-pointer"
          onChange={(e) => {
            const lesson = lessons.find((l) => l.title === e.target.value);
            setSelectedLesson(lesson);
            setCode(lesson.example);
            setFeedback("");
            setDescription(lesson.description);
          }}
        >
          {lessons.map((lesson) => (
            <option
              key={lesson.id}
              value={lesson.title}
              className="p-2 text-lg"
            >
              {lesson.title}
            </option>
          ))}
        </select>

        <p className="mt-4 bg-white text-black p-4 rounded-lg shadow-lg">
          {description ? (
            description.includes("**") ? (
              description
                .split("\n")
                .filter((point) => point.includes("**"))
                .map((point, index) => {
                  const cleanPoint = point.replace(/\*\*/g, "").trim();
                  return (
                    <li key={index} className="text-gray-700 flex items-start">
                      <span className="mr-2">•</span> {cleanPoint}
                    </li>
                  );
                })
            ) : (
              <span>{description}</span> // Show plain text if no bullet points exist
            )
          ) : (
            <span>Loading description...</span>
          )}
        </p>

        <button
          onClick={fetchDescription}
          className="mt-4 px-6 py-3 text-lg bg-green-500 text-white rounded-lg hover:bg-green-600 shadow-md"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "📖 Learn More"}
        </button>

        <h3 className="text-xl font-semibold mt-6">🎮 Try It Yourself!</h3>
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <CodeEditor
            value={code}
            language="python"
            onChange={(e) => setCode(e.target.value)}
            className="border p-3 w-full  rounded-lg bg-gray-100"
            style={{
              fontSize: 15,
            }}
          />
        </div>

        <div className="flex flex-wrap gap-5">
          <button
            onClick={checkCode}
            className={`mt-4 px-6 py-3 text-lg bg-blue-500 text-white rounded-lg hover:bg-blue-600 shadow-md ${
              isDescriptionLoading ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={isDescriptionLoading}
          >
            {isDescriptionLoading ? "Loading..." : "📝 Check My Code"}
          </button>
          
          {feedback && (
            <div className="mt-4 p-4 bg-yellow-300 text-black rounded-lg">
              <h4 className="text-lg font-semibold">Feedback:</h4>
              <p className="mt-4 p-2 border rounded bg-gray-100">
                {feedback
                  .split("\n")
                  .filter((point) => point.includes("**"))
                  .map((point, index) => {
                    const cleanPoint = point.replace(/\*\*/g, "").trim();
                    return (
                      <li
                        key={index}
                        className="text-gray-700 flex items-start"
                      >
                        <span className=" mr-2"></span> {cleanPoint}
                      </li>
                    );
                  })}
              </p>
            </div>
          )}

          {!isCompleted ? (
            <button
              onClick={markAsCompleted}
              className="mt-4 px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 shadow-md"
            >
              ✅ Mark as Completed
            </button>
          ) : (
            <p className="mt-4 px-6 py-3 text-lg bg-green-500 text-white rounded-lg hover:bg-green-600 font-semibold">
              ✅ Lesson Completed
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default LessonPage;
