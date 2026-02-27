import React from 'react';

interface Phone {
    id: number;
    name: string;
    image: string;
    specs: { [key: string]: string | number };
}

interface ComparisonTableProps {
    phones: Phone[];
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ phones }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-gray-300 p-4">Phone</th>
                        {phones.map(phone => (
                            <th key={phone.id} className="border border-gray-300 p-4">
                                <img src={phone.image} alt={phone.name} className="w-16 h-16 object-cover mx-auto" />
                                <div className="mt-2">{phone.name}</div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {phones[0] && Object.keys(phones[0].specs).map(spec => (
                        <tr key={spec}>
                            <td className="border border-gray-300 p-4 font-bold">{spec}</td>
                            {phones.map(phone => (
                                <td key={phone.id} className="border border-gray-300 p-4">
                                    {phone.specs[spec]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ComparisonTable;