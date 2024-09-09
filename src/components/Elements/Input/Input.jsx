/* eslint-disable react/prop-types */
const Input = (props) => {
    const { type, placeholder, name } = props;
    return (
        <input type={type} name={name} id={name} className="text-sm border rounded w-full py-2 px-2 text-slate-700 placeholder:opacity-50" placeholder={placeholder} />
    );
};

export default Input;