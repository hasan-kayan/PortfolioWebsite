import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { default: 'Hasan Kayan — Engineer & Developer', template: '%s | Hasan Kayan' },
  description: 'Full-stack developer and electronics engineer specializing in system design, embedded hardware, and production-grade software.',
  keywords: ['electronics engineer', 'full stack developer', 'system design', 'embedded systems', 'PCB design', 'Next.js'],
  authors: [{ name: 'Hasan Kayan' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hasankayan.com',
    siteName: 'Hasan Kayan',
    title: 'Hasan Kayan — Engineer & Developer',
    description: 'Full-stack developer and electronics engineer.',
  },
  twitter: { card: 'summary_large_image', title: 'Hasan Kayan — Engineer & Developer' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
