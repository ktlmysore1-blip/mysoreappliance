import React from 'react';
import { Phone } from 'lucide-react';
import BookingForm from './BookingForm';

const HeroBanner = ({ title, subtitle, defaultBrand, defaultAppliance }) => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary via-blue-900 to-blue-950 text-white pt-24 pb-52 md:pt-32 md:pb-60 px-4 md:px-8 overflow-hidden">
                {/* Background decorations */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl"></div>
                    <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6 text-sm font-bold tracking-wide">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                        Available 24/7 in Mysore
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-5 animate-fade-in leading-[1.1] tracking-tight max-w-4xl mx-auto">
                        {title}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl mb-8 text-blue-100/80 max-w-2xl mx-auto font-medium leading-relaxed">
                        {subtitle}
                    </p>

                    {/* Call Now only - no Book Service */}
                    <a
                        href="tel:+919380238467"
                        className="inline-flex items-center bg-accent hover:bg-orange-600 text-white font-black py-4 px-10 rounded-2xl transition-all duration-300 shadow-[0_12px_35px_-5px_rgba(255,152,0,0.5)] transform hover:scale-105 active:scale-95 text-lg uppercase tracking-wider"
                    >
                        <Phone size={22} className="mr-3" />
                        Call Now
                    </a>

                    {/* Trust badges */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-blue-200/60 text-xs font-bold uppercase tracking-widest">
                        <span>✓ Same-Day Service</span>
                        <span>✓ Genuine Parts</span>
                        <span>✓ 90-Min Response</span>
                    </div>
                </div>
            </section>

            {/* Booking Form - half overlapping the hero */}
            <section id="booking-section" className="relative z-10 -mt-44 px-4 md:px-8 mb-8">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                        <BookingForm defaultBrand={defaultBrand} defaultAppliance={defaultAppliance} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroBanner;
