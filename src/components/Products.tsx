import React from "react";
import { useQuery } from "@tanstack/react-query";


interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
}

const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch("https://dummyjson.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  if (!Array.isArray(data.products)) {
    throw new Error("Invalid API response");
  }
  return data.products;
};

const ProductList: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60, 
  });

  if (isLoading) return <p>Loading products...</p>;
  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;
  if (!data || data.length === 0) return <p>No products found.</p>;

  return (
    <div>
      {data.map((product) => (
        <div
          key={product.id}
          className="m-4 border rounded-xl p-4 shadow-sm flex flex-col gap-2"
        >
          <h3>{product.title}</h3>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <button
              className="mt-auto bg-blue-500 text-black py-1 rounded text-sm"
           
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;