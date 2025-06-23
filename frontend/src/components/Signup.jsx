import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaUser,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaCheck,
  FaArrowLeft,
  FaEnvelope,
} from 'react-icons/fa';
import { signupStyles } from '../assets/dummyStyles';

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    remember: true,
  });
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
        navigate('/login');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showToast, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.password) newErrors.password = 'Password is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowToast(true);
    }
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  return (
    <div className={signupStyles.page}>
      {/* Back to Login */}
      <Link
        to="/login"
        className={signupStyles.backLink}
      >
        <FaArrowLeft className="mr-2" />
        Back to Login
      </Link>

      {/* Toast Notification */}
      {showToast && (
        <div className={signupStyles.toast}>
          <FaCheck className="mr-2" />
          Account created successfully!
        </div>
      )}

      {/* Signup Card */}
      <div className={signupStyles.signupCard}>
        {/* Logo Avatar */}
        <div className={signupStyles.logoContainer}>
          <div className={signupStyles.logoOuter}>
            <div className={signupStyles.logoInner}>
              <FaUser className={signupStyles.logoIcon} />
            </div>
          </div>
        </div>

        <h2 className={signupStyles.title}>
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className={signupStyles.form}>
          {/* Name Field */}
          <div className={signupStyles.inputContainer}>
            <FaUser className={signupStyles.inputIcon} />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className={signupStyles.input}
            />
            {errors.name && <p className={signupStyles.error}>{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div className={signupStyles.inputContainer}>
            <FaEnvelope className={signupStyles.inputIcon} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className={signupStyles.input}
            />
            {errors.email && <p className={signupStyles.error}>{errors.email}</p>}
          </div>

          {/* Password Field */}
          <div className={signupStyles.inputContainer}>
            <FaLock className={signupStyles.inputIcon} />
            <input
              type={showPassword.password ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className={signupStyles.passwordInput}
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility('password')}
              className={signupStyles.toggleButton}
              aria-label={showPassword.password ? "Hide password" : "Show password"}
            >
              {showPassword.password ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && <p className={signupStyles.error}>{errors.password}</p>}
          </div>

          {/* Terms Agreement */}
          <div className={signupStyles.termsContainer}>
            <label className={signupStyles.termsLabel}>
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className={signupStyles.termsCheckbox}
                required
              />
              I agree to the Terms and Conditions
            </label>
          </div>

          <button
            type="submit"
            className={signupStyles.submitButton}
          >
            Sign Up
          </button>
        </form>

        <p className={signupStyles.signinText}>
          Already have an account?{" "}
          <Link to="/login" className={signupStyles.signinLink}>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;