import React from 'react';
import MetaSEO from '../components/MetaSEO';
import HeroBanner from '../components/HeroBanner';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
    return (
        <div className="bg-white">
            <MetaSEO
                title="Contact Us | QuickRepair Mysore - 24/7 Support"
                description="Get in touch with QuickRepair Mysore. Professional appliance repair helpdesk. Call +91 90000 00000 for immediate assistance."
            />
            <HeroBanner
                title="Get In Touch"
                subtitle="We are here to help you with all your appliance repair needs in Mysore. Reach out to us anytime."
                onBookClick={() => document.getElementById('contact-info').scrollIntoView({ behavior: 'smooth' })}
                onCallClick={() => window.open('tel:+919000000000')}
            />

            <section id="contact-info" className="py-20 px-4 md:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Details */}
                        <div className="space-y-8">
                            <h2 className="text-4xl font-bold text-primary mb-8">Mysore Repair Helpdesk</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-12">
                                Our customer support team is available around the clock to assist you with booking, tracking, and warranty queries for all your home appliances.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <Phone className="text-primary mb-4" size={32} />
                                    <h4 className="font-bold text-gray-800 text-lg">Call Us</h4>
                                    <a href="tel:+919000000000" className="text-gray-600 hover:text-primary transition-colors text-lg font-medium">+91 90000 00000</a>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <Mail className="text-primary mb-4" size={32} />
                                    <h4 className="font-bold text-gray-800 text-lg">Email Us</h4>
                                    <p className="text-gray-600 text-lg font-medium">info@quickrepairmysore.com</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <MapPin className="text-primary mb-4" size={32} />
                                    <h4 className="font-bold text-gray-800 text-lg">Our Office</h4>
                                    <p className="text-gray-600 font-medium">Vijayanagar, Mysore, KA 570017</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <Clock className="text-primary mb-4" size={32} />
                                    <h4 className="font-bold text-gray-800 text-lg">Working Hours</h4>
                                    <p className="text-gray-600 font-medium">24/7 Doorstep Service</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden min-h-[400px] flex items-center justify-center relative border border-gray-100">
                            <div className="text-center p-8 z-10">
                                <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <MapPin className="text-primary" size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Service Map</h3>
                                <p className="text-gray-500">We cover all areas of Mysore Ward 1 to Ward 65</p>
                                <button className="mt-8 bg-primary text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-blue-800 transition-colors">
                                    Track Our Location
                                </button>
                            </div>
                            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
