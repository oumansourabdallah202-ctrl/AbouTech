import React from 'react';
import ComparisonTable from '../components/ComparisonTable';
import { phones } from '../data/phones';

const Comparison: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Phone Comparison</h1>
            <p className="text-center mb-8">
                Compare the latest phones side by side to find the perfect one for you.
            </p>
            <ComparisonTable phones={phones} />
        </div>
    );
};

export default Comparison;