import React from 'react';
import PhoneCard from './PhoneCard';
import { Phone } from '../types';

interface FeaturedPhonesProps {
  phones: Phone[];
}

const FeaturedPhones: React.FC<FeaturedPhonesProps> = ({ phones }) => {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Phones</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {phones.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedPhones;