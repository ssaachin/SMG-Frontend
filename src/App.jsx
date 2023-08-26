import React from 'react';

function ProductCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src="https://via.placeholder.com/300x200"
        alt="Product"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">Product Name</h2>
        <p className="text-gray-600">Product Description Lorem ipsum dolor sit amet.</p>
        <div className="mt-4">
          <span className="text-xl font-semibold">$99.99</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full float-right">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">E-Commerce Page</h1>
      <div className="grid p-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default App;
