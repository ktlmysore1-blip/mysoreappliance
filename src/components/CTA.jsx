import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const CTA = () => {
    return (
        <section id="contact" className="py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="bg-primary rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                    {/* Decorative background circle */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[30rem] h-[30rem] bg-accent/20 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Need Immediate Repair Service?</h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Don't wait for the problem to get worse. Our technicians are available 24/7 across Mysore to fix your appliances today!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a
                                href="tel:+919380238467"
                                className="bg-white text-primary px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center"
                            >
                                <Phone size={24} className="mr-3" />
                                Call +91 90000 00000
                            </a>
                            <a
                                href="https://wa.me/919380238467"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-green-600 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center"
                            >
                                <MessageCircle size={24} className="mr-3" />
                                Chat on WhatsApp
                            </a>
                        </div>

                        <p className="mt-8 text-blue-200 font-medium">
                            Average response time: <span className="text-white font-bold">15 Minutes</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
