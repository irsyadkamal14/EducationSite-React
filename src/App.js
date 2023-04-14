import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../src/pages/Main.jsx";
import Detail from "./pages/Detail.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail-book" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
