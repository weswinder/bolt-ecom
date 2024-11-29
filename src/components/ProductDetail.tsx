import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, ArrowLeft } from 'lucide-react';
import { Product } from '../types/product';
import { useCart } from '../context/CartContext';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

export default function ProductDetail({ product, onBack }: ProductDetailProps) {
  const { dispatch } = useCart();
  const navigate = useNavigate();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Products
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-full aspect-square object-contain bg-white rounded-lg"
          />
          <div className="grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, i) => (
              <img
                key={i}
                src={product.image}
                alt={`${product.title} view ${i + 1}`}
                className="w-full aspect-square object-contain bg-gray-100 rounded-lg cursor-pointer hover:ring-2 ring-yellow-400"
              />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < product.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">({product.rating} out of 5)</span>
            </div>
          </div>

          <div className="border-t border-b py-4">
            <div className="text-3xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </div>
            <div className="text-sm text-gray-500 mt-1 flex items-center">
              <span className="text-blue-600 font-semibold mr-1">Bolt+</span>
              Free Delivery & Returns
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">About this item</h2>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          <div className="space-y-3">
            <button
              onClick={addToCart}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Add to Cart
            </button>
            <button 
              onClick={() => {
                dispatch({ type: 'ADD_TO_CART', payload: product });
                navigate('/checkout');
              }}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Buy Now
            </button>
          </div>

          <div className="border-t pt-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Category:</span>
                <span className="ml-2 text-gray-900">{product.category}</span>
              </div>
              <div>
                <span className="text-gray-500">In Stock:</span>
                <span className="ml-2 text-green-600">Yes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}