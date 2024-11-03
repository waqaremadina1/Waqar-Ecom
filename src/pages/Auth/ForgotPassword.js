import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "config/firebase";


const initialState = {
    email: ""
}

export default function ForgotPassword() {


    const [state, setState] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false);


    const handleChange = (e) =>
        setState((s) => ({ ...s, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();

        let { email } = state;

        if (email < 5) {
            return window.toastify("Invalid email Address", "error");
        }


        console.log(email);

        setIsLoading(true);
        sendPasswordResetEmail(auth, email)
            .then(() => {
                return window.toastify("Password reset email sent!", "success");
                // Password reset email sent!
                // ..
            })
            .catch((error) => {
                console.error(error)
                return window.toastify("Something went wrong while sending email..", "error");
                // ..


            })
            .finally(() => {
                setIsLoading(false)
                setState(initialState)

            })


    };


return (
    <div className="login-page">
      <div className="login-form-container">
        <form  onSubmit={handleSubmit} className="p-4 rounded rounded-4">
        <h2 className="text-center text-white">Forgot Password</h2>
          <input type="email" placeholder="Email" onChange={handleChange} name="email" required/>
         
          <button type="submit" className="btn btn-success mt-2 rounded rounded-4">
            Reset Password
          </button>
          
         <div class="d-flex justify-content-between">
         
          <p className="text-center text-white">Need an account?</p>
          
         </div>

          <div class="d-flex justify-content-between">
          <Link to="/" className="text-white btn btn-info btn-sm w-25 rounded rounded-4">Home</Link>
          <Link to="/auth/login" className="text-white btn btn-danger btn-sm w-25 rounded rounded-4">Login</Link>
          </div>
        
        </form>
      </div>
      
    </div>
  );
}
