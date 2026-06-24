import React from 'react';
import { Camera, Search } from 'lucide-react';

const Gallery = () => {
    const galleryItems = [
        { url: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80", title: "Washing Machine Repair" },
        { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80", title: "Refrigerator Repair" },
        { url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80", title: "Microwave Repair" },
        { url: "https://images.unsplash.com/photo-1527689638836-411945a2b57c?auto=format&fit=crop&w=600&q=80", title: "AC Maintenance" },
        { url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80", title: "Expert Diagnostics" },
        { url: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=600&q=80", title: "Professional Tools" }
    ];

    return (
        <section id="gallery" className="py-20 px-4 md:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h3 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Our Gallery</h3>
                    <h2 className="text-4xl font-bold text-primary mb-4">Service in Action</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Take a look at our technicians providing professional repair services across various locations in Mysore.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryItems.map((item, index) => (
                        <div key={index} className="relative group overflow-hidden rounded-2xl bg-white shadow-md aspect-square">
                            <div className="absolute inset-0 flex items-center justify-center bg-blue-50">
                                <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
                            </div>

                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4 text-center">
                                <Search className="text-white mb-2" size={24} />
                                <p className="text-white font-bold text-sm">{item.title}</p>
                                <p className="text-blue-200 text-xs">Mysore, Karnataka</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
