# Psychologist Landing Page

Адаптивный лендинг-сайт частного психолога на Next.js 14 с Tailwind CSS и Shadcn UI.

## Особенности

- Современный стэк: Next.js 14 (App Router), TypeScript, Tailwind CSS
- Компонентная библиотека Shadcn UI с кастомизированной темой
- Адаптивный дизайн для всех размеров экранов
- Анимации с использованием Framer Motion
- Темная/светлая тема с поддержкой системных настроек
- Встроенная интеграция с Calendly для записи на консультации
- SEO-оптимизация
- Доступность (a11y) соответствует стандартам WCAG

## Установка

```bash
# Клонирование репозитория
git clone https://github.com/yourusername/psychologist-landing-page.git
cd psychologist-landing-page

# Установка зависимостей
npm install

# Запуск режима разработки
npm run dev
```

## Структура проекта

```
├── app/                      # App Router (Next.js 14)
│   ├── blog/                 # Страница блога
│   ├── contact/              # Страница контактов
│   ├── services/             # Страницы услуг
│   │   └── [slug]/           # Динамический роут для деталей услуг
│   ├── fonts.ts              # Конфигурация шрифтов
│   ├── globals.css           # Глобальные стили
│   ├── layout.tsx            # Корневой layout
│   └── page.tsx              # Главная страница
├── components/               # React компоненты
│   ├── layout/               # Компоненты макета (header, footer)
│   ├── sections/             # Секции лендинга
│   ├── ui/                   # UI компоненты (shadcn/ui)
│   ├── calendly-embed.tsx    # Компонент для встраивания Calendly
│   ├── mode-toggle.tsx       # Переключатель темы
│   └── theme-provider.tsx    # Провайдер темы
├── lib/                      # Вспомогательные функции
│   └── utils.ts              # Утилиты
├── public/                   # Статические файлы
```

## Кастомизация

### Изменение цветовой схемы

Цветовая схема настроена в `tailwind.config.ts` и `app/globals.css`. Основные цвета:

- `mint`: #DFF1F0
- `ivory`: #FDF9F5
- `soft-blue`: #A0B7FF


### Интеграция с Calendly

Для изменения ссылки на календарь:

1. Откройте файл `app/contact/page.tsx`
2. Найдите компонент `<CalendlyEmbed />`
3. Замените URL на ваш персональный URL Calendly

```tsx
<CalendlyEmbed url="https://calendly.com/your-username/meeting-name" />
```

## Деплой

Проект настроен для работы с Vercel:

```bash
# Сборка для production
npm run build

# Локальный предпросмотр production-сборки
npm run start
```

## Лицензия

MIT
