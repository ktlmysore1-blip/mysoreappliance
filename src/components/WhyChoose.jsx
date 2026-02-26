import React from 'react';
import { Clock, ShieldCheck, UserCheck, CreditCard, Sparkles, Headphones } from 'lucide-react';

const WhyChoose = () => {
    const features = [
        {
            icon: <Clock className="text-primary" size={32} />,
            title: "90-Min Response",
            description: "We understand urgency. Our technicians reach your doorstep in Mysore within 90 minutes of booking."
        },
        {
            icon: <ShieldCheck className="text-primary" size={32} />,
            title: "Genuine Spares",
            description: "We only use 100% original spare parts with manufacturer warranty for all brand repairs."
        },
        {
            icon: <UserCheck className="text-primary" size={32} />,
            title: "Certified Experts",
            description: "Our technicians are factory-trained and background-verified for your safety and peace of mind."
        },
        {
            icon: <CreditCard className="text-primary" size={32} />,
            title: "Transparent Pricing",
            description: "No hidden charges. Get a clear estimate before the work starts. Pay only for what's fixed."
        },
        {
            icon: <Sparkles className="text-primary" size={32} />,
            title: "Same Day Repair",
            description: "95% of our repairs are completed on the same day. Fast, efficient, and hassle-free."
        },
        {
            icon: <Headphones className="text-primary" size={32} />,
            title: "Post-Service Support",
            description: "We provide 30 days service warranty and 90 days parts warranty on every single job."
        }
    ];

    return (
        <section id="why-choose" className="py-20 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h3 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Why Choose Us</h3>
                    <h2 className="text-4xl font-bold text-primary mb-4">The QuickRepair Advantage</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Experience the best appliance repair service in Mysore with our premium features designed for your convenience.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100 group">
                            <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h4>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
