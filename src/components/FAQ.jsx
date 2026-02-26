import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = ({ faqs }) => {
    const [openIndex, setOpenIndex] = React.useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                        onClick={() => toggle(index)}
                        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                    >
                        <span className="font-semibold text-gray-800">{faq.q}</span>
                        {openIndex === index ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-gray-400" />}
                    </button>
                    {openIndex === index && (
                        <div className="p-5 bg-gray-50 text-gray-600 border-t border-gray-200 animate-slide-down">
                            {faq.a}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQ;
