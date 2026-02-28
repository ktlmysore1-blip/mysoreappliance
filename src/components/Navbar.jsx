import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown, Wrench, ShieldCheck, Info, BookOpen, FileText, Scale } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { brands } from '../data/brands';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        setActiveDropdown(null);
    }, [location]);

    const toggleDropdown = (name) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    const navLinkClass = `
        group relative py-2 font-bold transition-all duration-300 tracking-tight
        ${scrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-accent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]'}
    `;

    const dropdownBtnClass = `flex items-center space-x-1.5 outline-none ${navLinkClass}`;

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${scrolled || isOpen ? 'bg-white/95 backdrop-blur-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] py-1' : 'bg-gradient-to-b from-black/30 to-transparent py-3 md:py-5'}`}
            onMouseLeave={() => !isOpen && setActiveDropdown(null)}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                <div className="flex justify-between items-center h-14 md:h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex flex-col group relative transform transition-transform hover:scale-105">
                            <span className={`text-2xl md:text-3xl font-black italic tracking-tighter leading-none transition-colors ${scrolled || isOpen ? 'text-primary' : 'text-white'}`} style={{ filter: scrolled ? 'none' : 'drop-shadow(0 2px 10px rgba(0,0,0,0.5))' }}>
                                QUICK<span className="text-accent">REPAIR</span>
                            </span>
                            <span className={`text-[10px] uppercase font-black tracking-[0.4em] mt-1 transition-colors ${scrolled || isOpen ? 'text-gray-500' : 'text-blue-50'}`} style={{ filter: scrolled ? 'none' : 'drop-shadow(0 1px 5px rgba(0,0,0,0.5))' }}>
                                Mysore's Premium Service
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-10">
                        <div className="flex items-center space-x-8">
                            <Link to="/" className={navLinkClass}>Home</Link>

                            {/* Brands AC Service Dropdown */}
                            <div className="relative" onMouseEnter={() => setActiveDropdown('brands')}>
                                <button className={dropdownBtnClass} onClick={() => toggleDropdown('brands')}>
                                    <span>Brands</span>
                                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'brands' ? 'rotate-180 text-accent' : ''}`} />
                                </button>
                                {activeDropdown === 'brands' && (
                                    <div className="absolute top-full -left-20 pt-4 w-[520px]">
                                        <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-100 p-8">
                                            <h4 className="text-[11px] font-black text-accent uppercase tracking-widest mb-4">AC Service Centers in Mysore</h4>
                                            <div className="grid grid-cols-3 gap-x-6 gap-y-3">
                                                {brands.map(brand => (
                                                    <Link
                                                        key={brand.slug}
                                                        to={`/service-center/${brand.slug}-service-center-mysore`}
                                                        className="flex items-center text-gray-600 hover:text-primary transition-all text-sm font-semibold py-1"
                                                    >
                                                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2.5 flex-shrink-0"></span>
                                                        {brand.name} AC Service
                                                    </Link>
                                                ))}
                                            </div>
                                            <div className="mt-5 pt-4 border-t border-gray-100">
                                                <Link to="/services" className="inline-flex items-center text-primary font-bold text-sm hover:translate-x-1 transition-transform">
                                                    View All Services <Wrench size={14} className="ml-2" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Link to="/services" className={navLinkClass}>Services</Link>
                            <Link to="/about" className={navLinkClass}>About</Link>
                            <Link to="/contact" className={navLinkClass}>Contact</Link>

                            {/* Legal / Support Dropdown */}
                            <div className="relative" onMouseEnter={() => setActiveDropdown('legal')}>
                                <button className={dropdownBtnClass} onClick={() => toggleDropdown('legal')}>
                                    <span>Legal</span>
                                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'legal' ? 'rotate-180 text-accent' : ''}`} />
                                </button>
                                {activeDropdown === 'legal' && (
                                    <div className="absolute top-full right-0 pt-4 w-56">
                                        <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-100 py-3 overflow-hidden">
                                            {[
                                                { to: "/legal/privacy", icon: ShieldCheck, label: "Privacy Policy" },
                                                { to: "/legal/terms", icon: BookOpen, label: "Terms & Conditions" },
                                                { to: "/legal/disclaimer", icon: Info, label: "Disclaimer" },
                                                { to: "/legal/refund", icon: Scale, label: "Refund Policy" }
                                            ].map((item, idx) => (
                                                <Link key={idx} to={item.to} className="flex items-center px-6 py-3 text-gray-600 hover:bg-blue-50 hover:text-primary transition-all text-sm font-semibold">
                                                    <item.icon size={16} className="mr-3 text-gray-400" />
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <a
                            href="tel:+919380238467"
                            className="flex items-center bg-accent text-white px-6 py-3 rounded-xl font-black text-sm uppercase tracking-wider hover:bg-orange-600 transition-all transform hover:-translate-y-0.5 shadow-[0_10px_25px_-5px_rgba(255,152,0,0.4)] active:scale-95"
                        >
                            <Phone size={16} className="mr-2" />
                            Call Now
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2.5 rounded-xl transition-all ${scrolled || isOpen ? 'bg-blue-50 text-primary' : 'bg-white/10 text-white backdrop-blur-md border border-white/20'}`}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[85vh] opacity-100 bg-white shadow-2xl' : 'max-h-0 opacity-0'}`}>
                <div className="px-5 py-6 space-y-5 overflow-y-auto max-h-[calc(85vh-70px)]">
                    {/* Main nav links */}
                    <div className="grid grid-cols-2 gap-3 pb-4 border-b border-gray-100">
                        <Link to="/" className="text-gray-800 font-bold text-base py-2">Home</Link>
                        <Link to="/services" className="text-gray-800 font-bold text-base py-2">Services</Link>
                        <Link to="/about" className="text-gray-800 font-bold text-base py-2">About Us</Link>
                        <Link to="/contact" className="text-gray-800 font-bold text-base py-2">Contact</Link>
                        <Link to="/booking" className="text-gray-800 font-bold text-base py-2">Book Repair</Link>
                    </div>

                    {/* Brand AC Service Centers */}
                    <div>
                        <h4 className="text-[11px] font-black text-accent uppercase tracking-widest mb-3">Brand AC Service Centers</h4>
                        <div className="grid grid-cols-2 gap-2">
                            {brands.map(brand => (
                                <Link
                                    key={brand.slug}
                                    to={`/service-center/${brand.slug}-service-center-mysore`}
                                    className="py-2.5 px-3 bg-gray-50 rounded-lg text-sm font-semibold text-gray-700 hover:bg-primary hover:text-white transition-colors flex items-center"
                                >
                                    <span className="w-1 h-1 bg-accent rounded-full mr-2"></span>
                                    {brand.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Legal Pages */}
                    <div>
                        <h4 className="text-[11px] font-black text-accent uppercase tracking-widest mb-3">Legal & Policies</h4>
                        <div className="grid grid-cols-2 gap-2">
                            <Link to="/legal/privacy" className="py-2.5 px-3 bg-gray-50 rounded-lg text-sm font-semibold text-gray-600">Privacy Policy</Link>
                            <Link to="/legal/terms" className="py-2.5 px-3 bg-gray-50 rounded-lg text-sm font-semibold text-gray-600">Terms & Conditions</Link>
                            <Link to="/legal/disclaimer" className="py-2.5 px-3 bg-gray-50 rounded-lg text-sm font-semibold text-gray-600">Disclaimer</Link>
                            <Link to="/legal/refund" className="py-2.5 px-3 bg-gray-50 rounded-lg text-sm font-semibold text-gray-600">Refund Policy</Link>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-2">
                        <a href="tel:+919380238467" className="flex items-center justify-center bg-accent text-white w-full py-4 rounded-xl font-black text-lg shadow-lg active:scale-95 transition-transform">
                            <Phone size={22} className="mr-3" />
                            Call Now: 938 023 8467
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
