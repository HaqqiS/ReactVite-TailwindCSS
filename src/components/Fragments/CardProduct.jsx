/* eslint-disable react/prop-types */
import React from "react";
import Button from "../Elements/Button";
const CardProduct = (props) => {
    const { children } = props;
    return (
        <div className="max-w-64 bg-gray-800 border border-gray-700 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 mt-4 group">
            {children}
        </div>
    );
};

export const Header = (props) => {
    const { image } = props;
    return (
        <div className="aspect-4/3 rounded-lg overflow-hidden relative">
            <img
                src={image}
                alt="product"
                className="object-cover  h-full w-full transform  group-hover:scale-105  transition duration-500 ease-in-out"
            />
        </div>
    );
};

export const Body = (props) => {
    const { children, name } = props;
    return (
        <div className="mx-5 my-3">
            <a href="#">
                <h5 className="text-2xl font-bold tracking-tight text-white hover:text-gray-400 transition-colors truncate">
                    {name}
                </h5>
            </a>
            <p className="text-sm text-gray-400   max-h-16 overflow-hidden ">
                {children}
            </p>
        </div>
    );
};

export const Footer = (props) => {
    const { price, handleAddToCart, id } = props;
    return (
        <div className="flex items-center justify-between mx-5 my-5">
            <span className="text-m font-bold text-white">
                {" "}
                {price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "usd",
                })}
            </span>
            <Button classname="bg-blue-600 " onClick={() => handleAddToCart(id)}>
                Add To Cart
            </Button>
        </div>
    );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
