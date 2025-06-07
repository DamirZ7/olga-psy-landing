import { MetadataRoute } from 'next'

export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Ольга Жалтырова - Цифровой Психолог',
    description: 'Квалифицированная психологическая помощь при тревожности, депрессии, проблемах в отношениях и эмоциональном выгорании.',
    url: 'https://mental-balance.ru',
    logo: 'https://mental-balance.ru/logo.png',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'RU',
      addressLocality: 'Москва',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '55.7558',
      longitude: '37.6173',
    },
    telephone: '+7-XXX-XXX-XXXX',
    email: 'olga_zhaltyrova@mail.ru',
    priceRange: '₽₽',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
      opens: '09:00',
      closes: '20:00',
    },
    sameAs: [
      'https://t.me/Olgazhaltyrova',
      'https://instagram.com/olgazhaltyrova',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Услуги психолога',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Консультация психолога',
            description: 'Индивидуальная консультация с психологом',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Помощь при тревожности',
            description: 'Профессиональная помощь при тревожных состояниях',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Помощь при депрессии',
            description: 'Профессиональная помощь при депрессивных состояниях',
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
} 