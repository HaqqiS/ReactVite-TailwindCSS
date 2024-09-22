import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import { useLogin } from "../../hooks/useLogin";
import { useSelector } from "react-redux";
const Navbar = () => {
    console.log("Navbar is rendering");
    const username = useLogin();
    const [totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data);

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty;
        }, 0);
        setTotalCart(sum);
    }, [cart]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    return (
        <nav className="bg-slate-800 h-20 w-full top-0 left-0 fixed z-10 flex justify-between items-center px-20">
            <div className="text-white">Logo</div>
            <div className="space-x-4 flex items-center">
                <a
                    href="/profile"
                    className="px-4 py-2 text-white capitalize  rounded-lg hover:bg-slate-700"
                >
                    {username}
                </a>
                <div className="px-4 py-2 text-white   rounded-lg hover:bg-slate-700">
                    🛒 {totalCart}
                </div>
                <Button classname="bg-rose-600" onClick={handleLogout}>
                    Logout
                </Button>
            </div>
        </nav>
    );
};

export default Navbar;
