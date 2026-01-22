import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
}

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!productId) return;

    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch product");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <p>Loading product...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-6 flex flex-col gap-3">
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ maxWidth: "300px", borderRadius: "10px" }}
      />

      <h2 className="text-2xl font-bold">{product.title}</h2>
      <p>{product.description}</p>

      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Rating:</strong> ⭐ {product.rating}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
    </div>
  );
};

export default ProductDetail;
