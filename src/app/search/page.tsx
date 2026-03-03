'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function SearchPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhoto(file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !location.trim()) return;

    setLoading(true);
    // Store search params and redirect to checkout
    const params = new URLSearchParams({
      name: name.trim(),
      location: location.trim(),
      hasPhoto: photo ? 'true' : 'false',
    });
    router.push(`/checkout?${params.toString()}`);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8 px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#1a1a1a]">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#1a1a1a] mb-3">
                Search AWDTSG
              </h1>
              <p className="text-gray-600">
                Enter a name and city to search hundreds of AWDTSG groups
              </p>
            </div>

            <form onSubmit={handleSearch} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-bold text-[#1a1a1a] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter first and last name"
                  className="w-full px-4 py-3 rounded-xl border border-[#1a1a1a] focus:ring-2 focus:ring-[#1877f2] focus:border-[#1877f2] outline-none transition-all text-[#1a1a1a]"
                  required
                />
              </div>

              {/* Location Input */}
              <div>
                <label className="block text-sm font-bold text-[#1a1a1a] mb-2">
                  City
                </label>
                <p className="text-xs text-gray-500 mb-2">
                  AWDTSG groups are organized by city — this helps us find the right groups
                </p>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Miami, FL"
                  className="w-full px-4 py-3 rounded-xl border border-[#1a1a1a] focus:ring-2 focus:ring-[#1877f2] focus:border-[#1877f2] outline-none transition-all text-[#1a1a1a]"
                  required
                />
              </div>

              {/* Photo Upload */}
              <div>
                <label className="block text-sm font-bold text-[#1a1a1a] mb-2">
                  Photo (optional — enables facial recognition)
                </label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-[#1877f2] transition-colors"
                >
                  {photoPreview ? (
                    <div className="flex flex-col items-center">
                      <img
                        src={photoPreview}
                        alt="Preview"
                        className="w-24 h-24 rounded-full object-cover border-2 border-[#1877f2] mb-3"
                      />
                      <span className="text-sm text-gray-500">Click to change photo</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="text-4xl mb-2">📸</div>
                      <span className="text-sm text-gray-500">
                        Drop a photo here or click to upload
                      </span>
                      <span className="text-xs text-gray-400 mt-1">
                        Enables AI facial recognition matching
                      </span>
                    </div>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className="hidden"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || !name.trim() || !location.trim()}
                className="w-full bg-[#1877f2] text-white py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition-colors border border-[#1a1a1a] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Searching...
                  </span>
                ) : (
                  'Search AWDTSG Groups'
                )}
              </button>
            </form>

            <p className="text-xs text-gray-400 text-center mt-4">
              Your search is 100% confidential. No one will know you searched.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
