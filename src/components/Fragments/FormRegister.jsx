import React from 'react'
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
    return (
        <form action="">
            <InputForm label="Full Name" type="text" name="fullname" placeholder="John Doe" />
            <InputForm label="Email" type="email" name="email" placeholder="example@mail.com" />
            <InputForm label="password" type="password" name="password" placeholder="*****" />
            <InputForm label="Confirm Password" type="password" name="conformPassword" placeholder="*****" />
            <Button classname="bg-blue-600 w-full">Register</Button>
        </form>
    );
};

export default FormRegister;