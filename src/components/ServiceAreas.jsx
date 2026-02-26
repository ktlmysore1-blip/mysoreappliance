import React from 'react';
import { MapPin } from 'lucide-react';
import { locations } from '../data/brands';

const ServiceAreas = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {locations.map((area, index) => (
                <div
                    key={index}
                    className="flex items-center space-x-2 p-3 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                    <MapPin size={16} className="text-primary" />
                    <span className="text-gray-700 font-medium">{area}</span>
                </div>
            ))}
        </div>
    );
};

export default ServiceAreas;
