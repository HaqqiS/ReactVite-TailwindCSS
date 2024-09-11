import React from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
    return (
        <form action="">
            <InputForm
                label="Email"
                type="email"
                name="email"
                placeholder="example@mail.com"
            />
            <InputForm
                label="password"
                type="password"
                name="password"
                placeholder="*****"
            />
            <Button classname="bg-blue-600 w-full">Login</Button>
        </form>
    );
};

export default FormLogin;
