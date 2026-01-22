import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

interface Product {
    id: number;
    title: string;
    category: string;
    price: number;
    thumbnail: string;
}

const fetchProducts = async (): Promise<Product[]> => {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data.products;
};

const ProductList: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { data, error, isLoading, isError } = useQuery<Product[], Error>({
        queryKey: ["products"],
        queryFn: fetchProducts,
    });

    if (isLoading) return <p>Loading products...</p>;
    if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;

    return (
        <div>
            {data!.map((product) => (
                <div
                    key={product.id}
                    className="m-4 border rounded-xl p-4 shadow-sm flex flex-col gap-2"
                >
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        style={{ maxWidth: "200px", borderRadius: "8px" }}
                    />

                    <h3>{product.title}</h3>
                    <p>Category: {product.category}</p>
                    <p>Price: ${product.price}</p>
                    <button
                        onClick={() => {
                            dispatch(
                                addToCart({
                                    productId: product.id,
                                    title: product.title,
                                    price: product.price,
                                    thumbnail: product.thumbnail,
                                    quantity: 1,
                                    customizationKey: "",
                                })
                            );
                            navigate("/shop/cart");
                        }}
                    >
                        Add to Cart
                    </button>
                    <button
                        className="mt-auto bg-blue-500 text-black py-1 rounded text-sm"
                        onClick={() => navigate(`/shop/product/${product.id}`)}
                    >
                        View Details
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;