"use client";

import React, { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "context/cartcontext";
import { createClient } from "@sanity/client";
import { useSearchParams, useRouter } from "next/navigation";
import { Product } from "lib/types";

const sanity = createClient({
  projectId: "whi5midb",
  dataset: "production",
  apiVersion: "2025-01-17",
  useCdn: true,
});

const ProductsContent: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"] {
          _id,
          name,
          price,
          description,
          image {
            asset -> {
              url
            }
          },
          tags
        }`;
        const data = await sanity.fetch(query);
        const formattedData = data.map((product: any) => ({
          ...product,
          id: product._id,
          title: product.name,
          image_url: product.image.asset.url,
        }));
        setProducts(formattedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryParam]);

  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.tags.includes(selectedCategory))
    : products;

  const staticCategories = [
    "Ceramics",
    "Chairs",
    "Crockery",
    "Cutlery",
    "Plant Pots",
    "Tables",
    "Tableware"
  ];

  const dynamicCategories = Array.from(new Set(products.flatMap((p) => p.tags)));

  const uniqueCategories = Array.from(new Set([...staticCategories, ...dynamicCategories]));

  const handleCategoryClick = (category: string | null) => {
    if (category) {
      router.push(`/products?category=${encodeURIComponent(category)}`);
    } else {
      router.push(`/products`);
    }
  };

  if (loading) {
    return (
      <div className="p-4 text-center text-lg text-slate-700">
        Loading products...
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-3xl font-semibold text-center text-slate-800 mb-6">Product Collection</h2>

      <div className="flex flex-wrap gap-2 justify-center mb-6">
        <button
          onClick={() => handleCategoryClick(null)}
          className={`px-4 py-2 rounded-full ${!selectedCategory ? "bg-blue-600 text-white" : "bg-gray-300"}`}
        >
          All
        </button>
        {uniqueCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`px-4 py-2 rounded-full ${selectedCategory === cat ? "bg-blue-600 text-white" : "bg-gray-300"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col"
          >
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
              {/* Removed discountPercentage display as it is not in schema */}
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
    </div>
  );
};

const ProductsPage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsContent />
    </Suspense>
  );
};

export default ProductsPage;