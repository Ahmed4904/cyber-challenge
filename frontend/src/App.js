import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login  from "./components/Login"
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Accueil from "./pages/Accueil";
import QuizList from "./components/QuizList";
import QuizPage from "./components/QuizPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/register" element={<Register />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/list-quiz" element={<QuizList />} />
          <Route path="/passer-quiz/:id" element={<QuizPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;