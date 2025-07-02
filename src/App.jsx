import "./styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog.jsx";
import Header from "./components/Header.jsx";
import HomePage from "./components/HomePage.jsx";

import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div>
      {loading && (
        <div className="loder">
          <img
            src={`${import.meta.env.BASE_URL}/images/loder.gif`}
            alt="loder"
          />
        </div>
      )}
      

      {!loading && (
        <Router basename="/diagnify">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/Blog" element={<Blog />}></Route>
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
