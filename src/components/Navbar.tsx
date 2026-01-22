import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar: React.FC = () => {
    const [input, setInput] = useState("");
    const [open, setOpen] = useState(false);

    return (
        <nav
            className="flex items-center justify-between p-4 gap-4"
            style={{
                backgroundColor: "var(--bg-color)",
                color: "var(--text-color)"
            }}
        >
            <h2 className="text-xl font-bold">E-Com</h2>

            <div className="flex gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Search products..."
                    className="w-64 px-3 py-2 rounded bg-white text-black outline-none"
                />
                <button
                    className="px-4 py-2 rounded bg-blue-500 text-black"
                >
                    Search
                </button>
                <NavLink
                    to="/shop"
                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                >
                    Products
                </NavLink>
                <NavLink
                    to="/cart"
                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                >
                    Cart
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                >
                    About
                </NavLink>
            </div>
            <button onClick={() => setOpen(true)} className="relative">
                🛒
            </button>
        </nav>
    );
};

export default Navbar;