/* eslint-disable react/prop-types */
import React from "react";
import Button from "../Elements/Button";
const CardProduct = (props) => {
    const { children } = props;
    return (
        <div className="max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 mx-2">
            {children}
        </div>
    );
};

export const Header = (props) => {
    const { image } = props;
    return (
        <a href="#">
            <img src={image} alt="product" className="p-5 rounded-t-lg" />
        </a>
    );
};

export const Body = (props) => {
    const { children, title } = props;
    return (
        <div className="px-6 pb-5">
            <a href="#">
                <h5 className="text-2xl font-bold tracking-tight text-white hover:text-gray-400 transition-colors">
                    {title}
                </h5>
            </a>
            <p className="text-sm text-gray-400 mt-2">{children}</p>
        </div>
    );
};

export const Footer = (props) => {
    const { price } = props;
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-m font-bold text-white">{price}</span>
            <Button classname="bg-blue-600">Add To Cart</Button>
        </div>
    );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
