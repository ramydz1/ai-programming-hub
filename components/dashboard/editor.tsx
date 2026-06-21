'use client';

import { useState } from 'react';
import { Play, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CodeEditorProps {
  code: string;
  onChange: (code: string) => void;
}

export function CodeEditor({ code, onChange }: CodeEditorProps) {
  const [language, setLanguage] = useState('javascript');

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-slate-800 text-white px-3 py-1 rounded text-sm border border-slate-700 hover:border-purple-500 transition"
          >
            <option>javascript</option>
            <option>python</option>
            <option>typescript</option>
            <option>java</option>
            <option>cpp</option>
          </select>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" className="text-slate-400">
            <Copy className="w-4 h-4" />
          </Button>
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
            <Play className="w-4 h-4" />
            تشغيل
          </Button>
        </div>
      </div>

      {/* Editor */}
      <div className="flex-1 overflow-hidden">
        <textarea
          value={code}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-full bg-slate-950 text-slate-100 font-mono text-sm p-4 resize-none focus:outline-none"
          placeholder="اكتب الكود هنا أو اطلب من الذكاء الاصطناعي إنشاء كود..."
          spellCheck="false"
        />
      </div>

      {/* Output */}
      <div className="bg-slate-900 border-t border-slate-800 p-4 max-h-32 overflow-auto">
        <p className="text-slate-400 text-sm">النتيجة: تم التنفيذ بنجاح ✓</p>
      </div>
    </div>
  );
}
