import React from 'react';
import { Target, Users, ShieldCheck } from 'lucide-react';

const AboutUs = () => {
    return (
        <section id="about" className="py-20 px-4 md:px-8 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="bg-blue-100 rounded-3xl w-full aspect-square md:aspect-video flex items-center justify-center overflow-hidden shadow-2xl">
                            {/* Mock Image using Lucide */}
                            <Users size={120} className="text-primary opacity-20" />
                            <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
                                    <p className="text-primary font-bold text-4xl mb-1">10+</p>
                                    <p className="text-gray-600 font-medium">Years of Experience in Mysore</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full -z-10 animate-pulse"></div>
                    </div>

                    <div>
                        <h3 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">About QuickRepair Mysore</h3>
                        <h2 className="text-4xl font-bold text-primary mb-6 leading-tight">
                            Mysore's Most Trusted Appliance Repair Experts
                        </h2>
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                At QuickRepair Mysore, we pride ourselves on being the go-to destination for high-quality, reliable, and affordable home appliance services. With a team of certified professionals and a commitment to excellence, we've served thousands of happy households across Mysore.
                            </p>
                            <p>
                                Our mission is simple: To provide fast, transparent, and long-lasting repair solutions that bring your daily life back to normal. We specialize in all major brands including LG, Samsung, Bosch, and Whirlpool, ensuring that your expensive appliances are in safe hands.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                                <div className="flex items-start p-4 bg-gray-50 rounded-xl">
                                    <Target className="text-primary mr-4 flex-shrink-0" size={32} />
                                    <div>
                                        <h4 className="font-bold text-gray-800">Our Mission</h4>
                                        <p className="text-sm text-gray-500">Quality service at your doorstep within 90 mins.</p>
                                    </div>
                                </div>
                                <div className="flex items-start p-4 bg-gray-50 rounded-xl">
                                    <ShieldCheck className="text-primary mr-4 flex-shrink-0" size={32} />
                                    <div>
                                        <h4 className="font-bold text-gray-800">Our Quality</h4>
                                        <p className="text-sm text-gray-500">Using only 100% genuine spare parts.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
