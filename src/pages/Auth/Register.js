import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "config/firebase";
import { Link } from "react-router-dom";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useAuthContext } from "contexts/AuthContext";


const initialState = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function Register() {
  const [state, setState] = useState(initialState);
  const { dispatch } = useAuthContext();

  const handleChange = (e) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const addTodB = async (user) => {
    let userData = {
      fullName: state.fullName,
      email: state.email,
      uid: user.uid,
      dateCreated: serverTimestamp(),
      isActive: true,
    };
    try {
      await setDoc(doc(firestore, "users", user.uid), userData);
      dispatch({ type: "SET_LOGGED_IN", payload: { user: userData } });
      console.log(userData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let { fullName, email, password, confirmPassword } = state;

    fullName = fullName.trim();

    if (fullName.length < 3) {
      return window.toastify("Please enter your full name", "error");
    }
    if (!window.isEmail(email)) {
      return window.toastify("Please enter a valid email address", "error");
    }
    if (password.length < 6) {
      return window.toastify("Password must be at least 6 chars.", "error");
    }
    if (confirmPassword !== password) {
      return window.toastify("Password doesn't match", "error");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        let user = userCredential.user;
        addTodB(user);
        console.log(userCredential);
        window.toastify("Registration success", "success");
      })
      .catch((error) => {
        console.error("error", error);
        switch (error.code) {
          case "auth/email-already-in-use":
            window.toastify("Email address already in use", "error");
            break;
          default:
            window.toastify("Something went wrong", "error");
            break;
        }
      });
  };

  return (
    <div className="login-page register-page">
      <div className="login-form-container">
        <form onSubmit={handleSubmit} className="p-4 rounded rounded-4">
        <h2 className="text-center text-white">Register</h2>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Full Name"
            name="fullName"
            required
          />
          <input
            onChange={handleChange}
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={handleChange}
            required
          />
          <button type="submit" className='btn btn-success mt-2 rounded rounded-4'>
            Register
          </button>
          <p className="text-center text-white">Already have an account?</p>
          <div class="d-flex justify-content-between">
          <Link to="/" className="text-white btn btn-info btn-sm w-25 rounded rounded-4">Home</Link>
          <Link to="/auth/login" className="text-white btn btn-danger btn-sm w-25 rounded rounded-4">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

























