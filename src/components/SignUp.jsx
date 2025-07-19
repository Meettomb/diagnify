import React, { useState, useEffect } from "react";

function SignUp({ handleSignUpClose, onSuccess }) {
  const [closing, setClosing] = useState(false);
  useEffect(() => {
    document.body.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      handleSignUpClose();
    }, 300);
  };

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const [showPassword2, setShowPassword2] = useState(false);
  const togglePassword2 = () => {
    setShowPassword2((prev) => !prev);
  };

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    day: "",
    month: "",
    year: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    const newErrors = {};

    const nameRegex = /^[A-Za-z\s]+$/;

    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (!nameRegex.test(form.firstName)) {
      newErrors.firstName = "First name can only contain letters";
    }

    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (!nameRegex.test(form.lastName)) {
      newErrors.lastName = "Last name can only contain letters";
    }

    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.mobile.trim()) newErrors.mobile = "Mobile number is required";
    if (!form.day || form.day < 1 || form.day > 31)
      newErrors.day = "Invalid day";
    if (!form.month || form.month < 1 || form.month > 12)
      newErrors.month = "Invalid month";
    const currentYear = new Date().getFullYear();
    if (!form.year || form.year < 1900 || form.year > currentYear)
      newErrors.year = "Invalid year";
    if (!form.password) newErrors.password = "Password is required";
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSuccess();
    }
  };

  return (
    <div>
      <div className="login_poup_container">
        <div className={`login_popup_main_div  ${closing ? "closing" : ""}`}>
          <i onClick={handleClose} className="fa-solid fa-xmark"></i>
          <h1>Register</h1>

          <form className="login_container" onSubmit={handleSubmit}>
            <div className="input_wrape">
              <label>First name</label>
              <input
                type="text"
                placeholder="First name"
                value={form.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
              <p>{errors.firstName}</p>
            </div>

            <div className="input_wrape">
              <label>Last name</label>
              <input
                type="text"
                placeholder="Last name"
                value={form.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
              />
              <p>{errors.lastName}</p>
            </div>

            <div className="input_wrape">
              <label>Email</label>
              <input
                type="email"
                placeholder="Email Id"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              <p>{errors.email}</p>
            </div>

            <div className="input_wrape">
              <label>Mobile number</label>
              <input
                type="text"
                placeholder="Mobile number"
                value={form.mobile}
                maxLength={10}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, "");
                  if (val.length <= 10) handleChange("mobile", val);
                }}
              />
              <p>{errors.mobile}</p>
            </div>

            <div className="input_wrape">
              <label>Date of Birth</label>
              <div className="dob_inputs">
                <input
                  type="number"
                  placeholder="DD"
                  min="1"
                  max="31"
                  value={form.day}
                  onChange={(e) => {
                    let val = e.target.value.slice(0, 2);
                    if (parseInt(val) > 31) val = "31";
                    if (parseInt(val) < 1 && val) val = "1";
                    handleChange("day", val);
                  }}
                />

                <input
                  type="number"
                  placeholder="MM"
                  min="1"
                  max="12"
                  value={form.month}
                  onChange={(e) => {
                    let val = e.target.value.slice(0, 2);
                    if (parseInt(val) > 12) val = "12";
                    if (parseInt(val) < 1 && val) val = "1";
                    handleChange("month", val);
                  }}
                />

                <input
                  type="number"
                  placeholder="YYYY"
                  min="1900"
                  max={new Date().getFullYear()}
                  value={form.year}
                  onChange={(e) => {
                    let val = e.target.value.slice(0, 4);
                    const year = parseInt(val);
                    const currentYear = new Date().getFullYear();

                    if (year > currentYear) val = currentYear.toString();
                    if (year < 1900 && val.length === 4) val = "1900";
                    handleChange("year", val);
                  }}
                />
              </div>
              <p>{errors.day || errors.month || errors.year}</p>
            </div>

            <div className="input_wrape password_wrap">
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
                } toggle-icon`}
                onClick={togglePassword}
              ></i>
            </div>
            <p>{errors.password}</p>

            <div className="input_wrape password_wrap">
              <label>Confirm Password</label>
              <input
                type={showPassword2 ? "text" : "password"}
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={(e) =>
                  handleChange("confirmPassword", e.target.value)
                }
              />
              <i
                className={`fa-regular ${
                  showPassword2 ? "fa-eye-slash" : "fa-eye"
                } toggle-icon`}
                onClick={togglePassword2}
              ></i>
            </div>
            <p>{errors.confirmPassword}</p>

            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
