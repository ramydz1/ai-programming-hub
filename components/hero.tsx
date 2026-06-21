'use client';

import { Button } from './ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full border border-purple-500/20 mb-8">
          <Sparkles className="w-4 h-4" />
          <span>أقوى منصة ذكاء اصطناعي للبرمجة</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          اكتب الكود أذكى
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            {' '}مع الذكاء الاصطناعي
          </span>
        </h1>

        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          منصة متقدمة تجمع بين قوة الذكاء الاصطناعي وأدوات البرمجة الاحترافية
          لمساعدتك في كتابة الكود بسهولة وكفاءة
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8">
              ابدأ مجاناً
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="text-lg px-8 text-white border-slate-700 hover:bg-slate-800">
            شاهد العرض التوضيحي
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 pt-20 border-t border-slate-800">
          <div>
            <div className="text-4xl font-bold text-purple-400">50K+</div>
            <p className="text-slate-400">مستخدم نشط</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-pink-400">100K+</div>
            <p className="text-slate-400">سطر كود محلل</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-400">99%</div>
            <p className="text-slate-400">درجة الرضا</p>
          </div>
        </div>
      </div>
    </section>
  );
}
