# AbduTech

Welcome to the AbduTech project! This is a modern, professional website for a phone shop magazine that focuses on providing the latest news, reviews, and comparisons in the world of mobile technology.

## Project Structure

The project is organized as follows:

```
abdutech-site
├── public
│   └── index.html          # Main HTML entry point
├── src
│   ├── main.tsx           # Entry point for the React application
│   ├── App.tsx            # Main application component with routing
│   ├── pages               # Contains all page components
│   │   ├── Home.tsx       # Home page component
│   │   ├── Reviews.tsx    # Reviews page component
│   │   ├── Comparison.tsx  # Comparison page component
│   │   ├── Article.tsx     # Article page component
│   │   └── About.tsx      # About page component
│   ├── components          # Contains reusable components
│   │   ├── layout          # Layout components (Navbar, Footer)
│   │   ├── Hero.tsx       # Hero section component
│   │   ├── FeaturedPhones.tsx # Featured phones component
│   │   ├── PhoneCard.tsx   # Individual phone card component
│   │   ├── ReviewCard.tsx  # Individual review card component
│   │   ├── ComparisonTable.tsx # Comparison table component
│   │   ├── ArticleContent.tsx # Article content component
│   │   ├── NewsletterForm.tsx  # Newsletter subscription form
│   │   └── CategoryList.tsx     # Categories list component
│   ├── hooks               # Custom hooks
│   │   └── useSmoothScroll.ts # Hook for smooth scrolling
│   ├── styles              # Global CSS styles
│   │   └── index.css      # Main stylesheet
│   ├── data                # Data files
│   │   └── phones.ts      # Phone data for rendering
│   ├── types               # TypeScript types
│   │   └── index.ts       # Type definitions
│   └── utils               # Utility functions
│       └── seo.ts         # SEO-related functions
├── package.json            # npm configuration file
├── tsconfig.json           # TypeScript configuration file
├── tailwind.config.cjs     # Tailwind CSS configuration
├── postcss.config.cjs      # PostCSS configuration
├── vite.config.ts          # Vite configuration
└── README.md               # Project documentation
```

## Features

- **Responsive Design**: The website is fully responsive, providing an optimal viewing experience across devices.
- **Modern UI**: The design is clean, minimal, and futuristic, focusing on a premium feel.
- **Smooth Animations**: The site includes smooth animations and hover effects for an engaging user experience.
- **SEO-Friendly**: The project structure is optimized for search engines.

## Getting Started

To get started with the AbduTech project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd abdutech-site
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

Thank you for checking out AbduTech! We hope you enjoy exploring the latest in phone technology.