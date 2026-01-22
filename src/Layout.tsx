import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "./components/Navbar";

export default function Layout() {
    return (
        <main className="max-w-7xl mx-auto px-6 py-4">
        <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
            <Outlet />
        </Suspense>
        </main>
    );
}