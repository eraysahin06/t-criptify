import LogoIcon from '@/components/LogoIcon';
import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'T-Criptify',
  description: 'Extract Transcripts from Your Videos, T-Criptify',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          ' bg-gradient-to-b from-bg-gradient-from to-bg-gradient-to min-h-screen text-white'
        }
      >
        <main className="p-4 max-w-2xl mx-auto">
          <header className="flex justify-between y-2 sm:my-8 text-sm sm:text-lg">
            <Link href="/" className="flex gap-1">
              <LogoIcon />
              <span>T-Criptify</span>
            </Link>
            <nav className="flex gap-2 items-center sm:gap-6 text-white/90">
              <Link href="/">Home</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
