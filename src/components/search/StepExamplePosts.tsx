'use client';

const POSTS = [
  {
    group: 'AWDTSG — Chicago',
    time: '2 hours ago',
    text: 'Ladies has anyone dated this guy? His name is J*** and he told me we were exclusive but my friend saw him on Hinge last week. He\'s about 32, lives downtown...',
    reactions: 47,
    comments: 23,
  },
  {
    group: 'AWDTSG — New York City',
    time: '5 hours ago',
    text: 'PSA about M***. Met on Bumble, seemed great at first. Took me on 3 dates then completely ghosted. Found out he was seeing at least 4 other women at the same time...',
    reactions: 89,
    comments: 56,
  },
  {
    group: 'AWDTSG — Los Angeles',
    time: '8 hours ago',
    text: 'Anyone know this guy? Goes by D*** on Tinder. 28 years old, says he\'s a "fitness entrepreneur." Total love bomber, will tell you everything you want to hear...',
    reactions: 62,
    comments: 31,
  },
];

const COLORS = ['#e91e63', '#9c27b0', '#2196f3'];

export default function StepExamplePosts() {
  return (
    <div className="space-y-5">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#1a1a1a]">This is what women are posting</h2>
        <p className="text-gray-500 text-sm mt-1">Real examples from AWDTSG groups across the country</p>
      </div>

      <div className="space-y-3">
        {POSTS.map((post, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-200 p-4 relative">
            {/* Facebook f icon */}
            <div className="absolute top-3 right-3 w-6 h-6 rounded bg-[#1877f2] flex items-center justify-center">
              <span className="text-white text-xs font-bold">f</span>
            </div>

            <div className="flex items-center gap-2.5 mb-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold"
                style={{ backgroundColor: COLORS[i] }}
              >
                A
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1a1a1a]">Anonymous Member</p>
                <p className="text-xs text-gray-400">{post.group} · {post.time}</p>
              </div>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed mb-3">{post.text}</p>

            <div className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <span>👍 {post.reactions}</span>
                <span>💬 {post.comments} comments</span>
              </div>
              <span className="text-[#1877f2] font-medium">View in report →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
