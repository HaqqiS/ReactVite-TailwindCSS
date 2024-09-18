import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { React, useEffect, useRef, useState } from "react";

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
    // state untuk menyimpan data cart
    // data cart berupa array of object yang berisi id produk, qty produk, dan harga produk
    const [cart, setCart] = useState([]);
    // state untuk menyimpan total harga dari cart
    // state ini digunakan untuk menampilkan total harga di halaman product
    const [totalPrice, setTotalPrice] = useState(0);
    /**
     * Saat component pertama kali di render, maka akan menjalankan useEffect ini.
     * Didalam useEffect ini, kita akan mengambil data cart yang tersimpan di localStorage
     * dan mengisikan ke state cart dengan menggunakan setCart.
     * Jika data cart tidak ada di localStorage, maka state cart akan diisi dengan array kosong.
     */
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || []);
    }, []);
    // Saat state cart berubah, maka akan menjalankan useEffect ini.
    // Didalam useEffect ini, kita akan menghitung total harga dari cart
    // dan mengisikan ke state totalPrice dengan menggunakan setTotalPrice.
    useEffect(() => {
        // Jika cart tidak kosong, maka hitung total harga nya
        if (cart.length > 0) {
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
    }, [cart]);

    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
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
            setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
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
                            <CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
                            <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart} />
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
                                const product = products.find((product) => product.id === item.id);
                                return (
                                    <tr key={item.id}>
                                        <td>{product.name}</td>
                                        <td>
                                            {product.price.toLocaleString("id-ID", {
                                                style: "currency",
                                                currency: "IDR",
                                            })}
                                        </td>
                                        <td>{item.qty}</td>
                                        <td>
                                            {(item.qty * product.price).toLocaleString("id-ID", {
                                                style: "currency",
                                                currency: "IDR",
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
