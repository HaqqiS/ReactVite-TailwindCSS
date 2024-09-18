/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
    const { type, placeholder, name } = props;
    return (
        <input
            type={type}
            name={name}
            id={name}
            className="text-sm border rounded w-full py-2 px-2 text-slate-950 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder={placeholder}
            ref={ref}
        />
    );
});

export default Input;
