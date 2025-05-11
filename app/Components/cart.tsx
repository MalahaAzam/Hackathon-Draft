// components/Cart.tsx
"use client";

import { useCart } from "../../context/cartcontext";
import Image from "next/image";

const Cart = () => {
  const { cart, removeFromCart, clearCart }: { cart: { id: string; title: string; price: number; quantity: number; image_url: string }[]; removeFromCart: (id: string) => void; clearCart: () => void } = useCart();

  const total = cart.reduce((sum: number, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-black">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm"
              >
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>£{(item.price * item.quantity).toFixed(2)}</p>
                  <button
                    className="text-red-600 text-sm mt-2"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
                <Image
                  src={item.image_url}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="rounded"
                />
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between items-center">
            <p className="text-xl font-bold text-black">Total: £{total.toFixed(2)}</p>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
