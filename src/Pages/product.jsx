import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { React, useState } from "react";

const products = [
    {
        id: 1,
        name: "Sepatu Dior",
        price: 850000,
        image: "/images/shoes-2.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, veniam temporibus alias a laboriosam quia, voluptatibus porro maiores commodi nostrum rem sequi molestiae? Provident odio nam dolores repudiandae esse velit.`,
    },
    {
        id: 2,
        name: "Sepatu Mongkey",
        price: 500000,
        image: "/images/shoes-1.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, veniam temporibus alias a laboriosam quia, voluptatibus porro maiores commodi nostrum rem sequi molestiae? Provident odio nam dolores repudiandae esse velit.`,
    },
    {
        id: 3,
        name: "Sepatu Puma",
        price: 355000,
        image: "/images/shoes-2.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, veniam temporibus alias a laboriosam quia, voluptatibus porro maiores commodi nostrum rem sequi molestiae? Provident odio nam dolores repudiandae esse velit.`,
    },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
    const [cart, setCart] = useState([
        {
            id: 1,
            qty: 1,
        },
    ]);

    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login";
    };

    const handleAddToCart = (id) => {
        if (cart.find((item) => item.id === id)) {
            setCart(
                cart.map((item) =>
                    item.id === id ? { ...item, qty: item.qty + 1 } : item
                )
            );
        } else {
            setCart([...cart, { id, qty: 1 }]);
        }
    };

    return (
        <div className="container min-h-screen mx-auto relative">
            <nav className="bg-slate-800 h-20 w-full top-0 left-0 fixed z-[1] flex justify-between items-center px-20">
                <div className="text-white">Logo</div>
                <div className="space-x-4">
                    <a href="#" className="text-white">
                        {email}
                    </a>
                    <Button classname="bg-rose-600" onClick={handleLogout}>
                        Logout
                    </Button>
                </div>
            </nav>
            <div className="flex py-24">
                <div className="flex flex-wrap justify-center items-center  gap-3 w-4/6">
                    {products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image} />
                            <CardProduct.Body name={product.name}>
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer
                                price={product.price}
                                id={product.id}
                                handleAddToCart={handleAddToCart}
                            />
                        </CardProduct>
                    ))}
                </div>
                <div className="w-2/6">
                    <h1 className="text-3xl font-bold text-white mt-3">Cart</h1>
                    <table className="table-auto text-left border-separate  border-spacing-x-3">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => {
                                const product = products.find(
                                    (product) => product.id === item.id
                                );
                                return (
                                    <tr key={item.id}>
                                        <td>{product.name}</td>
                                        <td>
                                            {product.price.toLocaleString(
                                                "id-ID",
                                                {
                                                    style: "currency",
                                                    currency: "IDR",
                                                }
                                            )}
                                        </td>
                                        <td>{item.qty}</td>
                                        <td>
                                            {(
                                                item.qty * product.price
                                            ).toLocaleString("id-ID", {
                                                style: "currency",
                                                currency: "IDR",
                                            })}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
