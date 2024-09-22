/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
const TableCart = (props) => {
    const { products } = props;
    const cart = useSelector((state) => state.cart.data);
    const [totalPrice, setTotalPrice] = useState(0);
    const { isDarkMode } = useContext(DarkMode);

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

    const totalPriceRef = useRef(null);
    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display = "table-row";
        } else {
            totalPriceRef.current.style.display = "none";
        }
    }, [cart]);

    return (
        <table
            className={`table-auto text-left border-separate  border-spacing-x-3 ${
                isDarkMode ? "text-white" : "text-black"
            }`}
        >
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
                                    {(item.qty * product.price).toLocaleString("en-US", {
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
    );
};

export default TableCart;
