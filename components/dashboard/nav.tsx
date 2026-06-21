'use client';

import { Code2, Home, Settings, LogOut, MoreVertical } from 'lucide-react';
import Link from 'next/link';

export function DashboardNav() {
  return (
    <div className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-slate-800 flex items-center gap-2">
        <Code2 className="w-8 h-8 text-purple-500" />
        <span className="text-xl font-bold text-white">AI Hub</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6 space-y-2">
        <Link href="/dashboard"
          className="flex items-center gap-3 px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
        >
          <Home className="w-5 h-5" />
          لوحة التحكم
        </Link>
        <Link href="/dashboard/projects"
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-800 transition"
        >
          <Code2 className="w-5 h-5" />
          المشاريع
        </Link>
        <Link href="/dashboard/settings"
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-800 transition"
        >
          <Settings className="w-5 h-5" />
          الإعدادات
        </Link>
      </nav>

      {/* User Profile */}
      <div className="p-6 border-t border-slate-800">
        <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-800 transition text-slate-300">
          <div className="text-right">
            <div className="text-sm font-semibold text-white">رامي</div>
            <div className="text-xs text-slate-500">Premium</div>
          </div>
          <MoreVertical className="w-4 h-4" />
        </button>
        <button className="w-full flex items-center gap-2 mt-2 px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-800 transition text-sm">
          <LogOut className="w-4 h-4" />
          تسجيل الخروج
        </button>
      </div>
    </div>
  );
}
