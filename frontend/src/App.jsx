import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LessonPage from "./pages/LessonPage";
import ProgressPage from "./pages/ProgresPage";
import QuizPage from "./pages/QuizPage";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lesson" element={<LessonPage />} />
      <Route path="/progress" element={<ProgressPage />} />
      <Route path="/quiz" element={<QuizPage />} />
    </Routes>
  );
}

export default App;
