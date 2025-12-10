'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TrendingUp } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="relative">
              <TrendingUp className="h-8 w-8 text-emerald-600" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold text-gray-900">
              India Venture Index
            </span>
          </Link>
          <div className="flex space-x-2 md:space-x-4">
            <Link
              href="/"
              className={`px-3 md:px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === '/'
                  ? 'bg-emerald-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              Dashboard
            </Link>
            <Link
              href="/companies"
              className={`px-3 md:px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === '/companies'
                  ? 'bg-emerald-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              Companies
            </Link>
            <Link
              href="/methodology"
              className={`px-3 md:px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === '/methodology'
                  ? 'bg-emerald-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              Methodology
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
