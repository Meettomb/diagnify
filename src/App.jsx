import "./styles/index.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog.jsx";
import Header from "./components/Header.jsx";
import HomePage from "./components/HomePage.jsx";
import LoginPopup from "./components/LoginPopup.jsx";
import SignUp from "./components/SignUp.jsx";
import Footer from "./components/Footer.jsx";
import Lung from "./components/Lung.jsx";
import BlogDetails from "./components/BlogDetails.jsx";
import Optic from "./components/Optic.jsx";
import Brain from "./components/Brain.jsx";



function App() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showSignUpPopup, setShowSignupPopup] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSignUpSuccess = () => {
    setShowSignupPopup(false);
    setShowLoginPopup(true);
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };

  return (
    <div>
      <Router>
        <Header
          onLoginClick={() => setShowLoginPopup(true)}
          onSignUpClick={() => setShowSignupPopup(true)}
        />
        {showLoginPopup && (
          <LoginPopup onClose={() => setShowLoginPopup(false)} />
        )}
        {showSignUpPopup && (
          <SignUp
            handleSignUpClose={() => setShowSignupPopup(false)}
            onSuccess={handleSignUpSuccess}
          />
        )}
        {showSuccessMessage && (
          <p className="success_message">
            <i className="fa-regular fa-circle-check"></i> Registration Complete
          </p>
        )}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/optic" element={<Optic />} />
          <Route path="/lung" element={<Lung />} />
          <Route path="/brain" element={<Brain />} />
          <Route path="/BlogDetails" element={<BlogDetails />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
