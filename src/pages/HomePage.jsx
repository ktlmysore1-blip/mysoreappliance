import React from 'react';
import { Link } from 'react-router-dom';
import { brands } from '../data/brands';
import MetaSEO from '../components/MetaSEO';
import HeroBanner from '../components/HeroBanner';
import BookingForm from '../components/BookingForm';
import AboutUs from '../components/AboutUs';
import WhyChoose from '../components/WhyChoose';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import ServiceAreas from '../components/ServiceAreas';
import CTA from '../components/CTA';

const HomePage = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "QuickRepair Mysore",
        "description": "Professional appliance repair services in Mysore for AC, Washing Machines, Refrigerators, and more.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Vijayanagar",
            "addressLocality": "Mysore",
            "addressRegion": "Karnataka",
            "postalCode": "570017",
            "addressCountry": "IN"
        },
        "telephone": "+919000000000",
        "url": "https://quickrepairmysore.com"
    };

    const scrollToBooking = () => {
        document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-white">
            <MetaSEO
                title="Expert Appliance Repair Mysore | AC, Washing Machine, Fridge Service"
                description="Best appliance repair service in Mysore. Same-day repair for LG, Samsung, Bosch & more. 90-min response time. Certified technicians. Book now!"
                schema={schema}
            />

            {/* Hero Section */}
            <HeroBanner
                title="Mysore's #1 Appliance Repair Service"
                subtitle="Quick, reliable, and professional doorstep service for all home appliances in Mysore. Certified technicians at your service."
                onBookClick={scrollToBooking}
                onCallClick={() => window.open('tel:+919000000000')}
            />

            {/* Booking Form Section */}
            <section id="booking-section" className="py-20 px-4 md:px-8 -mt-20 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <BookingForm />
                </div>
            </section>

            {/* About Us Section */}
            <AboutUs />

            {/* Services Section */}
            <section id="services" className="py-20 px-4 md:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h3 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Our Premium Services</h3>
                        <h2 className="text-4xl font-bold text-primary mb-4">Comprehensive Appliance Care in Mysore</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Services Available in Mysore Only. Expert repair and maintenance for your high-end appliances.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform h-full flex flex-col">
                            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-3xl">🧊</div>
                            <h4 className="text-xl font-bold text-gray-800 mb-2">Refrigerator Repair</h4>
                            <p className="text-gray-500 text-sm mb-6 flex-grow">Single door, double door, side-by-side experts.</p>
                            <Link to="/booking" className="bg-primary text-white text-center py-3 rounded-xl font-bold text-sm uppercase tracking-wide">Book Repair</Link>
                        </div>

                        <div className="p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform h-full flex flex-col">
                            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-3xl">🧺</div>
                            <h4 className="text-xl font-bold text-gray-800 mb-2">Washing Machine</h4>
                            <p className="text-gray-500 text-sm mb-6 flex-grow">Front load, top load, semi-automatic repair.</p>
                            <Link to="/booking" className="bg-primary text-white text-center py-3 rounded-xl font-bold text-sm uppercase tracking-wide">Book Repair</Link>
                        </div>

                        <div className="p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform h-full flex flex-col">
                            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-3xl">🍱</div>
                            <h4 className="text-xl font-bold text-gray-800 mb-2">Microwave Repair</h4>
                            <p className="text-gray-500 text-sm mb-6 flex-grow">Convection, grill, solo microwave servicing.</p>
                            <Link to="/booking" className="bg-primary text-white text-center py-3 rounded-xl font-bold text-sm uppercase tracking-wide">Book Repair</Link>
                        </div>

                        <div className="p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform h-full flex flex-col">
                            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-3xl">❄️</div>
                            <h4 className="text-xl font-bold text-gray-800 mb-2">AC Repair</h4>
                            <p className="text-gray-500 text-sm mb-6 flex-grow">Split, window, inverter AC maintenance.</p>
                            <Link to="/booking" className="bg-primary text-white text-center py-3 rounded-xl font-bold text-sm uppercase tracking-wide">Book Repair</Link>
                        </div>

                        <div className="p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform h-full flex flex-col">
                            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-3xl">📺</div>
                            <h4 className="text-xl font-bold text-gray-800 mb-2">LED/Smart TV</h4>
                            <p className="text-gray-500 text-sm mb-6 flex-grow">Screen, motherboard, audio issues fixed.</p>
                            <Link to="/booking" className="bg-primary text-white text-center py-3 rounded-xl font-bold text-sm uppercase tracking-wide">Book Repair</Link>
                        </div>

                        <div className="p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform h-full flex flex-col">
                            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-3xl">🍽️</div>
                            <h4 className="text-xl font-bold text-gray-800 mb-2">Dishwasher Repair</h4>
                            <p className="text-gray-500 text-sm mb-6 flex-grow">Pump, motor, drainage solutions.</p>
                            <Link to="/booking" className="bg-primary text-white text-center py-3 rounded-xl font-bold text-sm uppercase tracking-wide">Book Repair</Link>
                        </div>

                        <div className="p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform h-full flex flex-col">
                            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-3xl">✨</div>
                            <h4 className="text-xl font-bold text-gray-800 mb-2">OLED TV Repair</h4>
                            <p className="text-gray-500 text-sm mb-6 flex-grow">Premium panel repair for OLED screens.</p>
                            <Link to="/booking" className="bg-primary text-white text-center py-3 rounded-xl font-bold text-sm uppercase tracking-wide">Book Repair</Link>
                        </div>

                        <div className="p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform h-full flex flex-col">
                            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-3xl">📽️</div>
                            <h4 className="text-xl font-bold text-gray-800 mb-2">Projector Repair</h4>
                            <p className="text-gray-500 text-sm mb-6 flex-grow">Lamp replacement, lens cleaning & repair.</p>
                            <Link to="/booking" className="bg-primary text-white text-center py-3 rounded-xl font-bold text-sm uppercase tracking-wide">Book Repair</Link>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <Link to="/services" className="inline-block bg-accent text-white px-10 py-4 rounded-full font-bold hover:bg-orange-600 transition-all shadow-lg transform hover:scale-105">
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <WhyChoose />

            {/* Gallery Section */}
            <Gallery />

            {/* Brands Served Section */}
            <section id="brands" className="py-20 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h3 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Our Partners</h3>
                        <h2 className="text-4xl font-bold text-primary mb-4">Brands We Serve</h2>
                        <p className="text-gray-600">Authorized-quality service for all premium brands in Mysore.</p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {brands.map(brand => (
                            <Link
                                key={brand.slug}
                                to={`/service-center/${brand.slug}-service-center-mysore`}
                                className="p-8 bg-gray-50 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-white transition-all group border border-gray-100 shadow-sm"
                            >
                                <span className="text-2xl font-black italic tracking-tighter opacity-80 group-hover:opacity-100">
                                    {brand.name.toUpperCase()}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-4 md:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h3 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Testimonials</h3>
                        <h2 className="text-4xl font-bold text-primary mb-4">Happy Customers in Mysore</h2>
                    </div>
                    <Testimonials />
                </div>
            </section>

            {/* Service Areas Section */}
            <section className="py-20 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h3 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Locations</h3>
                        <h2 className="text-4xl font-bold text-primary mb-4">Service Areas in Mysore</h2>
                    </div>
                    <ServiceAreas />
                </div>
            </section>

            {/* CTA Section */}
            <CTA />
        </div>
    );
};

export default HomePage;
