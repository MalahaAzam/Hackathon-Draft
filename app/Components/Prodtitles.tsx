"use client";

import React, { useState, useEffect } from 'react';
import { createClient } from '@sanity/client';
import Image from 'next/image';
import Link from 'next/link';

const sanity = createClient({
  projectId: 'whi5midb',
  dataset: 'production',
  apiVersion: '2025-01-17',
  useCdn: true,
});

interface Product {
  title: string;
  id: string;
  price: number;
  description: string;
  discountPercentage: number;
  image_url: string;
  tags: string[];
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
      }`;
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

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} Added to cart`);
  };

  const truncateDescription = (description: string) => {
    return description.length > 100 ? description.substring(0, 100) + "..." : description;
  };

  const filteredProducts = selectedCategory
    ? products.filter(product => product.tags.includes(selectedCategory))
    : products;

  const uniqueCategories = Array.from(new Set(products.flatMap(p => p.tags)));

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='p-4'>
      <h2 className='lg:text-3xl text-center text-slate-800 mt-4 mb-4'>Product Collection</h2>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        <button
          className={`px-4 py-2 rounded-full ${!selectedCategory ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>
        {uniqueCategories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full ${selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Link href={`/DynamicProducts/${product.id}`} key={product.id}>
            <div className='bg-white p-4 rounded-lg gap-4 shadow-md transition-shadow duration-300 ease-in-out cursor-pointer'>
              <Image
                src={product.image_url}
                alt={product.title}
                width={300}
                height={300}
                className='w-full h-48 object-cover rounded-md'
              />

              <div className='mt-4'>
                <h3 className='text-slate-800 text-lg font-semibold'>{product.title}</h3>
                <p className='text-slate-600'>{truncateDescription(product.description)}</p>
                <div className='flex justify-between items-center mt-4'>
                  <p className='text-slate-800 text-lg font-bold'>£{product.price}</p>
                  {product.discountPercentage > 0 && (
                    <p className='text-sm text-green-600 line-through'>{product.discountPercentage}% OFF</p>
                  )}
                </div>
              </div>

              <div className='flex flex-wrap gap-2 mt-2'>
                {product.tags.map((tag, index) => (
                  <span key={index} className='text-xs bg-slate-400 text-black rounded-full px-2 py-1'>{tag}</span>
                ))}
              </div>

              <button
                onClick={(e) => {
                  e.preventDefault(); // Prevents Link navigation
                  addToCart(product);
                }}
                className='bg-blue-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700'
              >
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>

      {/* Cart Summary */}
      <div className='mt-8 bg-slate-200 p-6 rounded-lg shadow-md'>
        <h2 className="text-xl mb-2 font-black text-red-800">Cart Summary</h2>
        {cart.length > 0 ? (
          <ul className='space-y-4'>
            {cart.map((item, index) => (
              <li key={index} className='flex justify-between items-center bg-white shadow-sm p-4 rounded-md'>
                <div>
                  <p className='font-medium text-slate-900'>{item.title}</p>
                  <p className='text-base text-blue-600'>£{item.price.toFixed(2)}</p>
                </div>
                <Image
                  src={item.image_url}
                  alt={item.title}
                  width={100}
                  height={100}
                  className='rounded-md'
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-black text-center'>Your cart is empty. Please add products.</p>
        )}
      </div>
    </div>
  );
};

export default ProductCards;
