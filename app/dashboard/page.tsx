'use client';

import { useState } from 'react';
import { DashboardNav } from '@/components/dashboard/nav';
import { CodeEditor } from '@/components/dashboard/editor';
import { AIChatbox } from '@/components/dashboard/chatbox';
import { Button } from '@/components/ui/button';
import { Plus, Save, Share2 } from 'lucide-react';

export default function Dashboard() {
  const [code, setCode] = useState('');
  const [messages, setMessages] = useState<Array<{role: string, content: string}>>([]);

  return (
    <div className="flex h-screen bg-slate-950">
      <DashboardNav />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">محرر الكود الذكي</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              جديد
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Save className="w-4 h-4" />
              حفظ
            </Button>
            <Button size="sm" className="flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              مشاركة
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 border-r border-slate-800">
            <CodeEditor code={code} onChange={setCode} />
          </div>
          <div className="w-96 border-l border-slate-800 overflow-hidden flex flex-col">
            <AIChatbox messages={messages} onSendMessage={(msg) => setMessages([...messages, msg])} />
          </div>
        </div>
      </div>
    </div>
  );
}
