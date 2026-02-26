import React from 'react';
import MetaSEO from '../components/MetaSEO';
import HeroBanner from '../components/HeroBanner';
import BookingForm from '../components/BookingForm';
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
                onBookClick={() => document.getElementById('booking-form-section').scrollIntoView({ behavior: 'smooth' })}
                onCallClick={() => window.open('tel:+919000000000')}
            />

            <section id="booking-form-section" className="py-20 px-4 md:px-8 -mt-24 relative z-10">
                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden">
                    <div className="lg:col-span-3 p-8 md:p-12">
                        <BookingForm />
                    </div>
                    <div className="lg:col-span-2 bg-primary p-8 md:p-12 text-white flex flex-col justify-center">
                        <h3 className="text-3xl font-bold mb-8">Why Book Online?</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start">
                                <CheckCircle className="text-accent mr-4 flex-shrink-0" size={24} />
                                <span>Priority scheduling for online bookings in Mysore.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="text-accent mr-4 flex-shrink-0" size={24} />
                                <span>Get a digital estimate before the technician arrives.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="text-accent mr-4 flex-shrink-0" size={24} />
                                <span>Official registration for 30-day service warranty.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="text-accent mr-4 flex-shrink-0" size={24} />
                                <span>Background-verified technicians dispatched instantly.</span>
                            </li>
                        </ul>
                        <div className="mt-12 p-6 bg-white/10 rounded-2xl border border-white/20">
                            <p className="text-blue-100 italic">"Mysore's most trusted repair service with over 5,000+ happy online bookings this year."</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookingPage;
