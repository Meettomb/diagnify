import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Login({ onClose }) {
  const [closing, setClosing] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        handleClose();
      }, 2000);
    }
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div>
      <div className="login_poup_container">
        <div className={`login_popup_main_div ${closing ? "closing" : ""}`}>
          <i onClick={handleClose} className="fa-solid fa-xmark"></i>
          <h1>Login</h1>

          {showSuccess && (
            <p className="success_message">
              <i className="fa-regular fa-circle-check"></i> Login Successful
            </p>
          )}

          <form className="login_container" onSubmit={handleSubmit}>
            <div className="input_wrape">
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              <p>{errors.email}</p>
            </div>

            <div className="input_wrape" style={{ position: "relative" }}>
              <label>Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={form.password}
                onChange={(e) => handleChange("password", e.target.value)}
              />
              <i
                className={`fa-regular ${
                  showPassword ? "fa-eye-slash" : "fa-eye"
                }`}
                onClick={togglePassword}
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  right: "10px",
                  top: "36px",
                }}
              ></i>
              <p>{errors.password}</p>
            </div>

            <button type="submit">Login</button>
            <Link to="#">Forgot Password?</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
