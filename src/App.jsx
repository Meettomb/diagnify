import "./styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog.jsx";
import Header from "./components/Header.jsx";
import HomePage from "./components/HomePage.jsx";

function App() {
  return (
    <Router basename="/Diagnify">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/Blog" element={<Blog/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
