import './globals.css'
import type { Metadata } from 'next'
import { inter, playfair } from './fonts'
import { Analytics as VercelAnalytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import StructuredData from '@/components/structured-data'
import Analytics from '@/components/analytics'
import YandexMetrica from '@/components/yandex-metrica'

export const metadata: Metadata = {
  title: 'Ольга Жалтырова | Психолог | Помощь при тревоге, стрессе и выгорании | mental-balance.ru',
  description:
    'Квалифицированная психологическая помощь при тревожности, депрессии, проблемах в отношениях и эмоциональном выгорании. Запишитесь на бесплатную 15-минутную консультацию. mental-balance.ru',
  keywords: 'психолог, психологическая помощь, тревожность, депрессия, отношения, эмоциональное выгорание, консультация психолога, психолог москва, консультация психолога, онлайн психолог, психотерапия, помощь психолога, стресс, тревога, депрессия, семейный психолог, психолог для взрослых, психологическая поддержка, эмоциональное здоровье, выгорание, психология отношений, Ольга Жалтырова',
  authors: [{ name: 'Ольга Жалтырова' }],
  creator: 'Ольга Жалтырова',
  publisher: 'Ольга Жалтырова',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mental-balance.ru/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ольга Жалтырова | Психолог | Помощь при тревоге, стрессе и выгорании',
    description: 'Квалифицированная психологическая помощь при тревожности, депрессии, проблемах в отношениях и эмоциональном выгорании. Запишитесь на бесплатную 15-минутную консультацию.',
    url: 'https://mental-balance.ru/',
    siteName: 'Ольга Жалтырова - Психолог',
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ольга Жалтырова | Психолог',
    description: 'Квалифицированная психологическая помощь при тревожности, депрессии, проблемах в отношениях и эмоциональном выгорании.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ru' suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
          <VercelAnalytics />
          <SpeedInsights />
          <Analytics />
          <YandexMetrica />
        </ThemeProvider>
      </body>
    </html>
  )
}
