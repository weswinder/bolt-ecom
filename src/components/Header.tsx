import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import SearchBar from './SearchBar';

export default function Header() {
  const { state } = useCart();
  const navigate = useNavigate();
  
  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Menu className="h-6 w-6 mr-4 cursor-pointer md:hidden" />
            <span 
              onClick={() => navigate('/')}
              className="text-2xl font-bold cursor-pointer"
            >
              boltazon
            </span>
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-6">
            <SearchBar className="w-full" />
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex flex-col">
              <span className="text-sm">Welcome, Sign in</span>
              <span className="font-bold">Account & Lists</span>
            </div>

            <div className="hidden md:flex flex-col">
              <span className="text-sm">Your</span>
              <span className="font-bold">Orders</span>
            </div>

            <div 
              onClick={() => navigate('/checkout')}
              className="relative cursor-pointer"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 h-5 w-5 bg-yellow-400 text-black rounded-full flex items-center justify-center text-xs font-bold">
                {state.items.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            </div>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-4">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}