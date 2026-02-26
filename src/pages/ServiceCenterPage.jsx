import React from 'react';
import { useParams } from 'react-router-dom';
import { brands } from '../data/brands';
import MetaSEO from '../components/MetaSEO';
import HeroBanner from '../components/HeroBanner';
import BookingForm from '../components/BookingForm';
import ServiceAreas from '../components/ServiceAreas';
import Testimonials from '../components/Testimonials';
import WhyChoose from '../components/WhyChoose';
import { CheckCircle, MapPin, ShieldCheck } from 'lucide-react';

const ServiceCenterPage = () => {
    const { slug } = useParams();

    // Enhanced brand detection: prioritized match
    let brand = brands.find(b =>
        slug?.toLowerCase().startsWith(b.slug.toLowerCase()) ||
        slug?.toLowerCase().includes(b.slug.toLowerCase())
    );

    if (!brand) brand = brands[0]; // Emergency fallback to LG

    const title = `${brand.name} Service Center in Mysore`;
    const h1 = `${brand.name} Service Center in Mysore`;
    const metaDescription = `Looking for the expert ${brand.name} service center in Mysore? Professional repair for ${brand.products?.join(', ')}. Same-day doorstep service in Mysore.`;

    const scrollToBooking = () => {
        document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-white">
            <MetaSEO title={`${title} | Certified Technicians`} description={metaDescription} />

            <HeroBanner
                title={h1}
                subtitle={`${brand.name} premium care for your home appliances. Experienced technicians and genuine spares across all areas of Mysore.`}
                defaultBrand={brand.name}
            />

            <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-primary">About {brand.name} Mysore Center</h2>
                        <div className="prose prose-lg text-gray-600 space-y-4">
                            <p>
                                Welcome to the most reliable <strong>{brand.name} service center in Mysore</strong>. We specialize in providing end-to-end repair solutions for all {brand.name} household appliances. Our Mysore facility is staffed by certified professionals trained in the latest technology.
                            </p>
                            <p>
                                We offer a wide range of services for <strong>{brand.name} appliances in Mysore</strong>, including installation, uninstallation, gas charging, and board repairs.
                            </p>
                        </div>

                        <div className="mt-8 p-8 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm">
                            <h4 className="font-bold text-primary mb-6 text-xl flex items-center">
                                <CheckCircle className="mr-2" /> Appliances Supported:
                            </h4>
                            <ul className="grid grid-cols-2 gap-4">
                                {brand.products.map((p, i) => (
                                    <li key={i} className="flex items-center text-gray-700 font-medium">
                                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                                        {p}
                                    </li>
                                ))}
                                <li className="flex items-center text-gray-700 font-medium"><span className="w-2 h-2 bg-accent rounded-full mr-3"></span> Refrigerator</li>
                                <li className="flex items-center text-gray-700 font-medium"><span className="w-2 h-2 bg-accent rounded-full mr-3"></span> Microwave</li>
                            </ul>
                        </div>

                        <div className="mt-8 flex items-center p-4 bg-gray-50 rounded-xl">
                            <MapPin className="text-primary mr-4" size={24} />
                            <p className="text-gray-600 font-medium">Headquarters: Vijayanagar, Mysore. Service available across all Mysore wards.</p>
                        </div>
                    </div>
                    <div id="booking-section">
                        <BookingForm defaultBrand={brand.name} />
                    </div>
                </div>
            </section>

            <WhyChoose />

            <section className="py-16 bg-white px-4 md:px-8 border-t border-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold mb-8 text-primary">Common {brand.name} Issues We Fix</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "No Power / Not Switching On",
                                    "Abnormal Noise During Operation",
                                    "Gas Leakage / Refilling",
                                    "PCB Motherboard Repair",
                                    "Error Codes on Display",
                                    "Water Overflow / Leakage",
                                    "Cooling / Heating Failure",
                                    "Periodic Maintenance Service"
                                ].map((issue, idx) => (
                                    <div key={idx} className="flex items-center p-4 bg-gray-50 rounded-xl border border-transparent hover:border-primary/20 hover:bg-blue-50 transition-all">
                                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 text-primary font-bold">{idx + 1}</div>
                                        <span className="text-gray-700 font-semibold">{issue}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-primary text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center">
                                <ShieldCheck className="mr-3" /> Our Guarantee
                            </h3>
                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <div className="bg-white/20 p-1.5 rounded-full mr-4 mt-1">✓</div>
                                    <p className="font-medium text-blue-100">30-Day Service Warranty on all repairs performed in Mysore.</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-white/20 p-1.5 rounded-full mr-4 mt-1">✓</div>
                                    <p className="font-medium text-blue-100">Prompt 90-Minute Response time for emergency bookings.</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-white/20 p-1.5 rounded-full mr-4 mt-1">✓</div>
                                    <p className="font-medium text-blue-100">Transparent Pricing with no hidden visiting charges if repair is done.</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-white/20 p-1.5 rounded-full mr-4 mt-1">✓</div>
                                    <p className="font-medium text-blue-100">Certified Technicians with 10+ years of {brand.name} experience.</p>
                                </li>
                            </ul>
                            <a href="tel:+919380238467" className="mt-10 block bg-accent hover:bg-orange-600 text-white text-center py-4 rounded-2xl font-black shadow-lg transition-all uppercase tracking-widest active:scale-95">
                                Call Helpline
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50 px-4 md:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12 text-primary">Contact Our Mysore Helpdesk</h2>
                    <div className="w-full h-[400px] bg-white rounded-[2rem] shadow-xl flex items-center justify-center relative overflow-hidden border border-gray-100">
                        <div className="text-center z-10 px-6">
                            <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                                <MapPin className="text-white" size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-gray-800">Visit Our Center in Mysore</h4>
                            <p className="text-gray-500 mt-2">123 Service Road, Vijayanagar, Mysore 570017</p>
                            <button className="mt-6 bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-800 transition-colors">
                                Get Directions
                            </button>
                        </div>
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0D47A1_1px,transparent_1px)] [background-size:20px_20px]"></div>
                    </div>
                </div>
            </section>


            <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
                        <h2 className="text-4xl font-black mb-8 text-primary relative z-10">Premium {brand.name} Support</h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            We operate as Mysore's leading independent specialized service network for all {brand.name} models. Our facility in Mysore is equipped with modern diagnostic rigs to troubleshoot complex PCB and inverter issues that standard shops cannot handle.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { val: "10+", label: "Years Exp." },
                                { val: "90m", label: "Response" },
                                { val: "24/7", label: "Support" },
                                { val: "100%", label: "Genuine" }
                            ].map((stat, i) => (
                                <div key={i} className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
                                    <div className="text-2xl font-black text-primary mb-1">{stat.val}</div>
                                    <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="bg-gray-50 p-1 rounded-[3rem]">
                            <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl">
                                <Testimonials />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-primary">Locations We Cover</h2>
                    <ServiceAreas />
                </div>
            </section>
        </div>
    );
};

export default ServiceCenterPage;
