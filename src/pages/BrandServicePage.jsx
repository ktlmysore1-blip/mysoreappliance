import React from 'react';
import { useParams } from 'react-router-dom';
import { brands, commonProblems } from '../data/brands';
import MetaSEO from '../components/MetaSEO';
import HeroBanner from '../components/HeroBanner';
import BookingForm from '../components/BookingForm';
import FAQ from '../components/FAQ';
import ServiceAreas from '../components/ServiceAreas';
import Testimonials from '../components/Testimonials';
import WhyChoose from '../components/WhyChoose';
import { CheckCircle } from 'lucide-react';

const BrandServicePage = () => {
    const { brandSlug, productSlug } = useParams();

    // Robust brand detection: prioritized by slug match, then by content search
    let brand = brands.find(b => b.slug === brandSlug || (productSlug && productSlug.includes(b.slug)));
    if (!brand) brand = brands[0]; // Avoid blank page by falling back to a default brand (LG)

    // Robust product extraction
    let product = 'AC';
    if (productSlug) {
        if (productSlug.toLowerCase().includes('split-ac')) product = 'Split AC';
        else if (productSlug.toLowerCase().includes('window-ac')) product = 'Window AC';
        else if (productSlug.toLowerCase().includes('washing-machine')) product = 'Washing Machine';
        else if (productSlug.toLowerCase().includes('fridge') || productSlug.toLowerCase().includes('refrigerator')) product = 'Refrigerator';
        else if (productSlug.toLowerCase().includes('microwave')) product = 'Microwave';
    }

    const title = `${brand.name} ${product} Repair Service in Mysore`;
    const h1 = `${brand.name} ${product} Repair Service in Mysore`;
    const metaDescription = `Looking for ${brand.name} ${product} service in Mysore? Get same-day repair, gas filling, installation & maintenance. Call now for expert technicians in Mysore.`;

    const scrollToBooking = () => {
        document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-white">
            <MetaSEO title={`${title} | 24/7 Expert Repair`} description={metaDescription} />

            <HeroBanner
                title={h1}
                subtitle={`Fastest ${brand.name} ${product} repair and maintenance services in Mysore. Genuine spare parts and certified technicians.`}
                defaultBrand={brand.name}
                defaultAppliance={product}
            />

            <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
                <div>
                    <h2 className="text-3xl font-bold mb-6 text-primary">Expert {brand.name} {product} Solutions</h2>
                    <div className="prose prose-lg text-gray-600 space-y-4">
                        <p>
                            Are you facing issues with your <strong>{brand.name} {product} in Mysore</strong>? We are your trusted local experts for all kinds of {brand.name} appliance repairs. Our Mysore team provides doorstep service within 90 minutes across all major locations.
                        </p>
                        <p>
                            Whether it's a gas leak, compressor failure, or routine servicing, our certified technicians ensure your <strong>{brand.name} {product} in Mysore</strong> performs at its peak efficiency.
                        </p>
                        <p>
                            We serve all areas including Nazarbad, Vijayanagar, and Gokulam. With transparent pricing and original spare parts, we offer the best value for <strong>{brand.name} repair in Mysore</strong>.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {brand.products.map((p, i) => (
                            <div key={i} className="flex items-center p-3 bg-blue-50 rounded-lg text-primary font-bold">
                                <CheckCircle className="mr-2" size={18} />
                                {p} Repair
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <WhyChoose />

            <section className="py-16 bg-white px-4 md:px-8 border-t border-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-primary">Our Step-by-Step Service Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Instant Booking", desc: "Book via our simple form or call our 24/7 Mysore helpdesk." },
                            { step: "02", title: "Technician Dispatch", desc: "Our certified expert reaches your location within 90 minutes." },
                            { step: "03", title: "Diagnostic & Quote", desc: "Full inspection followed by a transparent, fixed-price quote." },
                            { step: "04", title: "Prompt Repair", desc: "On-site repair using genuine spares with a 30-day warranty." }
                        ].map((s, i) => (
                            <div key={i} className="relative p-8 bg-blue-50 rounded-3xl group hover:bg-primary transition-all duration-300">
                                <span className="text-5xl font-black text-blue-100 group-hover:text-blue-900/20 transition-colors absolute top-4 right-6 leading-none">
                                    {s.step}
                                </span>
                                <h4 className="text-xl font-bold text-primary group-hover:text-white mb-2 relative z-10">{s.title}</h4>
                                <p className="text-gray-600 group-hover:text-blue-100 relative z-10">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {brand.maintenanceTips && (
                <section className="py-16 bg-gray-900 px-4 md:px-8 text-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-1/2">
                                <h2 className="text-3xl font-bold mb-6 text-accent">Pro-Active Maintenance Tips for {brand.name}</h2>
                                <p className="text-gray-400 mb-8 prose prose-invert">
                                    To ensure your {brand.name} appliance lasts longer and runs efficiently in Mysore's environment, follow these expert-approved tips:
                                </p>
                                <ul className="space-y-4">
                                    {brand.maintenanceTips.map((tip, i) => (
                                        <li key={i} className="flex items-start">
                                            <div className="bg-accent/20 p-2 rounded-lg mr-4 mt-1">
                                                <CheckCircle className="text-accent" size={18} />
                                            </div>
                                            <span className="text-gray-300 font-medium">{tip}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="md:w-1/2 bg-gray-800 p-10 rounded-[3rem] border border-gray-700 shadow-2xl">
                                <h3 className="text-2xl font-bold mb-4">Why {brand.name} Owners Choose Us?</h3>
                                <div className="space-y-6 mt-8">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mr-4 text-blue-400 font-bold">✓</div>
                                        <p className="text-gray-300">Verified {brand.name} Experience</p>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mr-4 text-blue-400 font-bold">✓</div>
                                        <p className="text-gray-300">Original-Grade Spare Parts</p>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mr-4 text-blue-400 font-bold">✓</div>
                                        <p className="text-gray-300">Mysore-Wide Coverage</p>
                                    </div>
                                </div>
                                <button onClick={scrollToBooking} className="w-full mt-10 bg-accent hover:bg-orange-600 text-white font-black py-4 rounded-2xl transition-all shadow-xl uppercase tracking-widest">
                                    Schedule Service
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <section className="py-20 px-4 md:px-8 bg-gray-900 text-white overflow-hidden relative">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-3/5">
                        <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                            Complete <span className="text-accent">{brand.name} {product}</span> Solutions
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                            {[
                                { title: "Genuine Spares", desc: `We only use ${brand.name} original spare parts with serial tracking.` },
                                { title: "90 Min TAT", desc: "Technician reaches your Mysore doorstep within 90 minutes of booking." },
                                { title: "Fixed Price", desc: "No hidden charges. Transparent pricing shared after diagnosis." },
                                { title: "30-Day Warranty", desc: "Full peace of mind with our no-questions-asked service warranty." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start">
                                    <div className="bg-accent w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center mr-5 shadow-lg shadow-orange-500/20">
                                        <CheckCircle className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                        <p className="text-blue-100/70 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-2/5 w-full">
                        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[3rem] shadow-3xl text-center relative z-10">
                            <h3 className="text-2xl font-bold mb-4">Book Your {brand.name} Fix</h3>
                            <p className="text-gray-400 mb-8 font-medium">Certified Technicians available in all Mysore wards.</p>
                            <a href="tel:+919380238467" className="block w-full bg-accent hover:bg-orange-600 text-white font-black py-5 rounded-2xl transition-all shadow-xl uppercase tracking-widest text-sm mb-4">
                                Call Helpline Now
                            </a>
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest">24/7 Emergency Support</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12 text-primary">Service Areas in Mysore</h2>
                    <ServiceAreas />
                </div>
            </section>

            <section className="py-16 bg-gray-50 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-primary">Frequently Asked Questions</h2>
                    <FAQ faqs={brand.faqs || []} />
                </div>
            </section>

            <section className="py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-primary">Customer Reviews</h2>
                    <Testimonials />
                </div>
            </section>
        </div>
    );
};

export default BrandServicePage;
