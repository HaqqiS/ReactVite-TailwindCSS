import CardProduct from "../components/Fragments/CardProduct";
import React from "react";

const ProductsPage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-slate-900 ">
            <CardProduct>
                <CardProduct.Header image="/public/images/shoes-2.jpg" />
                <CardProduct.Body title="Sepatu Baru">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    iusto, ipsam quibusdam harum reprehenderit possimus
                    explicabo beatae sequi dolore porro modi iure. Fugiat, id
                    ea. Ullam earum esse id eius.
                </CardProduct.Body>
                <CardProduct.Footer price="Rp. 1.000.000" />
            </CardProduct>

            <CardProduct>
                <CardProduct.Header image="/public/images/shoes-2.jpg" />
                <CardProduct.Body title="Sepatu Baru">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    iusto, ipsam quibusdam harum reprehenderit possimus
                    explicabo beatae sequi dolore porro modi iure. Fugiat, id
                    ea. Ullam earum esse id eius.
                </CardProduct.Body>
                <CardProduct.Footer price="Rp. 1.000.000" />
            </CardProduct>
        </div>
    );
};

export default ProductsPage;
