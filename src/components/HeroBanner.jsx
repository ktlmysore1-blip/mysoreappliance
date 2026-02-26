import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

const HeroBanner = ({ title, subtitle, onBookClick, onCallClick }) => {
    return (
        <section className="relative bg-gradient-to-br from-primary via-blue-900 to-blue-950 text-white pt-28 pb-20 md:pt-40 md:pb-28 px-4 md:px-8 overflow-hidden min-h-[60vh] md:min-h-[70vh] flex items-center">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10 w-full">
                {/* Badge */}
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8 text-sm font-bold tracking-wide">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                    Available 24/7 in Mysore
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 animate-fade-in leading-[1.1] tracking-tight max-w-5xl">
                    {title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-10 md:mb-12 text-blue-100/80 max-w-2xl font-medium leading-relaxed">
                    {subtitle}
                </p>

                {/* BIG Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto">
                    <a
                        href="tel:+919000000000"
                        className="group bg-accent hover:bg-orange-600 text-white font-black py-5 px-10 sm:py-6 sm:px-14 rounded-2xl transition-all duration-300 shadow-[0_12px_35px_-5px_rgba(255,152,0,0.5)] transform hover:scale-105 hover:-translate-y-1 active:scale-95 flex items-center justify-center text-lg sm:text-xl uppercase tracking-wider"
                    >
                        <Phone size={24} className="mr-3" />
                        Call Now
                    </a>
                    <button
                        onClick={onBookClick}
                        className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 font-bold py-5 px-10 sm:py-6 sm:px-14 rounded-2xl transition-all duration-300 shadow-lg transform hover:scale-105 hover:-translate-y-1 active:scale-95 flex items-center justify-center text-lg sm:text-xl"
                    >
                        Book Service
                        <ArrowRight size={22} className="ml-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Trust badges */}
                <div className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-blue-200/60 text-xs font-bold uppercase tracking-widest">
                    <span>✓ Same-Day Service</span>
                    <span className="hidden sm:inline">•</span>
                    <span>✓ Genuine Parts</span>
                    <span className="hidden sm:inline">•</span>
                    <span>✓ 90-Min Response</span>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;
