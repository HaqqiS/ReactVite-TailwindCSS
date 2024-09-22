/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";
import Button from "../Elements/Button";

const AuthLayouts = (props) => {
    const { children, title, type } = props;
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    // console.log("isDarkMode : ", isDarkMode);

    return (
        <div
            className={`flex justify-center min-h-screen items-center bg-slate-900 ${
                isDarkMode ? "bg-slate-900" : "bg-slate-100"
            } `}
        >
            <Button
                classname="absolute top-2 right-2 bg-neutral-900 text-white rounded-2xl"
                onClick={() => setIsDarkMode(!isDarkMode)}
            >
                {isDarkMode ? "☀️Light" : "🌑Dark"}
            </Button>
            <div className="w-full max-w-sm text-white bg-slate-800 rounded-lg shadow-lg p-8 ">
                <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
                <p className="font-medium mb-8">Welcome, Please enter your detail</p>
                {children}
                <Navigation type={type} />

                {/* <p className="text-center text-sm mt-5">
                    {type === "login"
                        ? "Don't have an account? "
                        : "already have an account? "}

                    {type === "login" && (
                        <Link
                            to="/register"
                            className="font-bold text-blue-600"
                        >
                            Sign Up
                        </Link>
                    )}
                    {type === "register" && (
                        <Link to="/login" className="font-bold text-blue-600">
                            Login
                        </Link>
                    )}
                </p> */}
            </div>
        </div>
    );
};

const Navigation = ({ type }) => {
    if (type === "login") {
        return (
            <p>
                Dont have an account?{" "}
                <Link to="/register" className="font-bold text-blue-600">
                    Sign Up
                </Link>
            </p>
        );
    } else {
        return (
            <p>
                Already have an account?{" "}
                <Link to="/login" className="font-bold text-blue-600">
                    Login
                </Link>
            </p>
        );
    }
};

export default AuthLayouts;
