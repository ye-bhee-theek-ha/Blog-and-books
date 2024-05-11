import React, { useState } from "react";
import PropTypes from "prop-types";
import { IconSearch, IconBooks } from "@tabler/icons-react";
import Button from "../../components/button/button";
import BookCard from "../../components/bookCard/bookCard";
import Card from "../../components/Card/Card";
import NotificationCard from "../../components/NotificationCard/NotificationCard";
import Navbar from "../../components/navbar/navbar";
import SignupForm from "../../components/SignupForm/SignupForm";
import LoginForm from "../../components/LoginForm/LoginForm";

const UserAuth = (props) => {
    const [Form, SetForm] = useState("Signup")

    const SetToSignup = () => {
        SetForm("Signup")
    }

    const SetToLogin = () => {
        SetForm("Login")
    }
  return (
    <div className="bg-lgreen">
        <Navbar />

        {Form == "Signup"?
            <SignupForm move_to_login={SetToLogin}/> :
            <LoginForm move_to_signup={SetToSignup}/>
        } 

    </div>
  );
};

UserAuth.propTypes = {};

UserAuth.defaultProps = {};

export default UserAuth;
