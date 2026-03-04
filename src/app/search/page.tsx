'use client';

import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import StepSearchMode from '@/components/search/StepSearchMode';
import StepFirstName from '@/components/search/StepFirstName';
import StepAge from '@/components/search/StepAge';
import StepLocation from '@/components/search/StepLocation';
import StepAreaStats from '@/components/search/StepAreaStats';
import StepExamplePosts from '@/components/search/StepExamplePosts';
import StepStakes from '@/components/search/StepStakes';
import StepRelatability from '@/components/search/StepRelatability';
import StepViralSpread from '@/components/search/StepViralSpread';
import StepRemoval from '@/components/search/StepRemoval';
import StepInstagram from '@/components/search/StepInstagram';
import StepSocialProof from '@/components/search/StepSocialProof';
import StepPhotoUpload from '@/components/search/StepPhotoUpload';

const TOTAL_STEPS = 13;

const TIPS = [
  'Millions of posts are shared in AWDTSG groups every month',
  'We search across hundreds of city-specific AWDTSG groups',
  'Age helps us find posts mentioning the right person accurately',
  'Location matching helps surface local posts instantly',
  'New posts are added to AWDTSG groups every minute',
  '1 in 3 women check AWDTSG before a first date',
  'Over 500,000 posts indexed from AWDTSG groups',
  'Our AI matches faces even across blurry photos',
  'Join thousands who\'ve already found the truth',
  'Instagram matching increases accuracy by 60%',
  'Real people, real accountability — searchable now',
  'Photos let our AI find matches even without a name',
  'Your report will be ready in under 3 minutes',
];

export default function SearchPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState<'forward' | 'back'>('forward');
  const [animating, setAnimating] = useState(false);

  // Wizard state
  const [searchMode, setSearchMode] = useState('');
  const [firstName, setFirstName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [selectedExperiences, setSelectedExperiences] = useState<string[]>([]);
  const [instagram, setInstagram] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const isValid = useCallback(() => {
    switch (step) {
      case 1: return searchMode !== '';
      case 2: return firstName.trim() !== '';
      case 3: return age !== '' && Number(age) >= 18 && Number(age) <= 99;
      case 4: return city !== '';
      default: return true; // Steps 5-13 are always valid (info/optional)
    }
  }, [step, searchMode, firstName, age, city]);

  const goTo = useCallback((target: number, dir: 'forward' | 'back') => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setStep(target);
      setAnimating(false);
    }, 200);
  }, [animating]);

  const next = useCallback(() => {
    if (!isValid()) return;
    if (step === TOTAL_STEPS) {
      // Save to sessionStorage and redirect
      sessionStorage.setItem('searchWizard', JSON.stringify({
        searchMode,
        firstName: firstName.trim(),
        age,
        city,
        selectedExperiences,
        instagram: instagram.trim(),
        hasPhoto: !!photo,
      }));
      const params = new URLSearchParams({
        name: firstName.trim(),
        location: city,
        age,
        hasPhoto: photo ? 'true' : 'false',
      });
      router.push(`/results?${params.toString()}`);
      return;
    }
    goTo(step + 1, 'forward');
  }, [step, isValid, goTo, searchMode, firstName, age, city, selectedExperiences, instagram, photo, router]);

  const back = useCallback(() => {
    if (step > 1) goTo(step - 1, 'back');
  }, [step, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && isValid()) next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isValid, next]);

  const renderStep = () => {
    switch (step) {
      case 1: return <StepSearchMode searchMode={searchMode} setSearchMode={setSearchMode} />;
      case 2: return <StepFirstName firstName={firstName} setFirstName={setFirstName} />;
      case 3: return <StepAge age={age} setAge={setAge} />;
      case 4: return <StepLocation city={city} setCity={setCity} />;
      case 5: return <StepAreaStats city={city} />;
      case 6: return <StepExamplePosts />;
      case 7: return <StepStakes />;
      case 8: return <StepRelatability selectedExperiences={selectedExperiences} setSelectedExperiences={setSelectedExperiences} />;
      case 9: return <StepViralSpread />;
      case 10: return <StepRemoval />;
      case 11: return <StepInstagram instagram={instagram} setInstagram={setInstagram} />;
      case 12: return <StepSocialProof />;
      case 13: return <StepPhotoUpload photo={photo} photoPreview={photoPreview} setPhoto={setPhoto} setPhotoPreview={setPhotoPreview} />;
      default: return null;
    }
  };

  const buttonLabel = step === TOTAL_STEPS ? 'Search AWDTSG 👀 →' : 'Next →';

  return (
    <div className="min-h-screen bg-[#f0f0f0] flex flex-col">
      {/* Sticky Header */}
      <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
        <div className="max-w-[430px] mx-auto flex items-center px-4 py-3">
          {step > 1 ? (
            <button
              type="button"
              onClick={back}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors mr-2"
              aria-label="Go back"
            >
              <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          ) : (
            <div className="w-8 mr-2" />
          )}
          <div className="flex items-center gap-2 flex-1">
            <span className="text-xl">👀</span>
            <span className="font-bold text-[#1a1a1a] text-sm">AWDTSG Checker</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="max-w-[430px] mx-auto px-4 pb-2">
          <div className="flex gap-1">
            {Array.from({ length: TOTAL_STEPS }, (_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                  i < step ? 'bg-[#1877f2]' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-hidden">
        <div className="max-w-[430px] mx-auto px-4 py-5">
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <div
              className={`transition-all duration-200 ease-in-out ${
                animating
                  ? direction === 'forward'
                    ? 'opacity-0 translate-x-8'
                    : 'opacity-0 -translate-x-8'
                  : 'opacity-100 translate-x-0'
              }`}
            >
              {renderStep()}
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Footer */}
      <footer className="sticky bottom-0 z-30 bg-white border-t border-gray-200">
        <div className="max-w-[430px] mx-auto px-4 py-3 space-y-2">
          <button
            type="button"
            onClick={next}
            disabled={!isValid()}
            className={`w-full py-3.5 rounded-full font-bold text-base transition-all ${
              isValid()
                ? 'bg-[#1877f2] text-white hover:bg-blue-600 active:scale-[0.98]'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {buttonLabel}
          </button>

          <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1">
            <span>👀</span>
            <span>{TIPS[step - 1] || TIPS[0]}</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
