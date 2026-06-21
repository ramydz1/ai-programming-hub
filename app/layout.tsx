import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Programming Hub - منصة الذكاء الاصطناعي للبرمجة',
  description: 'منصة ذكاء اصطناعي متقدمة لحل مشاكل البرمجة والكود، محرر ذكي، وأدوات تطوير',
  keywords: 'AI, Programming, Code Assistant, منصة برمجة, ذكاء اصطناعي',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
