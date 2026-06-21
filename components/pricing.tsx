'use client';

import { Card } from './ui/card';
import { Button } from './ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'مجاني',
    price: 'مجاني',
    description: 'ممتاز للمبتدئين',
    features: [
      'محرر الكود الأساسي',
      'تحليل 100 سطر/يوم',
      'دعم 3 لغات برمجة',
      'مشروع واحد'
    ]
  },
  {
    name: 'احترافي',
    price: '29 ريال',
    period: '/شهر',
    popular: true,
    description: 'للمطورين المحترفين',
    features: [
      'محرر الكود المتقدم',
      'تحليل غير محدود',
      'دعم جميع اللغات',
      'مشاريع غير محدودة',
      'التعاون الفوري',
      'أولوية في الدعم'
    ]
  },
  {
    name: 'فريق',
    price: '99 ريال',
    period: '/شهر',
    description: 'للفرق والشركات',
    features: [
      'جميع المميزات الاحترافية',
      'إدارة الفريق',
      'تقارير متقدمة',
      'دعم API',
      'دعم VIP 24/7',
      'استشارات مجانية'
    ]
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">الأسعار</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`p-8 ${
                plan.popular
                  ? 'bg-gradient-to-br from-purple-600 to-pink-600 border-purple-400 ring-2 ring-purple-500'
                  : 'bg-slate-900 border-slate-700'
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className={`text-sm mb-4 ${ plan.popular ? 'text-purple-100' : 'text-slate-400'}`}>
                {plan.description}
              </p>
              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-purple-400'}`}>
                  {plan.price}
                </span>
                {plan.period && <span className={plan.popular ? 'text-purple-100' : 'text-slate-400'}>{plan.period}</span>}
              </div>

              <Button
                className={`w-full mb-8 ${
                  plan.popular ? 'bg-white text-purple-600 hover:bg-slate-100' : 'bg-purple-600 hover:bg-purple-700'
                }`}
              >
                اختر الخطة
              </Button>

              <div className="space-y-4">
                {plan.features.map((feature, fidx) => (
                  <div key={fidx} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${ plan.popular ? 'text-white' : 'text-purple-400'}`} />
                    <span className={plan.popular ? 'text-white' : 'text-slate-300'}>{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
