'use client';

import { useRef } from 'react';

interface Props {
  photo: File | null;
  photoPreview: string | null;
  setPhoto: (file: File | null) => void;
  setPhotoPreview: (url: string | null) => void;
}

export default function StepPhotoUpload({ photo, photoPreview, setPhoto, setPhotoPreview }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhoto(file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const removePhoto = () => {
    setPhoto(null);
    setPhotoPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="space-y-5">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#1a1a1a]">Add a photo (optional)</h2>
        <p className="text-gray-500 text-sm mt-1">Our facial recognition AI matches your face against photos shared in AWDTSG posts.</p>
      </div>

      <div
        onClick={() => !photo && fileInputRef.current?.click()}
        className={`border-2 border-dashed rounded-2xl p-8 text-center transition-colors ${
          photo ? 'border-[#1877f2] bg-blue-50' : 'border-gray-300 cursor-pointer hover:border-[#1877f2]'
        }`}
      >
        {photoPreview ? (
          <div className="flex flex-col items-center">
            <img
              src={photoPreview}
              alt="Preview"
              className="w-24 h-24 rounded-full object-cover border-2 border-[#1877f2] mb-3"
            />
            <p className="text-sm font-medium text-[#1a1a1a] mb-1">Photo uploaded ✓</p>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removePhoto();
              }}
              className="text-xs text-red-500 hover:underline"
            >
              Remove photo
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
            </div>
            <p className="text-sm font-medium text-[#1a1a1a]">Click to upload your photo</p>
            <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 10MB each</p>
          </div>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg,image/jpg"
          onChange={handlePhotoChange}
          className="hidden"
        />
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <p className="text-xs text-gray-600">
          🔒 <span className="font-semibold">Privacy:</span> Photos are only used for matching and are never stored or shared. You can skip this step if you prefer.
        </p>
      </div>
    </div>
  );
}
