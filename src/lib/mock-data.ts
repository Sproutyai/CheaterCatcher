// Mock data generators for search results

const POST_TEMPLATES = [
  'Does anyone know {name}? Met him on Hinge, seemed great at first but then started getting weird vibes. He told me he was single but...',
  '⚠️ LADIES BEWARE ⚠️ {name} from {city}. He was talking to me AND my best friend at the same time. We compared screenshots and the messages were almost identical.',
  'Anyone dated {name}? About {age}? He lovebombed me for 2 weeks then completely ghosted. Now I see him active on 3 different apps.',
  'PSA about {name} — he told me he was "not looking for anything serious" AFTER 2 months of acting like my boyfriend. Classic.',
  'Has anyone else matched with {name} on Bumble? He has like 5 different photos that all look different. Something feels off.',
  'Update on {name} from my post last week — 4 more women have DM\'d me. He was seeing ALL of us at the same time. During "cuffing season" no less 💀',
  'Just a heads up about {name}, {age}, from {city}. Super charming at first, wants to move really fast. Asked me to be exclusive after 3 dates then I found his active Tinder.',
  'Anyone know {name}? Matched on Hinge. First date was perfect, second date he asked me to split a $200 dinner then asked to come over. Girl run 🚩',
];

const GROUP_CITIES = [
  'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
  'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'Austin',
  'Miami', 'Atlanta', 'Boston', 'Denver', 'Seattle',
  'Nashville', 'Charlotte', 'Portland', 'Tampa', 'Orlando',
];

function seededRandom(seed: string): () => number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(31, h) + seed.charCodeAt(i) | 0;
  }
  return () => {
    h = Math.imul(h ^ (h >>> 16), 0x45d9f3b);
    h = Math.imul(h ^ (h >>> 13), 0x45d9f3b);
    h = (h ^ (h >>> 16)) >>> 0;
    return h / 4294967296;
  };
}

export function randomGroupName(city?: string): string {
  const c = city || GROUP_CITIES[Math.floor(Math.random() * GROUP_CITIES.length)];
  const prefixes = [
    'Are We Dating The Same Guy',
    'AWDTSG',
    'Are We Dating the Same Person',
  ];
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  return `${prefix} — ${c}`;
}

export function randomPostText(name: string, city?: string, age?: number): string {
  const template = POST_TEMPLATES[Math.floor(Math.random() * POST_TEMPLATES.length)];
  return template
    .replace(/\{name\}/g, name)
    .replace(/\{city\}/g, city || 'the area')
    .replace(/\{age\}/g, String(age || 28));
}

export interface MockPostMatch {
  id: string;
  groupName: string;
  groupCity: string;
  postExcerpt: string;
  postDate: string;
  reactions: number;
  comments: number;
  matchConfidence: number;
  matchType: 'name' | 'face' | 'instagram';
  source: string;
}

export function generateMockResults(
  name: string,
  city?: string,
  count: number = 7
): MockPostMatch[] {
  const rand = seededRandom(name + (city || ''));
  const results: MockPostMatch[] = [];

  for (let i = 0; i < count; i++) {
    const r = rand();
    const groupCity = city || GROUP_CITIES[Math.floor(r * GROUP_CITIES.length)];
    const daysAgo = Math.floor(rand() * 180) + 1;
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);

    results.push({
      id: `mock-${i}-${Math.floor(rand() * 99999)}`,
      groupName: randomGroupName(groupCity),
      groupCity,
      postExcerpt: randomPostText(name, groupCity, undefined),
      postDate: date.toISOString(),
      reactions: Math.floor(rand() * 300) + 5,
      comments: Math.floor(rand() * 80) + 2,
      matchConfidence: Math.round((0.7 + rand() * 0.29) * 100) / 100,
      matchType: (['name', 'face', 'instagram'] as const)[Math.floor(rand() * 3)],
      source: 'facebook',
    });
  }

  // Sort by date descending
  results.sort((a, b) => new Date(b.postDate).getTime() - new Date(a.postDate).getTime());
  return results;
}

export function generateOverviewData(name: string, city?: string) {
  const rand = seededRandom(name + (city || '') + 'overview');
  const totalPosts = Math.floor(rand() * 12) + 3;
  const groupsChecked = Math.floor(rand() * 200) + 50;
  const riskScore = Math.round((0.4 + rand() * 0.55) * 100);

  let riskLevel: 'low' | 'medium' | 'high' | 'critical';
  if (riskScore < 30) riskLevel = 'low';
  else if (riskScore < 60) riskLevel = 'medium';
  else if (riskScore < 85) riskLevel = 'high';
  else riskLevel = 'critical';

  return {
    totalPosts,
    groupsChecked,
    riskScore,
    riskLevel,
    matchBreakdown: {
      nameMatches: Math.floor(totalPosts * 0.5),
      faceMatches: Math.floor(totalPosts * 0.3),
      instagramMatches: totalPosts - Math.floor(totalPosts * 0.5) - Math.floor(totalPosts * 0.3),
    },
    citiesFound: Math.floor(rand() * 4) + 1,
    earliestPost: (() => {
      const d = new Date();
      d.setDate(d.getDate() - Math.floor(rand() * 365) - 30);
      return d.toISOString();
    })(),
    latestPost: (() => {
      const d = new Date();
      d.setDate(d.getDate() - Math.floor(rand() * 14));
      return d.toISOString();
    })(),
  };
}
