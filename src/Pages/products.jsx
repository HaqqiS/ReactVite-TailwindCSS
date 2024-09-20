import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { React, useEffect, useRef, useState } from "react";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";

const ProductsPage = () => {
    //* state untuk menyimpan data cart
    // data cart berupa array of object yang berisi id produk, qty produk, dan harga produk
    const [cart, setCart] = useState([]);

    // * state untuk menyimpan total harga dari cart
    // state ini digunakan untuk menampilkan total harga di halaman product
    const [totalPrice, setTotalPrice] = useState(0);

    const [products, setProducts] = useState([]);

    const username = useLogin();

    /**
     ** Saat component pertama kali di render, maka akan menjalankan useEffect ini.
     * Didalam useEffect ini, kita akan mengambil data cart yang tersimpan di localStorage
     * dan mengisikan ke state cart dengan menggunakan setCart.
     * Jika data cart tidak ada di localStorage, maka state cart akan diisi dengan array kosong.
     */
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || []);
    }, []);

    useEffect(() => {
        getProducts((data) => {
            // console.log(data);
            setProducts(data);
        });
    });

    //* Saat state cart berubah, maka akan menjalankan useEffect ini.
    // Didalam useEffect ini, kita akan menghitung total harga dari cart
    // dan mengisikan ke state totalPrice dengan menggunakan setTotalPrice.
    useEffect(() => {
        // Jika cart tidak kosong, maka hitung total harga nya
        if (products.length > 0 && cart.length > 0) {
            // Buat variabel sum untuk menyimpan hasil perhitungan total harga
            const sum = cart.reduce((acc, item) => {
                // Cari produk yang id nya sama dengan item.id
                const product = products.find((product) => product.id === item.id);
                // Tambahkan harga produk yang dikalikan dengan qty produk
                // ke dalam variabel acc
                return acc + product.price * item.qty;
            }, 0);
            // Set state totalPrice dengan hasil perhitungan total harga
            setTotalPrice(sum);
            // Simpan state cart ke localStorage
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart, products]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    /**
     * Fungsi ini digunakan untuk menambahkan produk ke dalam cart.
     * Jika produk sudah ada dalam cart, maka qty produk akan ditambahkan 1.
     * Jika produk belum ada dalam cart, maka produk akan ditambahkan ke dalam cart dengan qty 1.
     * @param {number} id - id produk yang akan ditambahkan ke dalam cart
     */
    const handleAddToCart = (id) => {
        if (cart.find((item) => item.id === id)) {
            // Jika produk sudah ada dalam cart, maka qty produk akan ditambahkan 1
            setCart(
                cart.map((item) =>
                    item.id === id ? { ...item, qty: item.qty + 1 } : item
                )
            );
        } else {
            // Jika produk belum ada dalam cart, maka produk akan ditambahkan ke dalam cart dengan qty 1
            setCart([...cart, { id, qty: 1 }]);
        }
    };

    //useRef
    const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);
    // eslint-disable-next-line no-unused-vars
    const handleAddToCartRef = (id) => {
        cartRef.current = [...cartRef.current, { id, qty: 1 }];
        localStorage.setItem("cart", JSON.stringify(cartRef.current));
    };

    const totalPriceRef = useRef(null);
    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display = "table-row";
        } else {
            totalPriceRef.current.style.display = "none";
        }
    }, [cart]);

    return (
        <div className="container min-h-screen mx-auto relative">
            <nav className="bg-slate-800 h-20 w-full top-0 left-0 fixed z-[1] flex justify-between items-center px-20">
                <div className="text-white">Logo</div>
                <div className="space-x-4">
                    <Link
                        to="/profile"
                        className="px-4 py-2 text-white capitalize hover:border rounded-full hover:bg-slate-700"
                    >
                        {username}
                    </Link>
                    <Button classname="bg-rose-600" onClick={handleLogout}>
                        Logout
                    </Button>
                </div>
            </nav>
            <div className="flex py-24">
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
                                    handleAddToCart={handleAddToCart}
                                />
                            </CardProduct>
                        ))}
                </div>
                <div className="w-3/12">
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
                            {products.length > 0 &&
                                cart.map((item) => {
                                    const product = products.find(
                                        (product) => product.id === item.id
                                    );
                                    return (
                                        <tr key={item.id}>
                                            <td>{product.title.substring(0, 15)}...</td>
                                            <td>
                                                {product.price.toLocaleString("en-US", {
                                                    style: "currency",
                                                    currency: "usd",
                                                })}
                                            </td>
                                            <td>{item.qty}</td>
                                            <td>
                                                {(
                                                    item.qty * product.price
                                                ).toLocaleString("en-US", {
                                                    style: "currency",
                                                    currency: "usd",
                                                })}
                                            </td>
                                        </tr>
                                    );
                                })}
                            <tr className="font-bold" ref={totalPriceRef}>
                                <td colSpan={3}>Price</td>
                                <td>
                                    {totalPrice.toLocaleString("id-ID", {
                                        style: "currency",
                                        currency: "IDR",
                                    })}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
