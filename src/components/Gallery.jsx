import React from 'react';
import { Camera, Search } from 'lucide-react';

const Gallery = () => {
    const images = [1, 2, 3, 4, 5, 6]; // Placeholders for gallery logic

    return (
        <section id="gallery" className="py-20 px-4 md:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h3 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Our Gallery</h3>
                    <h2 className="text-4xl font-bold text-primary mb-4">Service in Action</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Take a look at our technicians providing professional repair services across various locations in Mysore.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((item) => (
                        <div key={item} className="relative group overflow-hidden rounded-2xl bg-white shadow-md aspect-square">
                            <div className="absolute inset-0 flex items-center justify-center bg-blue-50">
                                <Camera size={48} className="text-primary opacity-20" />
                            </div>

                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4 text-center">
                                <Search className="text-white mb-2" size={24} />
                                <p className="text-white font-bold text-sm">Professional Repair {item}</p>
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
