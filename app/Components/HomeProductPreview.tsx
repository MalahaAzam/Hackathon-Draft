"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "context/cartcontext";
import { createClient } from "@sanity/client";

const sanity = createClient({
  projectId: "whi5midb",
  dataset: "production",
  apiVersion: "2025-01-17",
  useCdn: true,
});

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  image_url: string;
  tags: string[];
}

export default function HomeProductPreview() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"] {
          _id,
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
        }[0...4]`; // limit to 4 products
        const data = await sanity.fetch(query);
        const formattedData = data.map((product: any) => ({
          ...product,
          id: product._id,
          image_url: product.image.asset.url,
        }));
        setProducts(formattedData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className="p-4">
      <h2 className="text-3xl font-semibold text-center text-slate-800 mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col">
            <Link href={`/DynamicProducts/${product.id}`}>
              <Image
                src={product.image_url}
                alt={product.title}
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
            </Link>
            <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
            <p className="text-slate-600">{product.description.slice(0, 100)}...</p>
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-bold text-slate-800">£{product.price}</p>
              {product.discountPercentage > 0 && (
                <p className="text-sm text-green-600">{product.discountPercentage}% OFF</p>
              )}
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {product.tags.map((tag, index) => (
                <span key={index} className="text-xs bg-slate-400 text-black rounded-full px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link href="/products">
          <button className="font-light text-sm bg-slate-700 rounded bg-opacity-15 py-2 px-3 lg:py-4 lg:px-6">
            Explore More Products
          </button>
        </Link>
      </div>
    </main>
  );
}
