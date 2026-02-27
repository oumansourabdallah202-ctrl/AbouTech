export const phones = [
  {
    id: 1,
    name: "Phone Model A",
    image: "https://via.placeholder.com/400x300?text=Phone+A",
    rating: 4.5,
    description: "The latest in smartphone technology with cutting-edge features.",
    specs: {
      Price: "$999",
      RAM: "8GB",
      Storage: "128GB",
      Battery: "4000mAh",
      Camera: "12MP",
    },
  },
  {
    id: 2,
    name: "Phone Model B",
    image: "https://via.placeholder.com/400x300?text=Phone+B",
    rating: 4.7,
    description: "A powerful device with an exceptional camera and performance.",
    specs: {
      Price: "$1099",
      RAM: "12GB",
      Storage: "256GB",
      Battery: "4500mAh",
      Camera: "48MP",
    },
  },
  {
    id: 3,
    name: "Phone Model C",
    image: "https://via.placeholder.com/400x300?text=Phone+C",
    rating: 4.3,
    description: "A budget-friendly option with great functionality.",
    specs: {
      Price: "$499",
      RAM: "4GB",
      Storage: "64GB",
      Battery: "3500mAh",
      Camera: "8MP",
    },
  },
  {
    id: 4,
    name: "Phone Model D",
    image: "https://via.placeholder.com/400x300?text=Phone+D",
    rating: 4.8,
    description: "An innovative phone with a sleek design and advanced features.",
    specs: {
      Price: "$1299",
      RAM: "16GB",
      Storage: "512GB",
      Battery: "5000mAh",
      Camera: "108MP",
    },
  },
  {
    id: 5,
    name: "Phone Model E",
    image: "https://via.placeholder.com/400x300?text=Phone+E",
    rating: 4.6,
    description: "A versatile smartphone that meets all your needs.",
    specs: {
      Price: "$799",
      RAM: "8GB",
      Storage: "128GB",
      Battery: "4200mAh",
      Camera: "24MP",
    },
  },
];

// reviewsData can use the phones array or custom structure;
// here we'll build some sample reviews using a subset of phones
export const reviewsData = phones.map(phone => ({
  id: phone.id,
  phoneImage: phone.image,
  phoneName: phone.name,
  rating: phone.rating,
  shortDescription: phone.description,
}));

// export reviewsData for reviews page (currently same as phones, adjust if needed)
export const reviewsData = phones;