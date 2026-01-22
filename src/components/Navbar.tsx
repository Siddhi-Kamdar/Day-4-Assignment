import React, { useState } from "react";
import { NavLink } from "react-router-dom";


import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

const Navbar: React.FC = () => {
    const [input, setInput] = useState("");
    const [open, setOpen] = useState(false);
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const totalQty = cartItems.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    return (
        <nav
            className="w-full flex items-center justify-between px-6 py-4 sticky top-0 z-50 bg-black"
            style={{
                backgroundColor: "var(--bg-color)",
                color: "var(--text-color)"
            }}
        >
            <h2 className="text-xl font-bold">E-Com</h2>

            <div className="flex gap-2">
                
                <NavLink
                    to="/shop/products"
                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                >
                    Products
                </NavLink>
                <NavLink
                    to="/shop/cart"
                    className={({ isActive }) =>
                        isActive || totalQty > 0
                            ? "nav-link active"
                            : "nav-link"
                    }
                >
                    Cart ({totalQty})
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                >
                    About
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;