import "./styles/index.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./components/Blog.jsx";
import Header from "./components/Header.jsx";
import HomePage from "./components/HomePage.jsx";
import LoginPopup from "./components/LoginPopup.jsx";
import SignUp from "./components/SignUp.jsx";
import Footer from "./components/Footer.jsx";
import ImageUplode from "./components/ImageUplode.jsx";
import BlogDetails from "./components/BlogDetails.jsx";

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
            <Router basename="/diagnify">
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
                    <Route path="/uplode" element={<ImageUplode />} />
                    <Route path="/BlogDetails" element={<BlogDetails />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
