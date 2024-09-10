import React from 'react'
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <AuthLayouts title="Register">
            <FormRegister />
            <p className='text-center text-sm mt-5'> already have an account?
                <Link to="/login" className='font-bold text-blue-600'> Log In</Link>
            </p>
        </AuthLayouts>
    );
};

export default RegisterPage;