import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";


const LoginForm = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errMsg, SeterrMsg] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add signup functionality here (e.g., API call)
    console.log(formData); // For testing
    navigate("/"); // Redirect to home page after signup
  };

  return (
    <div className="h-full bg-green flex flex-col justify-center py-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-2 text-center text-heading font-Display text-mehroon">
          Login
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-grey bg-opacity-70 border-2 border-orange rounded-lg mx-5 py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-md font-medium font-display text-mehroon"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-md font-medium font-display text-mehroon"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            {errMsg != "" && (
              <div className="text-base text-red-600 flex justify-start">
                {errMsg}
              </div>
            )}

            <div className="flex justify-center">
              <button
                type="submit"
                className="mx-6 w-1/2 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-mehroon ring-mehroon bg-opacity-80 hover:ring-2 focus:outline-none focus:bg-red-50 focus:text-mehroon"
              >
                Login
              </button>
            </div>
          </form>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <button
                onClick={props.move_to_signup}
                className="font-medium text-mehroon hover:text-red-700"
              >
                Sign Up here.
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  move_to_signup : PropTypes.func
};

LoginForm.defaultProps = {
  move_to_signup : () => {console.log("move to login btn pressed.")}
};

export default LoginForm;
