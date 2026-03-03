import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'AWDTSG Checker - Are We Dating the Same Guy?',
  description:
    'Search "Are We Dating the Same Guy?" Facebook groups with facial recognition. Find out if you\'ve been posted.',
  openGraph: {
    title: 'AWDTSG Checker',
    description: 'Search AWDTSG groups & social media with facial recognition.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} font-sans bg-[#f0f2f5] antialiased`}>
        {children}
      </body>
    </html>
  );
}
