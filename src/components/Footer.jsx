import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { brands } from '../data/brands';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">QuickRepair<span className="text-accent"> Mysore</span></h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Premium appliance repair services in Mysore. Independent service provider for LG, Samsung, Whirlpool, Bosch, and more. Certified technicians and genuine parts.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2">Top AC Services</h4>
                        <ul className="space-y-3">
                            {brands.slice(0, 8).map(brand => (
                                <li key={brand.slug}>
                                    <Link
                                        to={`/services/ac/${brand.slug}/${brand.slug}-ac-repair-service-mysore`}
                                        className="text-gray-400 hover:text-accent transition-colors text-sm font-medium"
                                    >
                                        {brand.name} AC Service
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Service Centers */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2">City Service Centers</h4>
                        <ul className="grid grid-cols-1 gap-2 text-sm">
                            {brands.slice(0, 10).map(brand => (
                                <li key={brand.slug}>
                                    <Link to={`/service-center/${brand.slug}-service-center-mysore`} className="text-gray-400 hover:text-white transition-colors block py-0.5">
                                        {brand.name} Support Mysore
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal & Policies */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2">Legal & Support</h4>
                        <ul className="grid grid-cols-1 gap-2 text-sm text-gray-400">
                            <li><Link to="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link to="/legal/disclaimer" className="hover:text-white transition-colors">Legal Disclaimer</Link></li>
                            <li><Link to="/legal/refund" className="hover:text-white transition-colors">Refund & Warranty</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">About Our Experts</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Helpline</Link></li>
                        </ul>
                    </div>

                </div>

                {/* Contact Strip */}
                <div className="bg-gray-800/50 p-6 rounded-2xl flex flex-wrap justify-between items-center gap-6 mb-12">
                    <div className="flex items-center">
                        <Phone className="text-accent mr-3" size={24} />
                        <div>
                            <p className="text-gray-400 text-xs uppercase font-bold">Call Anytime</p>
                            <a href="tel:+919000000000" className="text-xl font-bold">+91 90000 00000</a>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Mail className="text-accent mr-3" size={24} />
                        <div>
                            <p className="text-gray-400 text-xs uppercase font-bold">Email Us</p>
                            <p className="text-xl font-bold">info@quickrepairmysore.com</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <MapPin className="text-accent mr-3" size={24} />
                        <div>
                            <p className="text-gray-400 text-xs uppercase font-bold">Our Location</p>
                            <p className="text-xl font-bold">Vijayanagar, Mysore</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                <p>© {new Date().getFullYear()} QuickRepair Mysore. All rights reserved. Independent service provider for multi-brand home appliances.</p>
                <div className="mt-4 flex justify-center space-x-6">
                    <Link to="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link to="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
