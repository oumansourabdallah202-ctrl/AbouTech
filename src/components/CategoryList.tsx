import React from 'react';

const categories = [
  { name: 'Android', link: '/category/android' },
  { name: 'iPhone', link: '/category/iphone' },
  { name: 'Reviews', link: '/category/reviews' },
  { name: 'Comparisons', link: '/category/comparisons' },
  { name: 'News', link: '/category/news' },
];

const CategoryList: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center mt-8">
      {categories.map((category) => (
        <a
          key={category.name}
          href={category.link}
          className="m-2 p-4 bg-gray-200 text-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          {category.name}
        </a>
      ))}
    </div>
  );
};

export default CategoryList;