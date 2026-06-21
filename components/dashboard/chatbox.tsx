'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Message {
  role: string;
  content: string;
}

interface ChatboxProps {
  messages: Message[];
  onSendMessage: (msg: Message) => void;
}

export function AIChatbox({ messages, onSendMessage }: ChatboxProps) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage({ role: 'user', content: input });
      setInput('');
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-800">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-center">
            <div>
              <p className="text-slate-400 mb-2">💬 اسأل الذكاء الاصطناعي</p>
              <p className="text-slate-500 text-sm">اطلب مساعدة في الكود أو شرح الأخطاء</p>
            </div>
          </div>
        ) : (
          messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  msg.role === 'user'
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-700 text-slate-100'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Input */}
      <div className="border-t border-slate-700 p-4 space-y-3">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="اكتب سؤالك..."
            className="flex-1 bg-slate-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm placeholder-slate-500"
          />
          <Button
            onClick={handleSend}
            className="bg-purple-600 hover:bg-purple-700 p-2"
            size="sm"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-xs text-slate-500 text-center">مدعوم بـ Claude AI</p>
      </div>
    </div>
  );
}
