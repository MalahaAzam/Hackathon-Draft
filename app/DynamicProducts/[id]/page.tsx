"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";

const sanity = createClient({
  projectId: "whi5midb",
  dataset: "production",
  apiVersion: "2025-01-17",
  useCdn: true,
});

interface Product {
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  image_url: string;
  tags: string[];
}

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  console.log("Product ID:", id);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const query = `*[_type == "product" && _id == $id][0] {
        title,
        price,
        description,
        discountPercentage,
        image {
          asset -> {
            url
          }
        },
        tags
      }`;
      const data = await sanity.fetch(query, { id });

      if (data) {
        const formattedProduct = {
          title: data.title || "Untitled Product",
          price: data.price ?? 0,
          description: data.description || "No description available.",
          discountPercentage: data.discountPercentage ?? 0,
          image_url: data.image?.asset?.url || "",
          tags: data.tags || [], // Default to an empty array if undefined
        };
        setProduct(formattedProduct);
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <Image
        src={product.image_url}
        alt={product.title}
        width={600}
        height={600}
        className="rounded-lg"
      />
      <p className="mt-4">{product.description}</p>
      <p className="text-lg font-semibold mt-4">
        Price: £{product.price > 0 ? product.price.toFixed(2) : "Not available"}
      </p>
      {product.discountPercentage > 0 && (
        <p className="text-sm text-green-600 mt-2">
          {product.discountPercentage}% OFF
        </p>
      )}
      <div className="flex flex-wrap gap-2 mt-4">
        {product.tags.length > 0 ? (
          product.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-slate-400 text-black rounded-full px-2 py-1"
            >
              {tag}
            </span>
          ))
        ) : (
          <p className="text-sm text-gray-500">No tags available.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
