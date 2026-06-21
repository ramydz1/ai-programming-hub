'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { Code2, Moon, Sun } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isDark, setIsDark] = useState(true);

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code2 className="w-8 h-8 text-purple-500" />
          <span className="text-2xl font-bold text-white">AI Hub</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-slate-300 hover:text-white transition">
            المميزات
          </Link>
          <Link href="#pricing" className="text-slate-300 hover:text-white transition">
            الأسعار
          </Link>
          <Link href="#docs" className="text-slate-300 hover:text-white transition">
            التوثيق
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 hover:bg-slate-800 rounded-lg transition"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-300" />
            )}
          </button>
          <Button variant="outline" className="text-slate-300">
            تسجيل الدخول
          </Button>
          <Link href="/dashboard">
            <Button className="bg-purple-600 hover:bg-purple-700">
              ابدأ الآن
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
