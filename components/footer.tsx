'use client';

import { Code2 } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-6 h-6 text-purple-500" />
              <span className="text-lg font-bold text-white">AI Hub</span>
            </div>
            <p className="text-slate-400">منصة ذكاء اصطناعي متقدمة لحل مشاكل البرمجة</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">المنتج</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="#" className="hover:text-white transition">المميزات</Link></li>
              <li><Link href="#" className="hover:text-white transition">الأسعار</Link></li>
              <li><Link href="#" className="hover:text-white transition">الأمان</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">الموارد</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="#" className="hover:text-white transition">التوثيق</Link></li>
              <li><Link href="#" className="hover:text-white transition">البلوق</Link></li>
              <li><Link href="#" className="hover:text-white transition">الدعم</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">القانونية</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="#" className="hover:text-white transition">سياسة الخصوصية</Link></li>
              <li><Link href="#" className="hover:text-white transition">شروط الخدمة</Link></li>
              <li><Link href="#" className="hover:text-white transition">الاتصال</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; 2026 AI Programming Hub. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
