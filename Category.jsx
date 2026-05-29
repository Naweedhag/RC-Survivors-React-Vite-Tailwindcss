import React from 'react';
import { FaSkull, FaCog, FaFilm, FaFlask } from 'react-icons/fa';

export const newsCategories = [
  {
    id: 1,
    name: "بازی‌ها",
    count: 45,
    icon: <FaSkull className="text-red-500 text-3xl" />,
  },
  {
    id: 2,
    name: "آپدیت‌ها",
    count: 28,
    icon: <FaCog className="text-blue-500 text-3xl" />,
  },
  {
    id: 3,
    name: "فیلم و سریال",
    count: 15,
    icon: <FaFilm className="text-purple-500 text-3xl" />,
  },
  {
    id: 4,
    name: "لور و رازها",
    count: 32,
    icon: <FaFlask className="text-green-500 text-3xl" />,
  },
];

function Category() {
  return (
    <div className='flex justify-between items-center gap-10 flex-wrap p-8'>
      {newsCategories.map((items) => (
        <div 
          key={items.id} 
          className="bg-blue-500 p-6 rounded-lg shadow-lg w-48 text-center text-white hover:bg-blue-600 hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <div className="flex justify-center mb-3">
            {items.icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{items.name}</h3>
          <span className="text-sm bg-white text-blue-600 px-3 py-1 rounded-full inline-block font-semibold">
            {items.count} خبر
          </span>
        </div>
      ))}
    </div>
  );
}

export default Category;