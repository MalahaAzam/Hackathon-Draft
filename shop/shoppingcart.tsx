import React from 'react';
import Image from 'next/image';

export default function Shoppingcart() {
  const cartItems = [
    {
      id: 1,
      name: 'Graystone vase',
      image: '/graystonevase.png',
      price: 29.99,
      quantity: 1,
      description: 'A timeless ceramic vase with a tri-color grey glaze.',
    },
    {
      id: 2,
      name: 'Basic white vase',
      image: '/basicwhitevase.png',
      price: 19.99,
      quantity: 1,
      description: 'Beautiful and simple, this is one for the classics.',
    },
  ];

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <main className="bg-[#F9F9F9] p-4 px-32 pt-10">
      <h3 className="md:text-2xl text-md font-bold mb-3 md:mb-10">Your Shopping Cart</h3>


      <div className="grid grid-cols-1 gap-4">

      <div className='md:flex hidden '>
                <p className='text-left mr-auto'>Product</p>
                   <div className='text-end'>
                      <p>Quantity</p>
                  </div>
              </div>

          {cartItems.map((item) => (
         <div key={item.id} className="bg-white p-4 rounded shadow-sm">

            <div className="md:flex items-center text-xs md:text-base">
              
              <div >
                 <Image src={item.image} alt={item.name} width={100} height={100} className="mr-4" />
              </div>
                      <div className='md:w-2/4 mr-auto'>
                         <h4 className=" text-sm md:text-lg font-semibold">{item.name}</h4>
                         <p className="text-gray-600 text-xs md:text-sm">{item.description}</p>
                         <p className="text-gray-600 text-xs md:text-sm mt-3 ">${item.price.toFixed(2)}</p>
                     </div>
                     <div className=''>
                         <p className="text-gray-600 text-right ml-5"> {item.quantity}</p>
                    </div>
            </div>
          </div>
        ))}
      </div>
      <div className="md:text-right text-center grid grid-cols-1 gap-1 rounded mt-8 p-4">
        <h4 className="text-base md:text-xl font-semibold">Sub Total</h4>
        <p className="text-gray-600 text-base md:text-xl" >Total: ${getTotal().toFixed(2)}</p>
        <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4  text-sm">Go to Checkout</button>
        </div>
        </div>
    </main>
  );
}