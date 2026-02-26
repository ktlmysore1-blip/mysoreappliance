import React from 'react';
import MetaSEO from '../components/MetaSEO';
import HeroBanner from '../components/HeroBanner';
import AboutUs from '../components/AboutUs';
import WhyChoose from '../components/WhyChoose';
import Testimonials from '../components/Testimonials';
import ServiceAreas from '../components/ServiceAreas';

const AboutPage = () => {
    return (
        <div className="bg-white">
            <MetaSEO
                title="About Us | QuickRepair Mysore - Trusted Appliance Experts"
                description="Learn more about QuickRepair Mysore. We are the most reliable appliance repair service in Mysore with over 10 years of experience."
            />
            <HeroBanner
                title="Who We Are"
                subtitle="Dedicated to providing the best home appliance repair services in Mysore with integrity and excellence."
            />
            <AboutUs />
            <WhyChoose />
            <section className="py-20 bg-gray-50 px-4 md:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-primary mb-12">Our Journey in Mysore</h2>
                    <div className="prose prose-lg mx-auto text-gray-600">
                        <p>
                            Started as a small team of two technicians in 2014, QuickRepair Mysore has grown into a leading service network covering every corner of the royal city. We have successfully repaired over 50,000 appliances, ranging from entry-level washing machines to ultra-premium inverter ACs.
                        </p>
                        <p>
                            Our deep understanding of Mysore's local needs—from the hard water issues in some areas affecting washing machines to the fluctuating power grids—makes us the uniquely qualified experts for your home.
                        </p>
                    </div>
                </div>
            </section>
            <div className="py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-primary mb-12">Technicians You Can Trust</h2>
                    <Testimonials />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
