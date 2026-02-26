import React from 'react';
import MetaSEO from '../components/MetaSEO';
import HeroBanner from '../components/HeroBanner';
import { brands } from '../data/brands';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
    const serviceCategories = [
        {
            title: "Refrigerator Repair",
            icon: "🧊",
            description: "Single door, double door, side-by-side experts. Precision cooling restoration and gas charging.",
            link: "/service-center/lg-service-center-mysore"
        },
        {
            title: "Washing Machine",
            icon: "🧺",
            description: "Front load, top load, semi-automatic repair. Drum, motor, and PCB solutions for all brands.",
            link: "/service-center/samsung-service-center-mysore"
        },
        {
            title: "Microwave Repair",
            icon: "🍱",
            description: "Convection, grill, solo microwave servicing. Magnetron and touch panel replacements.",
            link: "/service-center/ifb-service-center-mysore"
        },
        {
            title: "AC Repair",
            icon: "❄️",
            description: "Split, window, inverter AC maintenance. Deep cleaning, gas filling, and installation services.",
            link: "/services/ac/lg/split-ac-repair-service-mysore"
        },
        {
            title: "LED/Smart TV",
            icon: "📺",
            description: "Screen, motherboard, audio issues fixed. Professional panel and backlight repair in Mysore.",
            link: "/service-center/sony-service-center-mysore"
        },
        {
            title: "Dishwasher Repair",
            icon: "🍽️",
            description: "Pump, motor, drainage solutions. Expert care for Bosch, IFB, and other premium dishwashers.",
            link: "/service-center/bosch-service-center-mysore"
        },
        {
            title: "OLED TV Repair",
            icon: "✨",
            description: "Premium panel repair for OLED screens. Specialized diagnostics for high-end display panels.",
            link: "/service-center/sony-service-center-mysore"
        },
        {
            title: "Projector Repair",
            icon: "📽️",
            description: "Lamp replacement, lens cleaning & repair. Servicing all major projector brands in Mysore.",
            link: "/service-center/sony-service-center-mysore"
        },
        {
            title: "QLED TV Repair",
            icon: "🌈",
            description: "Specialized QLED display diagnostics. Reliable repair for Samsung and other QLED models.",
            link: "/service-center/samsung-service-center-mysore"
        },
        {
            title: "Smart TV Repair",
            icon: "📱",
            description: "Software, wifi, and app connectivity fixes. Restoring smart features to your television.",
            link: "/service-center/sony-service-center-mysore"
        }
    ];

    return (
        <div className="bg-white">
            <MetaSEO
                title="Our Premium Services | QuickRepair Mysore - Expert Appliance Care"
                description="Comprehensive Appliance Care in Mysore. We repair Refrigerator, Washing Machine, AC, TV (LED, OLED, QLED), Microwave, Dishwasher, and Projectors."
            />
            <HeroBanner
                title="Our Premium Services"
                subtitle="Comprehensive Appliance Care in Mysore. Services Available in Mysore Only."
                onBookClick={() => document.getElementById('all-services').scrollIntoView({ behavior: 'smooth' })}
                onCallClick={() => window.open('tel:+919380238467')}
            />

            <section id="all-services" className="py-20 px-4 md:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-primary mb-4">Comprehensive Appliance Care in Mysore</h2>
                        <p className="text-gray-600">Expert solutions for every home appliance at your doorstep.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serviceCategories.map((service, index) => (
                            <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 flex flex-col group">
                                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                                <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                                <p className="text-gray-600 mb-8 flex-grow">{service.description}</p>
                                <Link to="/booking" className="bg-primary text-white py-3 px-6 rounded-xl font-bold text-center hover:bg-blue-800 transition-colors uppercase tracking-wider text-sm">
                                    Book Repair
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 md:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-primary mb-8">Brands We Specialize In</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {brands.map(brand => (
                            <Link key={brand.slug} to={`/service-center/${brand.slug}-service-center-mysore`} className="px-6 py-3 bg-blue-50 text-primary font-bold rounded-full border border-blue-100 hover:bg-primary hover:text-white transition-colors">
                                {brand.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
