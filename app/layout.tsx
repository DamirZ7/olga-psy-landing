import './globals.css';
import type { Metadata } from 'next';
import { inter, playfair } from './fonts';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Ольга Жалтырова | Психолог | Помощь при тревоге, стрессе и выгорании',
  description: 'Квалифицированная психологическая помощь при тревожности, депрессии, проблемах в отношениях и эмоциональном выгорании. Запишитесь на бесплатную 15-минутную консультацию.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}