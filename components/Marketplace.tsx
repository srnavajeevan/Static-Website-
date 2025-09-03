
import React from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../constants';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
        <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
        <div className="p-4">
            <p className="text-sm text-text-light">{product.category}</p>
            <h3 className="text-lg font-semibold text-text-dark mt-1">{product.name}</h3>
            <div className="flex justify-between items-center mt-4">
                <p className="text-xl font-bold text-primary">{product.price}</p>
                <button className="bg-secondary hover:bg-yellow-800 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300">
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
);


const Marketplace: React.FC = () => {
  return (
    <div className="bg-background py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-text-dark mb-2">Marketplace</h2>
        <p className="text-center text-text-light mb-12 max-w-2xl mx-auto">
          Find high-quality seeds, tools, and supplies to make your farm thrive.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
