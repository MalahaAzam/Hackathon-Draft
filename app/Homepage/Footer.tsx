import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2A254B] px-20 text-white py-8">
      <div className="container items-center mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center mt-5">

        <div className="lg:w-1/4 mb-6">
          <h3 className="text-lg font-semibold mb-4">Menu</h3>
          <ul className='space-y-4'>
            <li><Link href="#" className="text-gray-400 hover:text-white">New arrivals</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white">Best sellers</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white">Recently viewed</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white">Popular this week</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white">All products</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white">Crockery</Link></li>
          </ul>
        </div>

        <div className="lg:w-1/4 mb-6">
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className='space-y-4'>
            <li><Link href="#" className="text-gray-400 hover:text-white">Crockery</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white">Furniture</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white">Homeware</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white">Plant pots</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white">Chairs</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white">Crockery</Link></li>
          </ul>
        </div>

        <div className="lg:w-1/4 mb-6 ">
          <h3 className="text-lg font-semibold mb-4">Our Company</h3>
          <ul className='space-y-4'>
            <li><Link href="#" className="text-gray-400 hover:text-white">About us</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white">Vacancies</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white">Contact us</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white">Privacy</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white">Returns policy</Link></li>
          </ul>
        </div>

        <div className="lg:w-2/4 mb-6">
          <h3 className=" text-base lg:text-lg font-semibold mb-4">Join our mailing list</h3>
          <div className="relative">
            <input type="email" id="email" placeholder="your@email.com" className="w-full bg-[#FFFFFF26] px-4 py-2 border border-gray-700 focus:outline-none focus:border-blue-950" />
            <button type="submit" className="absolute right-0 top-0 px-4 py-2 bg-white text-[#2A254B] hover:bg-[#2A254B]">Sign up</button>
          </div>
        </div>
      </div>

<div className="flex justify-between items-center lg:mt-10 border-t-[1px] border-gray-400 font-satoshi">

      <p className="text-center text-sm lg:text-base mt-4 ">Copyright 2022 Avion LTD</p>
        <ul className="flex space-x-2 lg:space-x-4 lg:mt-4">
          <li>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Image src="/Linkedin.png" alt="LinkedIn" width={24} height={24} />
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Image src="/twitter.png" alt="Twitter" width={24} height={24} />
            </Link>
          </li>
          <li>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Image src="/pinterest.png" alt="pinterest" width={24} height={24} />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;