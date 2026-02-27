export interface Phone {
    id: string;
    name: string;
    image: string;
    rating: number;
    description: string;
    category: string;
}

export interface Review {
    id: string;
    phoneId: string;
    title: string;
    content: string;
    author: string;
    date: string;
    rating: number;
}

export interface Article {
    id: string;
    title: string;
    content: string;
    author: string;
    date: string;
    featuredImage: string;
}

export interface Category {
    id: string;
    name: string;
}