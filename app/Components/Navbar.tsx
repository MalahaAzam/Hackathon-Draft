"use client";

import React, { useEffect, useState } from 'react';
import { createClient } from '@sanity/client';
import Link from 'next/link';
import Image from 'next/image';

const sanity = createClient({
    projectId: 'whi5midb',
    dataset: 'production',
    apiVersion: '2025-01-17',
    useCdn: true,
});

const Navbar = () => {
    interface Category {
        _id: string;
        name: string;
        slug: { current: string };
    }

    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const query = `*[_type == "category"] {
                    _id,
                    name,
                    slug
                }`;
                const data = await sanity.fetch(query);
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <nav className="bg-white pt-10 p-4 md:px-20 px-4 flex justify-between items-center">
            <Image src="/Avion.png" alt="Avion Logo" width={80} height={80} className="md:mr-6" />
            <ul className="flex gap-8 overflow-x-auto whitespace-nowrap">
                <li className="inline-block"><Link href="/" className="text-black">Home</Link></li>
                <li className="inline-block"><Link href="/products" className="text-black">Products</Link></li>
                <li className="inline-block"><Link href="/cart" className="text-black">Cart</Link></li>
                {categories.map((category) => (
                    <li key={category._id} className="inline-block">
                        <Link href={`/products?category=${encodeURIComponent(category.name)}`} className="text-black">
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
