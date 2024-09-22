/* eslint-disable react/prop-types */
import React from "react";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const CardProduct = (props) => {
    const { children } = props;
    return (
        <div className="max-w-64 bg-gray-800 border border-gray-700 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 mt-4 group">
            {children}
        </div>
    );
};

export const Header = (props) => {
    const { image, id } = props;
    return (
        <div className="aspect-4/3 rounded-lg overflow-hidden relative">
            <Link to={`/product/${id}`}>
                <img
                    src={image}
                    alt="product"
                    className="object-cover  h-full w-full transform  group-hover:scale-105  transition duration-500 ease-in-out"
                />
            </Link>
        </div>
    );
};

export const Body = (props) => {
    const { children, name, id } = props;
    return (
        <div className="mx-5 my-3">
            <Link to={`/product/${id}`}>
                <h5 className="text-2xl font-bold tracking-tight text-white group-hover:text-gray-400 transition-colors truncate">
                    {name}
                </h5>
            </Link>
            <p className="text-sm text-gray-400   max-h-16 overflow-hidden ">
                {children}
            </p>
        </div>
    );
};

export const Footer = (props) => {
    const { price, id } = props;
    const dispatch = useDispatch();
    return (
        <div className="flex items-center justify-between mx-5 my-5">
            <span className="text-m font-bold text-white">
                {" "}
                {price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "usd",
                })}
            </span>
            <Button
                classname="bg-blue-600 "
                onClick={() => dispatch(addToCart({ id, qty: 1 }))}
            >
                Add To Cart
            </Button>
        </div>
    );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
