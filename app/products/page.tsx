// "use client";

// import React, { useEffect, useState } from 'react';
// import { createClient } from "@sanity/client";
// import Image from 'next/image';

// const sanity = createClient({
//     projectId: 'cdejpbjp',
//     dataset: 'production',
//     apiVersion: '2025-01-18',
//     useCdn: true,
// });

// interface Product {
//     _id: string;
//     title: string;
//     price: number;
//     description: string;
//     discountPercentage: number; // Updated type
//     imageUrl: string;
//     productImage: {
//         asset: {
//             _ref: string;
//         };
//     };
//     tags: string[];
// }

// const ProductCards: React.FC = () => {
//     const [products, setProducts] = useState<Product[]>([]);
//     const [Cart, setCart] = useState<Product[]>([]);
//     const [loading, setLoading] = useState<boolean>(true); // Loading state
//     const [error, setError] = useState<string | null>(null); // Error state

//     const fetchProducts = async () => {
//         try {
//             const query = `
//             *[type == "product"] {
//                 _id,
//                 title,
//                 price,
//                 description,
//                 discountPercentage,
//                 "imageUrl": productImage.asset->url,
//                 tags
//             }
//             `;
//             const data = await sanity.fetch(query);
//             setProducts(data);
//         } catch (error) {
//             console.error("Failed to fetch products", error);
//             setError("Failed to fetch products. Please try again later."); // Set error message
//         }
//     };

//     const addToCart = (product: Product) => {
//         setCart((prevCart) => [...prevCart, product]);
//         alert(`${product.title} has been added to your cart!`);
//     };
//     function truncateDescription(description: string): string {
//         return description.length > 100 ? description.substring(0, 100) + "..." : description; // Implemented truncation
//     }

//     useEffect(() => {
//         fetchProducts();
//     }, []);



//     return (
//         <div className='p-4'>
//             <h2 className='text-center text-slate-800 mt-4 mb-4'>Products from API's Data</h2>

//             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
//                 {products.map((product) => (
//                 <div key={product._id} className='bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
//                     <Image 
//                     src={product.imageUrl} 
//                     alt={product.title} 
//                     width={300} 
//                     height={300} 
//                     className='w-full h-48 object-cover rounded-md' />

//                     <div className='mt-4'>
//                         <h3 className='text-lg font-semibold'>{product.title}</h3>
//                         <p className='text-slate-800 mt-2 text-sm'>{truncateDescription(product.description)}</p>
//                         <div className='flex justify-between items-center mt-4'>
//                             <div>
//                                 <p className='text-slate-600 font-bold'>{product.price}</p>
//                                 {product.discountPercentage > 0 && (
//                                     <p className='text-green-600 text-sm '>
//                                         {product.discountPercentage}% OFF
//                                     </p>
//                                 )}
//                             </div>
//                         </div>
                        
//                         <div className='mt-2 flex flex-wrap gap-2'>
//                              {product.tags.map((tag, index) => (
//                                 <span key={index} className='text-xs bg-slate-400 text-black rounded-full px-2 py-1'>
//                                     {tag}
//                                 </span>
//                              ))}
//                         </div>

//                         <button onClick={() => addToCart(product)} className='mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700'>
//                             Add to Cart 
//                         </button>
//                     </div>
//                         <div className='mt-8 bg-slate-100 p-6 rounded-lg shadow-md'>
//                               <h2 className='text-lg font-bold text-black '>Cart Summary</h2>
//                               {Cart.length > 0 ? (
//                                 <ul className='space-y-4'>
//                                     {Cart.map((item, index) => (
//                                         <li key={index} className='flex justify-between items-center bg-white shadow-sm p-4 rounded-md'>
//                                             <div>
//                                                 <p className='font-medium text-slate-900'>{item.title}</p>
//                                                 <p className='text-sm text-blue-600'>${Number(item.price).toFixed(2)}</p>
//                                             </div>
//                                             <Image
//                                             src={item.imageUrl}
//                                             alt={item.title}
//                                             width={50}
//                                             height={50}
//                                             className='rounded-md'/>
//                                         </li> 
//                                     ))}
//                                 </ul>
//                               ) : ( <p>No items in cart.</p>                                
//                               )}

//                         </div> 

//                     </div>
                
//               ))}
//             </div>
//         </div>
//     );
// };

// export default ProductCards;


"use client";

import React, { useState, useEffect } from 'react';
import { createClient } from '@sanity/client';
import Image from 'next/image';

const sanity = createClient({
    projectId: 'cdejpbjp',
    dataset: 'production',
    apiVersion: '2025-01-18',
    useCdn: true,
});

interface Product {
    title: string;
    id: string;
    titte: string;
    price: number;
    description: string;
    discountPercentage: number;
    image_url: string;
    productImage: {
        asset: {
            _ref: string;
        };
    };
    tags: string[];
}

const ProductCards: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);

    const fetchProducts = async () => {
        try {
            const query = `*[_type == "product"] {
                _id,
                title,
                price,
                description,
                discountPercentage,
                "imageUrl": productImage.asset->url,
                tags
            }`;
            const data = await sanity.fetch(query);
            console.log("Fetched data:", data);
            setProducts(data);
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

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className='p-4'>
            <h2 className='text-center text-slate-800 mt-4 mb-4'>Products from API</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className='bg-white p-4 rounded-lg gap-4 shadow-md transition-shadow duration-300 ease-in-out'>
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
                                <span key={index} className='text-xs bg-slate-400 text-black rounded-full x-2 py-1'>{tag}</span>
                            ))}
                        </div>

                        <button onClick={() => addToCart(product)} className='bg-blue-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700 '>Add to Cart</button>
                    </div>
                ))}
            </div>

            <div className='mt-8 bg-slate-100 p-6 rounded-lg shadow-md'>
                <h2 className="text-lg font-black text-red-800">cart summary</h2>
                {cart.length > 0 ? (
                    <ul className='space-y-4'>
                        {cart.map((item, index) => (
                            <li key={index} className='flex justify-between items-center bg-white shadow-sm p-4 rounded-md'>
                                <div>
                                    <p className='font-medium text-slate-900'>{item.title}</p>
                                    <p className='text-sm text-blue-600'>${item.price.toFixed(2)}</p>
                                </div>
                                <Image
                                    src={item.image_url}
                                    alt={item.title}
                                    width={50}
                                    height={50}
                                    className='rounded-md' />
                            </li>
                        ))} 
                    </ul>
                ) : (
                    <p className='text-black text-center'>your cart is empty please add products</p>
                )}
            </div>
        </div>
    );
};

export default ProductCards;