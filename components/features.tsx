'use client';

import { Card } from './ui/card';
import { Brain, Zap, Code, Users, Shield, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'محرر ذكي',
    description: 'اقتراحات ذكية وإكمال تلقائي للكود مع فهم السياق'
  },
  {
    icon: Zap,
    title: 'تصحيح فوري',
    description: 'تحديد الأخطاء وإصلاحها تلقائياً مع شرح مفصل'
  },
  {
    icon: Code,
    title: 'دعم لغات متعددة',
    description: 'دعم Python, JavaScript, Java, C++, والمزيد'
  },
  {
    icon: Users,
    title: 'التعاون الفوري',
    description: 'تشارك الكود والمشاريع مع الفريق بسهولة'
  },
  {
    icon: Shield,
    title: 'أمان عالي',
    description: 'تشفير نهاية لنهاية وحماية بيانات المستخدم'
  },
  {
    icon: Sparkles,
    title: 'تحليل متقدم',
    description: 'تحليل الأداء واقتراحات التحسين التلقائية'
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">المميزات الرئيسية</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <Card key={idx} className="bg-slate-900 border-slate-700 p-6 hover:border-purple-500 transition">
              <feature.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
