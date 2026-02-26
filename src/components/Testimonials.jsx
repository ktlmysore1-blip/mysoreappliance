import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Ramesh Kumar",
        area: "Vijayanagar, Mysore",
        text: "Excellent service! My LG AC had a gas leakage issue. The technician arrived within 2 hours and fixed it perfectly. Highly recommended.",
        rating: 5
    },
    {
        name: "Sowmya Rao",
        area: "Gokulam, Mysore",
        text: "Professional and polite staff. They serviced my Samsung washing machine and now it's working like new. Transparent pricing.",
        rating: 5
    },
    {
        name: "Anand M.",
        area: "Kuvempunagar, Mysore",
        text: "Very reliable service center for Bosch appliances. They use genuine parts and the service behavior is very good.",
        rating: 4
    }
];

const Testimonials = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-50 relative">
                    <Quote className="absolute top-4 right-4 text-gray-100 w-12 h-12" />
                    <div className="flex mb-4">
                        {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} size={16} className="text-yellow-400 fill-current" />
                        ))}
                    </div>
                    <p className="text-gray-600 mb-6 italic">"{t.text}"</p>
                    <div>
                        <p className="font-bold text-gray-800">{t.name}</p>
                        <p className="text-sm text-gray-500">{t.area}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Testimonials;
