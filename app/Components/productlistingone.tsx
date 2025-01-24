import Image from "next/image";

export default function ProductListing() {
  return (
    <main>
      {/* Product Section */}
      <div className="flex flex-col gap-3 lg:flex-row items-start p-6">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/DandyChair.png" // Replace with your image path
            alt="Dandy Chair"
            width={600}
            height={600}
            className="object-cover w-full h-auto"
          />
        </div>

        {/* Description Section */}
        <div className="w-full lg:w-1/2 lg:pl-12 lg:pt-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">The Dandy Chair</h2>
          <h3 className="text-xl text-gray-600 mb-6">$250</h3>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Description</h4>
            <p className="text-gray-700 leading-6 mb-4">
              A timeless design, with premium materials features as one of our
              most popular and iconic pieces. The dandy chair is perfect for any
              stylish living space with beech legs and lambskin leather
              upholstery.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Dimensions</h4>
            <div className="flex items-center gap-6 text-gray-700">
              <div>
                <p className="font-semibold">Height</p>
                <p>110cm</p>
              </div>
              <div>
                <p className="font-semibold">Width</p>
                <p>75cm</p>
              </div>
              <div>
                <p className="font-semibold">Depth</p>
                <p>50cm</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <p className="font-semibold">Amount:</p>
              <p>1</p>
            </div>
            <button className="bg-purple-700 text-white px-6 py-3 rounded-md">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
