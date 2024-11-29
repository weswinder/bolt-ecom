import React from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { useSearch } from '../context/SearchContext';

interface SearchBarProps {
  className?: string;
}

export default function SearchBar({ className = '' }: SearchBarProps) {
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none"
        placeholder="Search products..."
      />
      <SearchIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-500" />
    </div>
  );
}