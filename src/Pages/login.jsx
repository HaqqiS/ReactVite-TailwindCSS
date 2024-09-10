import React from 'react'
import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from 'react-router-dom';
const LoginPage = () => {
    return (
        <AuthLayouts title="Login">
            <FormLogin />
            <p className='text-center text-sm mt-5'> dont have an account?
                <Link to="/register" className='font-bold text-blue-600'> Sign Up</Link>
            </p>
        </AuthLayouts>
    );
};

export default LoginPage;