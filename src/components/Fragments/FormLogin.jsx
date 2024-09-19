import { React, useEffect, useRef, useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { login } from "../../services/auth.service";

const FormLogin = () => {
    const [loginFailed, setLoginFailed] = useState("");
    const handleLogin = (event) => {
        event.preventDefault();
        // localStorage.setItem("email", event.target.email.value);
        // localStorage.setItem("password", event.target.password.value);
        // window.location.href = "/product";
        const data = {
            username: event.target.username.value,
            password: event.target.password.value,
        };
        login(data, (status, res) => {
            if (status) {
                localStorage.setItem("token", res);
                window.location.href = "/product";
            } else {
                setLoginFailed(res.response.data);
            }
        });
    };

    const usernameRef = useRef(null);

    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    return (
        <form onSubmit={handleLogin}>
            <InputForm
                label="Username"
                type="text"
                name="username"
                placeholder="john doe"
                ref={usernameRef}
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
            {loginFailed && (
                <p className="text-rose-500 my-2 text-center">{loginFailed}</p>
            )}
        </form>
    );
};

export default FormLogin;
