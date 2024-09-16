import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import React from "react";

const products = [
    {
        id: 1,
        name: "Sepatu 1",
        price: "Rp. 1.000.000",
        image: "/images/shoes-2.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, veniam temporibus alias a laboriosam quia, voluptatibus porro maiores commodi nostrum rem sequi molestiae? Provident odio nam dolores repudiandae esse velit.`,
    },
    {
        id: 2,
        name: "Sepatu 2",
        price: "Rp. 1.000.000",
        image: "/images/shoes-1.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, veniam temporibus alias a laboriosam quia, voluptatibus porro maiores commodi nostrum rem sequi molestiae? Provident odio nam dolores repudiandae esse velit.`,
    },
    {
        id: 3,
        name: "Sepatu 3",
        price: "Rp. 1.000.000",
        image: "/images/shoes-2.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, veniam temporibus alias a laboriosam quia, voluptatibus porro maiores commodi nostrum rem sequi molestiae? Provident odio nam dolores repudiandae esse velit.`,
    },
    {
        id: 4,
        name: "Sepatu 4",
        price: "Rp. 1.000.000",
        image: "/images/shoes-1.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, veniam temporibus alias a laboriosam quia, voluptatibus porro maiores commodi nostrum rem sequi molestiae? Provident odio nam dolores repudiandae esse velit.`,
    },
    {
        id: 5,
        name: "Sepatu 5",
        price: "Rp. 1.000",
        image: "/images/shoes-1.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, veniam temporibus alias a laboriosam quia, voluptatibus porro maiores commodi nostrum rem sequi molestiae? Provident odio nam dolores repudiandae esse velit.`,
    },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login";
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
            <div className="flex flex-wrap justify-center items-center  gap-3 py-20">
                {products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header image={product.image} />
                        <CardProduct.Body name={product.name}>
                            {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={product.price} />
                    </CardProduct>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
