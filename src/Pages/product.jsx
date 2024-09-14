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

const ProductsPage = () => {
    return (
        <div className="flex flex-wrap justify-center items-center min-h-screen bg-slate-900 gap-3">
            {products.map((product) => (
                <CardProduct key={product.id}>
                    <CardProduct.Header image={product.image} />
                    <CardProduct.Body name={product.name}>
                        {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer price={product.price} />
                </CardProduct>
            ))}
            style
        </div>
    );
};

export default ProductsPage;
