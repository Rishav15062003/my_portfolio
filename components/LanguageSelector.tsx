import { ArrowLeft, Check } from 'lucide-react';
import { useState } from 'react';

interface LanguageSelectorProps {
  onSelect: (language: string) => void;
  onBack: () => void;
}

const languages = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'hi', name: 'Hindi', native: 'हिंदी' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు' },
  { code: 'mr', name: 'Marathi', native: 'मराठी' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം' },
  { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ' },
];

export function LanguageSelector({ onSelect, onBack }: LanguageSelectorProps) {
  const [selected, setSelected] = useState('en');

  const handleSelect = (code: string) => {
    setSelected(code);
    // Simulate slight delay for better UX
    setTimeout(() => onSelect(code), 150);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <button onClick={onBack} className="p-2 -ml-2 text-indigo-600 active:bg-indigo-50 rounded-lg">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h2 className="text-indigo-900">Select Language</h2>
              <p className="text-sm text-indigo-600">भाषा चुनें</p>
            </div>
          </div>
        </div>
      </div>

      {/* Language List */}
      <div className="flex-1 max-w-md mx-auto px-4 py-6 w-full">
        <div className="space-y-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`w-full bg-white rounded-xl shadow-sm p-4 text-left hover:shadow-md transition-all active:scale-98 ${
                selected === lang.code ? 'ring-2 ring-indigo-500 bg-indigo-50' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-indigo-900">{lang.native}</p>
                  <p className="text-sm text-indigo-600">{lang.name}</p>
                </div>
                {selected === lang.code && (
                  <div className="bg-indigo-500 p-1 rounded-full">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
