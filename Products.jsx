import React from 'react';
import { productsData } from '../data';

function Products() {
  // Take only first 10 items
  const displayProducts = productsData.slice(0, 10);

  return (
    <div>
      {/* Fancy Divider with Icon - KEPT ORIGINAL COLORS */}
      <div className="relative my-10">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-dashed border-gray-300"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-gradient-to-r from-red-500 to-blue-500 text-white px-8 py-3 rounded-full shadow-lg text-lg font-bold">
            🧟‍♂️ محصولات رزیدنت ایول 🧟‍♀️
          </span>
        </div>
      </div>

      <div className='flex justify-between items-center gap-10 flex-wrap p-8'>
        {displayProducts.map((item) => (
          <div 
            key={item.id} 
            className="bg-gradient-to-br from-blue-500 to-blue-700 p-4 rounded-xl shadow-xl w-48 text-center text-white hover:from-blue-600 hover:to-blue-800 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="flex justify-center mb-3">
              <div className="bg-blue-300 rounded-full p-3">
                {item.icon}
              </div>
            </div>
            <h3 className="text-sm font-bold mb-2 line-clamp-2">{item.name}</h3>
            <div className="flex justify-center gap-2 mb-2">
              <span className="text-lg font-bold text-yellow-300">${item.price}</span>
              {item.discount > 0 && (
                <span className="text-xs text-white line-through opacity-70">
                  ${(item.price * (1 + item.discount / 100)).toFixed(2)}
                </span>
              )}
            </div>
            <div className="flex justify-center items-center gap-2 mb-2">
              <span className="text-yellow-300 text-sm">★ {item.rating}</span>
              <span className={`text-xs ${item.inStock ? 'text-green-300' : 'text-red-300'}`}>
                {item.inStock ? 'موجود' : 'ناموجود'}
              </span>
            </div>
            <button className="w-full mt-2 bg-blue-400 hover:bg-blue-500 text-white font-bold py-1.5 px-3 rounded-lg text-sm transition-colors duration-300">
              خرید
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;