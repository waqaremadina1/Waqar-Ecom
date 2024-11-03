import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useAuthContext } from "contexts/AuthContext";


export default function Login() {
  const { dispatch } = useAuthContext();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: "SET_LOGGED_IN", payload: { user } });
      } else {
        dispatch({ type: "SET_LOGGED_OUT" });
      }
    });
  }, [dispatch]);

  let initialState = { email: "", password: "" };
  const [state, setState] = useState(initialState);

  const handleChange = (e) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    let { email, password } = state;
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.toastify("Login success", "success");
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-credential":
            window.toastify("Wrong Email or Password", "error");
            break;
          default:
            window.toastify("Something went wrong or Network anomaly", "error");
            break;
        }
      });
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <form onSubmit={handleSubmit} className="p-4 rounded rounded-4">
        <h2 className="text-center text-white">Login</h2>
          <input
            type="email"
            placeholder="Email"
             onChange={handleChange}
            name="email"
            required
          />
          <input
            type="password"
            onChange={handleChange}
            placeholder="Password"
            name="password"
            required
          />
          <button type="submit" className="btn btn-success mt-2 rounded rounded-4">
            Login
          </button>
          
         <div class="d-flex justify-content-between">
         <Link to='/auth/forgotpassword'><p className="text-center text-white">Forgot Password</p></Link>
          <p className="text-center text-white">Need an account?</p>
          
         </div>

          <div class="d-flex justify-content-between">
          <Link to="/" className="text-white btn btn-info btn-sm w-25 rounded rounded-4">Home</Link>
          <Link to="/auth/register" className="text-white btn btn-danger btn-sm w-25 rounded rounded-4">Register</Link>
          </div>
        
        </form>
      </div>
    </div>
  );
}

