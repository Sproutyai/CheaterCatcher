'use client';

import { useState, useRef, useEffect } from 'react';

const CITIES = [
  'Miami', 'New York City', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
  'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'Austin', 'Jacksonville',
  'Fort Worth', 'Columbus', 'Charlotte', 'Indianapolis', 'San Francisco', 'Seattle',
  'Denver', 'Washington DC', 'Nashville', 'Oklahoma City', 'Portland', 'Las Vegas',
  'Memphis', 'Louisville', 'Baltimore', 'Milwaukee', 'Albuquerque', 'Tucson',
];

interface Props {
  city: string;
  setCity: (city: string) => void;
}

export default function StepLocation({ city, setCity }: Props) {
  const [query, setQuery] = useState(city);
  const [showDropdown, setShowDropdown] = useState(false);
  const [filtered, setFiltered] = useState<string[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.length > 0) {
      const q = query.toLowerCase();
      setFiltered(CITIES.filter((c) => c.toLowerCase().includes(q)));
    } else {
      setFiltered(CITIES);
    }
  }, [query]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const selectCity = (c: string) => {
    setCity(c);
    setQuery(c);
    setShowDropdown(false);
  };

  return (
    <div className="space-y-5">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#1a1a1a]">Where do you date?</h2>
        <p className="text-gray-500 text-sm mt-1">AWDTSG groups are organized by city — this helps us find the right groups</p>
      </div>

      <div ref={wrapperRef} className="relative">
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">📍</span>
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setCity('');
              setShowDropdown(true);
            }}
            onFocus={() => setShowDropdown(true)}
            placeholder="Search for a city..."
            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1877f2] focus:border-[#1877f2] outline-none transition-all text-[#1a1a1a] text-base"
          />
        </div>

        {showDropdown && filtered.length > 0 && (
          <div className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-48 overflow-y-auto">
            {filtered.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => selectCity(c)}
                className="w-full text-left px-4 py-2.5 hover:bg-blue-50 text-sm text-[#1a1a1a] transition-colors first:rounded-t-xl last:rounded-b-xl"
              >
                📍 {c}
              </button>
            ))}
          </div>
        )}

        <p className="text-xs text-gray-500 mt-2">Search for the city where you have been dating</p>
      </div>

      {/* Map placeholder */}
      <div className="w-full h-40 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
        <span className="text-gray-400 text-sm font-medium">🗺️ Map</span>
      </div>
    </div>
  );
}
