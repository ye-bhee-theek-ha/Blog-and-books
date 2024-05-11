import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const SignupForm = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    Repassword: "",
  });

  const [errMsg, SeterrMsg] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!(formData.password == formData.Repassword)) {
      SeterrMsg("Passwords do not Match.");
      return false;
    }

    // Add signup functionality here (e.g., API call)
    console.log(formData); // For testing
    navigate("/"); // Redirect to home page after signup
  };

  return (
    <div className="h-full bg-green flex flex-col justify-center py-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-2 text-center text-heading font-Display text-mehroon">
          Sign up
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-grey bg-opacity-70 border-2 border-orange rounded-lg mx-5 py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-md font-medium font-display text-mehroon"
              >
                Username
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
            </div>

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

            <div>
              <label
                htmlFor="password"
                className="block text-md font-medium font-display text-mehroon"
              >
                Re-Enter Password
              </label>
              <div className="mt-1">
                <input
                  id="Repassword"
                  name="Repassword"
                  type="Repassword"
                  autoComplete="new-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={formData.Repassword}
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
                Sign up
              </button>
            </div>
          </form>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <button
                className="font-medium text-mehroon hover:text-red-700"
                onClick={props.move_to_login}
              >
                Log in here
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

SignupForm.propTypes = {
    move_to_login : PropTypes.func
};

SignupForm.defaultProps = {
    move_to_login : () => {console.log("move to login btn pressed.")}
};

export default SignupForm;
