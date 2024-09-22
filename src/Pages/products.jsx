import CardProduct from "../components/Fragments/CardProduct";
import { React, useContext, useEffect, useState } from "react";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

const ProductsPage = () => {
    //* state untuk menyimpan data cart
    // data cart berupa array of object yang berisi id produk, qty produk, dan harga produk
    // const [cart, setCart] = useState([]);

    // * state untuk menyimpan total harga dari cart
    // state ini digunakan untuk menampilkan total harga di halaman product
    // const [totalPrice, setTotalPrice] = useState(0);

    const [products, setProducts] = useState([]);

    const { isDarkMode } = useContext(DarkMode);

    useLogin();

    /**
     ** Saat component pertama kali di render, maka akan menjalankan useEffect ini.
     * Didalam useEffect ini, kita akan mengambil data cart yang tersimpan di localStorage
     * dan mengisikan ke state cart dengan menggunakan setCart.
     * Jika data cart tidak ada di localStorage, maka state cart akan diisi dengan array kosong.
     */
    // useEffect(() => {
    //     setCart(JSON.parse(localStorage.getItem("cart")) || []);
    // }, []);

    useEffect(() => {
        getProducts((data) => {
            // console.log(data);
            setProducts(data);
        });
    });

    /**
     * Fungsi ini digunakan untuk menambahkan produk ke dalam cart.
     * Jika produk sudah ada dalam cart, maka qty produk akan ditambahkan 1.
     * Jika produk belum ada dalam cart, maka produk akan ditambahkan ke dalam cart dengan qty 1.
     * @param {number} id - id produk yang akan ditambahkan ke dalam cart
     */
    // const handleAddToCart = (id) => {
    //     if (cart.find((item) => item.id === id)) {
    //         // Jika produk sudah ada dalam cart, maka qty produk akan ditambahkan 1
    //         setCart(
    //             cart.map((item) =>
    //                 item.id === id ? { ...item, qty: item.qty + 1 } : item
    //             )
    //         );
    //     } else {
    //         // Jika produk belum ada dalam cart, maka produk akan ditambahkan ke dalam cart dengan qty 1
    //         setCart([...cart, { id, qty: 1 }]);
    //     }
    // };

    //useRef
    // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);
    // // eslint-disable-next-line no-unused-vars
    // const handleAddToCartRef = (id) => {
    //     cartRef.current = [...cartRef.current, { id, qty: 1 }];
    //     localStorage.setItem("cart", JSON.stringify(cartRef.current));
    // };

    return (
        <div className="container min-h-screen mx-auto relative">
            <Navbar />

            <div className={`flex py-24 ${isDarkMode ? "bg-slate-900" : "bg-slate-100"}`}>
                <div className="flex flex-wrap justify-center items-center  gap-4 w-9/12">
                    {products.length > 0 &&
                        products.map((product) => (
                            <CardProduct key={product.id}>
                                <CardProduct.Header
                                    image={product.image}
                                    id={product.id}
                                />
                                <CardProduct.Body name={product.title} id={product.id}>
                                    {product.description}
                                </CardProduct.Body>
                                <CardProduct.Footer
                                    price={product.price}
                                    id={product.id}
                                />
                            </CardProduct>
                        ))}
                </div>
                <div className="w-3/12">
                    <h1 className="text-3xl font-bold text-blue-500 mt-3">Cart</h1>
                    <TableCart products={products} />
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
