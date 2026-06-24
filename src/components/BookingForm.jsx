import React from 'react';
import { useForm } from 'react-hook-form';
import { Phone } from 'lucide-react';

const BookingForm = ({ defaultBrand, defaultAppliance }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            brand: defaultBrand || '',
            appliance: defaultAppliance || 'AC',
        }
    });

    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState(null);

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setSubmitStatus(null);
        try {
            const response = await fetch("https://formsubmit.co/ajax/mysorehomeappliances@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: `New Booking Request from ${data.name}`,
                    ...data
                })
            });
            
            if (response.ok) {
                setSubmitStatus('success');
                if (window.gtag) {
                    window.gtag('event', 'conversion', {'send_to': 'AW-17867500857/p8ojCKzH1sQcELna8cdC'});
                }
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-primary">Book Professional Repair Service</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            {...register("name", { required: "Name is required" })}
                            className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-primary outline-none transition`}
                            placeholder="Your Full Name"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
                        <input
                            {...register("mobile", {
                                required: "Mobile is required",
                                pattern: { value: /^[6-9]\d{9}$/, message: "Invalid mobile number" }
                            })}
                            className={`w-full px-4 py-3 rounded-lg border ${errors.mobile ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-primary outline-none transition`}
                            placeholder="10-digit Mobile Number"
                        />
                        {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
                        <input
                            {...register("brand", { required: "Brand is required" })}
                            className={`w-full px-4 py-3 rounded-lg border ${errors.brand ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-primary outline-none transition`}
                            placeholder="e.g. LG, Samsung"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Appliance Type</label>
                        <select
                            {...register("appliance")}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none transition"
                        >
                            <option value="AC">Air Conditioner</option>
                            <option value="Washing Machine">Washing Machine</option>
                            <option value="Refrigerator">Refrigerator</option>
                            <option value="Microwave">Microwave</option>
                            <option value="Dishwasher">Dishwasher</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Issue Description</label>
                    <textarea
                        {...register("issue")}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none transition min-h-[100px]"
                        placeholder="Tell us about the problem..."
                    ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                        <input
                            type="date"
                            {...register("date", { required: "Date is required" })}
                            className={`w-full px-4 py-3 rounded-lg border ${errors.date ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-primary outline-none transition`}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <input
                            {...register("address", { required: "Address is required" })}
                            className={`w-full px-4 py-3 rounded-lg border ${errors.address ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-primary outline-none transition`}
                            placeholder="Your Area in Mysore"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-blue-900'} text-white font-bold py-4 rounded-lg transform transition ${isSubmitting ? '' : 'active:scale-95'} shadow-lg mt-4`}
                >
                    {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
                </button>

                {submitStatus === 'success' && (
                    <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200 text-center font-medium">
                        Thank you for booking! Our technician will contact you shortly.
                    </div>
                )}
                {submitStatus === 'error' && (
                    <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 text-center font-medium">
                        Something went wrong. Please try again or call us directly.
                    </div>
                )}

                <a
                    href="tel:+919380238467"
                    className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-orange-600 text-white font-black py-4 rounded-lg transition-all active:scale-95 shadow-lg mt-3 text-lg"
                >
                    <Phone size={20} />
                    Call Now: 938 023 8467
                </a>
            </form>
        </div>
    );
};

export default BookingForm;
