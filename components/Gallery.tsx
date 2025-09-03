
import React from 'react';
import { GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../constants';

const GalleryImage: React.FC<{ item: GalleryItem }> = ({ item }) => (
    <div className="relative overflow-hidden rounded-lg shadow-lg group">
        <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
        <div className="absolute bottom-0 left-0 p-4">
            <h3 className="text-white text-lg font-semibold transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">{item.title}</h3>
        </div>
    </div>
);

const Gallery: React.FC = () => {
    return (
        <div className="bg-white py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-text-dark mb-2">Our Farm Gallery</h2>
                <p className="text-center text-text-light mb-12 max-w-2xl mx-auto">
                    A glimpse into the daily life, hard work, and beautiful moments on our farm.
                </p>
                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                    {GALLERY_ITEMS.map((item) => (
                        <div key={item.id} className="break-inside-avoid">
                             <GalleryImage item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
