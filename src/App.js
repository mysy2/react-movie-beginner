import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/react-movie-beginner/movie/:id" element={<Detail />} />
        <Route path="/react-movie-beginner/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
