import { React, useEffect, useRef } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        localStorage.setItem("email", event.target.email.value);
        localStorage.setItem("password", event.target.password.value);
        window.location.href = "/product";
    };

    const emailRef = useRef(null);

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    return (
        <form onSubmit={handleLogin}>
            <InputForm
                label="Email"
                type="email"
                name="email"
                placeholder="example@mail.com"
                ref={emailRef}
            />
            <InputForm
                label="password"
                type="password"
                name="password"
                placeholder="*****"
            />
            <Button classname="bg-blue-600 w-full" type="submit">
                Login
            </Button>
        </form>
    );
};

export default FormLogin;
