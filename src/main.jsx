import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./Pages/register.jsx";
import LoginPage from "./Pages/login.jsx";
import ErrorPage from "./Pages/404.jsx";
import ProductsPage from "./Pages/products.jsx";
import ProfilePage from "./Pages/profile.jsx";
import DetailProductPage from "./Pages/detailProduct.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";
// import Navbar from "./components/Layouts/Navbar.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div> hellow wornd</div>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/products",
        element: <ProductsPage />,
    },
    {
        path: "/profile",
        element: <ProfilePage />,
    },
    {
        path: "/product/:id",
        element: <DetailProductPage />,
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            {/* <Navbar /> */}
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>
);
