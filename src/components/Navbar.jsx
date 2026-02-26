import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown, Wrench, ShieldCheck, Info, BookOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { brands } from '../data/brands';
import { legalContent } from '../data/legal';

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

    // Close mobile menu and dropdowns on route change
    useEffect(() => {
        setIsOpen(false);
        setActiveDropdown(null);
    }, [location]);

    const toggleDropdown = (name) => {
        if (activeDropdown === name) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(name);
        }
    };

    const topBrands = brands.slice(0, 6); // Top 6 brands for the desktop dropdown

    const navLinkClass = (scrolled) => `
        group relative py-2 font-bold transition-all duration-300 tracking-tight
        ${scrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-accent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]'}
    `;

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${scrolled || isOpen ? 'bg-white/95 backdrop-blur-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] py-1' : 'bg-gradient-to-b from-black/30 to-transparent py-3 md:py-5'}`}
            onMouseLeave={() => !isOpen && setActiveDropdown(null)}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                <div className="flex justify-between items-center h-14 md:h-16">
                    {/* Logo - Centered alignment fix */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex flex-col group relative transform transition-transform hover:scale-105">
                            <span className={`text-2xl md:text-3xl font-black italic tracking-tighter leading-none transition-colors ${scrolled || isOpen ? 'text-primary' : 'text-white'}`} style={{ filter: scrolled ? 'none' : 'drop-shadow(0 2px 10px rgba(0,0,0,0.5))' }}>
                                QUICK<span className="text-accent">REPAIR</span>
                            </span>
                            <span className={`text-[10px] uppercase font-black tracking-[0.4em] mt-1.5 transition-colors ${scrolled || isOpen ? 'text-gray-500' : 'text-blue-50'}`} style={{ filter: scrolled ? 'none' : 'drop-shadow(0 1px 5px rgba(0,0,0,0.5))' }}>
                                Mysore's Premium Service
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation - Enhanced spacing and alignment */}
                    <div className="hidden lg:flex items-center space-x-14">
                        <div className="flex items-center space-x-12">
                            <Link to="/" className={navLinkClass(scrolled)}>Home</Link>

                            {/* Brands Dropdown */}
                            <div className="relative group" onMouseEnter={() => setActiveDropdown('brands')}>
                                <button
                                    className={`flex items-center space-x-2 outline-none ${navLinkClass(scrolled)}`}
                                    onClick={() => toggleDropdown('brands')}
                                >
                                    <span>Brands</span>
                                    <ChevronDown size={14} className={`transition-transform duration-500 ${activeDropdown === 'brands' ? 'rotate-180 text-accent' : ''}`} />
                                </button>

                                {activeDropdown === 'brands' && (
                                    <div className="absolute top-full -left-24 pt-6 w-[650px] animate-in fade-in slide-in-from-top-4 duration-500">
                                        <div className="bg-white rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.2)] border border-gray-50 p-10 grid grid-cols-3 gap-8">
                                            <div className="col-span-1 pr-8 border-r border-gray-100">
                                                <h4 className="text-[11px] font-black text-accent uppercase tracking-widest mb-5">Certified Centers</h4>
                                                <p className="text-[13px] text-gray-400 leading-relaxed font-medium">
                                                    Elite repair teams for premium electronics in Mysore.
                                                </p>
                                                <Link to="/services" className="mt-8 inline-flex items-center text-primary font-bold text-sm hover:translate-x-1 transition-transform">
                                                    All Services <Wrench size={16} className="ml-2" />
                                                </Link>
                                            </div>
                                            <div className="col-span-2 grid grid-cols-2 gap-x-10 gap-y-5">
                                                {brands.slice(0, 10).map(brand => (
                                                    <Link
                                                        key={brand.slug}
                                                        to={`/service-center/${brand.slug}-service-center-mysore`}
                                                        className="flex items-center text-gray-700 hover:text-primary transition-all group/item"
                                                    >
                                                        <span className="w-2 h-2 bg-blue-50 group-hover/item:bg-accent rounded-full mr-4 transition-colors"></span>
                                                        <span className="font-bold text-sm tracking-tight">{brand.name} Service</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Link to="/services" className={navLinkClass(scrolled)}>Services</Link>

                            {/* Support Dropdown */}
                            <div className="relative group" onMouseEnter={() => setActiveDropdown('legal')}>
                                <button
                                    className={`flex items-center space-x-2 outline-none ${navLinkClass(scrolled)}`}
                                    onClick={() => toggleDropdown('legal')}
                                >
                                    <span>Support</span>
                                    <ChevronDown size={14} className={`transition-transform duration-500 ${activeDropdown === 'legal' ? 'rotate-180 text-accent' : ''}`} />
                                </button>

                                {activeDropdown === 'legal' && (
                                    <div className="absolute top-full -left-4 pt-6 w-72 animate-in fade-in slide-in-from-top-4 duration-500">
                                        <div className="bg-white rounded-[2rem] shadow-[0_40px_100px_rgba(0,0,0,0.2)] border border-gray-50 py-6 overflow-hidden">
                                            {[
                                                { to: "/about", icon: Info, label: "About Us" },
                                                { to: "/legal/privacy", icon: ShieldCheck, label: "Privacy Policy" },
                                                { to: "/legal/terms", icon: BookOpen, label: "Terms of Service" },
                                                { to: "/legal/disclaimer", icon: Info, label: "Disclaimer" }
                                            ].map((item, idx) => (
                                                <Link key={idx} to={item.to} className="flex items-center px-8 py-4 text-gray-600 hover:bg-blue-50 hover:text-primary transition-all">
                                                    <item.icon size={18} className="mr-4 text-gray-300 group-hover:text-primary transition-colors" />
                                                    <span className="font-bold text-[13px]">{item.label}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Link to="/contact" className={navLinkClass(scrolled)}>Contact</Link>
                        </div>

                        <a
                            href="tel:+919380238467"
                            className={`flex items-center bg-accent text-white px-8 py-3.5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-orange-600 transition-all transform hover:-translate-y-1 shadow-[0_15px_30px_-5px_rgba(255,152,0,0.4)] active:scale-95`}
                        >
                            <Phone size={18} className="mr-3 animate-pulse" />
                            90000 00000
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-3 rounded-2xl transition-all ${scrolled || isOpen ? 'bg-blue-50 text-primary shadow-inner' : 'bg-white/10 text-white backdrop-blur-md shadow-lg border border-white/20'}`}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[85vh] opacity-100 bg-white shadow-2xl' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 py-8 space-y-6 overflow-y-auto max-h-[calc(85vh-80px)]">
                    <div className="grid grid-cols-2 gap-4 pb-6 border-b border-gray-50 font-bold">
                        <Link to="/" className="text-gray-800 text-lg">Home</Link>
                        <Link to="/services" className="text-gray-800 text-lg">Services</Link>
                        <Link to="/about" className="text-gray-800 text-lg">About Us</Link>
                        <Link to="/contact" className="text-gray-800 text-lg">Contact</Link>
                    </div>

                    <div>
                        <h4 className="text-xs font-black text-accent uppercase tracking-widest mb-4">Our Service Centers</h4>
                        <div className="grid grid-cols-2 gap-3">
                            {brands.slice(0, 8).map(brand => (
                                <Link
                                    key={brand.slug}
                                    to={`/service-center/${brand.slug}-service-center-mysore`}
                                    className="p-3 bg-gray-50 rounded-xl text-sm font-bold text-gray-700 hover:bg-primary hover:text-white transition-colors flex items-center"
                                >
                                    <span className="w-1 h-1 bg-accent rounded-full mr-2"></span>
                                    {brand.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-black text-accent uppercase tracking-widest mb-4">Help & Legal</h4>
                        <div className="space-y-3">
                            <Link to="/legal/privacy" className="block text-gray-600 font-medium">Privacy Policy</Link>
                            <Link to="/legal/terms" className="block text-gray-600 font-medium">Terms of Service</Link>
                            <Link to="/legal/disclaimer" className="block text-gray-600 font-medium text-primary">Disclaimer (Independent Center)</Link>
                        </div>
                    </div>

                    <div className="pt-4">
                        <a href="tel:+919380238467" className="flex items-center justify-center bg-primary text-white w-full py-4 rounded-2xl font-bold text-lg shadow-xl active:scale-95 transition-transform">
                            <Phone size={24} className="mr-3" />
                            Call Helpdesk Now
                        </a>
                        <p className="text-center text-gray-400 mt-4 text-xs font-bold leading-relaxed">
                            Serving 10+ Areas in Mysore • 24/7 Availability <br />
                            <span className="text-accent italic font-black">Authorized Quality • Local Prices</span>
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

