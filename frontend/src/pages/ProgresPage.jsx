import { useState, useEffect } from "react";
import LessonNavbar from "../components/LessonNavbar";

const lessons = [
  { id: 1, title: "What is Python?" },
  { id: 2, title: "Installing Python" },
  { id: 3, title: "Print & Comments" },
  { id: 4, title: "Variables & Data Types" },
  { id: 5, title: "Loops & Conditionals" },
];

const ProgressPage = () => {
  const [completedLessons, setCompletedLessons] = useState([]);

  useEffect(() => {
    const savedLessons = JSON.parse(localStorage.getItem("completedLessons")) || [];
    setCompletedLessons(savedLessons);
  }, []);

  const progressPercentage = Math.round((completedLessons.length / lessons.length) * 100);

  return (
    <>
      <LessonNavbar />
      <div className="p-6 h-screen bg-gradient-to-r from-blue-500 to-purple-400 shadow-md text-white">
        <h2 className="text-2xl font-bold text-center mb-4">📊 Your Learning Progress</h2>
        <div className="w-full bg-gray-100 rounded-full h-4 mb-4">
          <div className="bg-yellow-400 h-4 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
        </div>
        <p className="text-lg font-semibold text-center">{progressPercentage}% Completed</p>

        <h3 className="text-lg font-bold mt-6">✅ Completed Lessons</h3>
        <ul className="list-disc pl-5 mt-2">
          {lessons
            .filter((lesson) => completedLessons.includes(lesson.id))
            .map((lesson) => (
              <li key={lesson.id} className="text-white">{lesson.title}</li>
            ))}
        </ul>

        <h3 className="text-lg font-bold mt-6">📌 Incomplete Lessons</h3>
        <ul className="list-disc pl-5 mt-2">
          {lessons
            .filter((lesson) => !completedLessons.includes(lesson.id))
            .map((lesson) => (
              <li key={lesson.id} className="text-black">{lesson.title}</li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default ProgressPage;

