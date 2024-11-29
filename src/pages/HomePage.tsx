import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';
import { useSearch } from '../context/SearchContext';

export default function HomePage() {
  const navigate = useNavigate();
  const { searchResults, searchTerm } = useSearch();

  const renderNoResults = () => (
    <div className="col-span-full text-center py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">No products found</h2>
      <p className="text-gray-600">
        We couldn't find any products matching "{searchTerm}"
      </p>
    </div>
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {searchResults.length === 0 && searchTerm
          ? renderNoResults()
          : searchResults.map((product) => (
              <div
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                className="cursor-pointer"
              >
                <ProductCard product={product} />
              </div>
            ))}
      </div>
      <div className="mt-8">
        <Cart />
      </div>
    </>
  );
}