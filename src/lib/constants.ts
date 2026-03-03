export const SITE_NAME = 'AWDTSG Checker';
export const SITE_DESCRIPTION = 'Search "Are We Dating the Same Guy?" Facebook groups with facial recognition. Find out if you\'ve been posted.';
export const SITE_URL = 'https://cheatercatcher.vercel.app';

export const COLORS = {
  primary: '#1877f2',
  dark: '#1a1a1a',
  lightBg: '#f0f2f5',
  lightBlue: '#e7f0fd',
  white: '#ffffff',
} as const;

export const TESTIMONIALS = [
  {
    name: 'Sarah M.',
    avatar: 'https://i.pravatar.cc/100?img=47',
    rating: 5,
    text: 'Found out the guy I was seeing had been posted by 3 other women. Saved me months of wasted time. This is a must-use before getting serious with anyone.',
    time: '2 weeks ago',
  },
  {
    name: 'James R.',
    avatar: 'https://i.pravatar.cc/100?img=68',
    rating: 5,
    text: "I had no idea I'd been posted. Turns out it was a misunderstanding from an ex. Was able to see the post and get it addressed. Every guy should check this.",
    time: '1 month ago',
  },
  {
    name: 'Emily K.',
    avatar: 'https://i.pravatar.cc/100?img=45',
    rating: 5,
    text: 'My friend told me about this after a bad date. I searched him and sure enough — multiple warnings from women in my city. Wish I\'d checked sooner!',
    time: '3 weeks ago',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'What is AWDTSG?',
    answer: 'AWDTSG is a network of private Facebook groups where women share information and experiences about men they\'ve dated or matched with online. The groups exist in hundreds of cities and have millions of members.',
  },
  {
    question: 'How does the search work?',
    answer: 'We search across hundreds of AWDTSG Facebook groups using both name matching and facial recognition AI. Enter a name and city, optionally upload a photo, and we\'ll scan our database of indexed posts.',
  },
  {
    question: 'Is my search confidential?',
    answer: 'Yes, 100%. Your search is completely private. We don\'t share your information with anyone, and no one will know you searched.',
  },
  {
    question: 'How accurate is the facial recognition?',
    answer: 'Our AI uses advanced facial recognition to match photos with high accuracy. It can find matches even when names aren\'t mentioned in posts.',
  },
  {
    question: 'Can I cancel my subscription?',
    answer: 'Yes, you can cancel anytime. Visit our cancellation page or contact support@awdtsgchecker.com.',
  },
];

export const SEARCH_SOURCES = [
  { icon: '📘', label: 'AWDTSG Groups', desc: 'Facebook groups' },
  { icon: '🤳', label: 'Instagram', desc: 'Social profiles' },
  { icon: '🧠', label: 'Facial AI', desc: 'Face matching' },
  { icon: '𝕏', label: 'Twitter/X', desc: 'Tweets & threads' },
  { icon: '🌐', label: 'Web Search', desc: 'Public mentions' },
];
