import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Android', link: '/category/android' },
  { name: 'iPhone', link: '/category/iphone' },
  { name: 'Reviews', link: '/reviews' },
  { name: 'Comparisons', link: '/comparison' },
  { name: 'News', link: '/category/news' },
];

const CategoryList: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center mt-8">
      {categories.map((category) => (
        <Link
          key={category.name}
          to={category.link}
          className="m-2 p-4 bg-gray-200 text-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
