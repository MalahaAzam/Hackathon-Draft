// pages/DynamicProducts/[id].tsx
"use client";


import React, { useState, useEffect } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";
import { useRouter } from "next/router";

const sanity = createClient({
  projectId: "whi5midb",  // replace with your actual project ID
  dataset: "production",  // replace with your actual dataset
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

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;  // Extract the product ID from the URL

  const [product, setProduct] = useState<Product | null>(null);

  const fetchProduct = async () => {
    if (!id) return;
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
      setProduct({
        title: data.title,
        price: data.price,
        description: data.description,
        discountPercentage: data.discountPercentage,
        image_url: data.image?.asset?.url || "",
        tags: data.tags || [],
      });
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading product details...</p>;

  return (
    <div>
      <h1>{product.title}</h1>
      <Image src={product.image_url} alt={product.title} width={600} height={600} />
      <p>{product.description}</p>
      <p>Price: £{product.price}</p>
      {product.discountPercentage > 0 && (
        <p>{product.discountPercentage}% OFF</p>
      )}
      <div>
        {product.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
