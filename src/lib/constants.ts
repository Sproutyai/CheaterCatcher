export const SITE_NAME = 'AWDTSG Checker';
export const SITE_DESCRIPTION = 'Search "Are We Dating the Same Guy?" Facebook groups with facial recognition. Find out if you\'ve been posted.';
export const SITE_URL = 'https://cheatercatcher.vercel.app';

export const COLORS = {
  primary: '#1877f2',
  dark: '#1a1a1a',
  lightBg: '#f0f0f0',
  lightBlue: '#e7f0fd',
  white: '#ffffff',
} as const;

export const RED_FLAGS = [
  { emoji: '🚩', text: 'Talks to multiple women' },
  { emoji: '⚠️', text: 'Love bombs then ghosts' },
  { emoji: '👻', text: 'Ghosted after 3 dates' },
  { emoji: '🚩', text: 'Fake dating profile' },
  { emoji: '⚠️', text: "Still on apps while 'exclusive'" },
  { emoji: '💔', text: 'Cheated on his girlfriend' },
  { emoji: '🚩', text: 'Different age on every app' },
  { emoji: '👀', text: '6 women came forward' },
];

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
    question: "What is 'Are We Dating the Same Guy?'",
    answer: "AWDTSG is a network of private Facebook groups where women share information and experiences about men they've dated or matched with online. The groups exist in hundreds of cities worldwide and have millions of members collectively.",
  },
  {
    question: 'How does AWDTSG Checker work?',
    answer: "We search across hundreds of AWDTSG Facebook groups using both name matching and facial recognition AI. Enter a name, age, and city — optionally upload a photo — and we'll scan our database of 500,000+ indexed posts to find matches.",
  },
  {
    question: 'Who can use this?',
    answer: "Anyone can use AWDTSG Checker. Whether you want to check if you've been posted yourself, or search for someone you're dating — our tool works for everyone. Searches are 100% anonymous.",
  },
  {
    question: 'Is my search confidential?',
    answer: "Yes, 100%. Your search is completely private. We don't share your information with anyone, and no one will know you searched. All data is encrypted and never sold.",
  },
  {
    question: 'How does the facial recognition work?',
    answer: 'Our AI compares uploaded photos against profile images shared in AWDTSG posts. It can find matches even across blurry or partially obscured photos, and works without needing a name match.',
  },
  {
    question: 'How accurate are the results?',
    answer: 'Our system has a 94% accuracy rate for facial recognition matches. Combined with name and location matching, we provide highly reliable results. Instagram matching increases accuracy by an additional 60%.',
  },
];

export const SEARCH_SOURCES = [
  { icon: '📘', label: 'AWDTSG Groups', desc: 'Facebook groups' },
  { icon: '📸', label: 'Instagram', desc: 'Social profiles' },
  { icon: '🧠', label: 'Facial AI', desc: 'Face matching' },
  { icon: '𝕏', label: 'Twitter/X', desc: 'Tweets & threads' },
  { icon: '🌐', label: 'Web Search', desc: 'Public mentions' },
];
