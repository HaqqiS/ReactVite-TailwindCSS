/* eslint-disable react/prop-types */
import React from 'react'
const Button = (props) => {

    const { classname = "bg-green-400", children = "button" } = props;
    return (
        <button className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`} type="submit">
            {children}
        </button>
    );
};

export default Button;