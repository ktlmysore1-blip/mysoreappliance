import React from 'react';
import MetaSEO from './MetaSEO';

const LegalLayout = ({ title, lastUpdated, children }) => {
    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20 px-4 md:px-8">
            <MetaSEO
                title={`${title} | Mysore Home Appliances`}
                description={`${title} for Mysore Home Appliances appliance repair services. Read our legal policies and guidelines.`}
            />
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-primary p-8 md:p-12 text-white">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
                    <p className="text-blue-100 italic">Last Updated: {lastUpdated || new Date().toLocaleDateString()}</p>
                </div>
                <div className="p-8 md:p-12 prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LegalLayout;
