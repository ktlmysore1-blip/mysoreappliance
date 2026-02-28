import React from 'react';
import MetaSEO from '../components/MetaSEO';
import HeroBanner from '../components/HeroBanner';
import { CheckCircle } from 'lucide-react';

const BookingPage = () => {
    return (
        <div className="bg-white">
            <MetaSEO
                title="Book a Repair | QuickRepair Mysore - Same Day Service"
                description="Book your appliance repair service in Mysore online. 90-minute response guaranteed. Certified technicians for all brands."
            />
            <HeroBanner
                title="Schedule Your Repair"
                subtitle="Fill out the form below and our Mysore technician will be at your doorstep within 90 minutes."
            />

            <section className="py-16 px-4 md:px-8">
                <div className="max-w-4xl mx-auto bg-primary rounded-3xl p-8 md:p-12 text-white">
                    <h3 className="text-3xl font-bold mb-8 text-center">Why Book Online?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            "Priority scheduling for online bookings in Mysore.",
                            "Get a digital estimate before the technician arrives.",
                            "Official registration for 30-day service warranty.",
                            "Background-verified technicians dispatched instantly."
                        ].map((text, idx) => (
                            <div key={idx} className="flex items-start">
                                <CheckCircle className="text-accent mr-3 flex-shrink-0 mt-0.5" size={20} />
                                <span className="font-medium">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookingPage;
