import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import BookingForm from './BookingForm';

const HeroBanner = ({ title, subtitle, onBookClick, onCallClick, showForm = false }) => {
    return (
        <section className="relative bg-gradient-to-br from-primary via-blue-900 to-blue-950 text-white pt-28 pb-16 md:pt-36 md:pb-20 px-4 md:px-8 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                <div className={`grid ${showForm ? 'grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center' : 'grid-cols-1'}`}>
                    {/* Left: Text content */}
                    <div className={showForm ? 'text-left' : 'text-center flex flex-col items-center'}>
                        {/* Badge */}
                        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6 text-sm font-bold tracking-wide">
                            <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                            Available 24/7 in Mysore
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-5 md:mb-6 animate-fade-in leading-[1.1] tracking-tight">
                            {title}
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl mb-8 text-blue-100/80 max-w-xl font-medium leading-relaxed">
                            {subtitle}
                        </p>

                        {/* BIG Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <a
                                href="tel:+919380238467"
                                className="group bg-accent hover:bg-orange-600 text-white font-black py-5 px-10 rounded-2xl transition-all duration-300 shadow-[0_12px_35px_-5px_rgba(255,152,0,0.5)] transform hover:scale-105 hover:-translate-y-1 active:scale-95 flex items-center justify-center text-lg uppercase tracking-wider"
                            >
                                <Phone size={22} className="mr-3" />
                                Call Now
                            </a>
                            <button
                                onClick={onBookClick}
                                className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 font-bold py-5 px-10 rounded-2xl transition-all duration-300 shadow-lg transform hover:scale-105 hover:-translate-y-1 active:scale-95 flex items-center justify-center text-lg"
                            >
                                Book Service
                                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Trust badges */}
                        <div className="mt-8 flex flex-wrap items-center gap-6 text-blue-200/60 text-xs font-bold uppercase tracking-widest">
                            <span>✓ Same-Day Service</span>
                            <span>✓ Genuine Parts</span>
                            <span>✓ 90-Min Response</span>
                        </div>
                    </div>

                    {/* Right: Booking Form (only on homepage) */}
                    {showForm && (
                        <div id="booking-section" className="relative">
                            <div className="bg-white rounded-3xl shadow-2xl p-1">
                                <BookingForm />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;
