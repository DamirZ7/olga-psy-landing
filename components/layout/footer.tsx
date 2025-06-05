import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className='border-t bg-background'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4'>
          <div className='space-y-4'>
            <h3 className='font-playfair text-xl font-semibold'>Ольга Жалтырова</h3>
            <p className='text-sm text-muted-foreground'>
              Психолог, специализирующийся на работе с тревожностью, стрессом и эмоциональным
              выгоранием.
            </p>
          </div>

          <div className='space-y-4'>
            <h3 className='text-sm font-medium uppercase tracking-wider'>Навигация</h3>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='/'
                  className='text-sm text-muted-foreground transition-colors hover:text-primary'>
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-sm text-muted-foreground transition-colors hover:text-primary'>
                  Услуги
                </Link>
              </li>
              <li>
                <Link
                  href='/blog'
                  className='text-sm text-muted-foreground transition-colors hover:text-primary'>
                  Блог
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-sm text-muted-foreground transition-colors hover:text-primary'>
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h3 className='text-sm font-medium uppercase tracking-wider'>Услуги</h3>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='/services/anxiety'
                  className='text-sm text-muted-foreground transition-colors hover:text-primary'>
                  Работа с тревожностью
                </Link>
              </li>
              <li>
                <Link
                  href='/services/depression'
                  className='text-sm text-muted-foreground transition-colors hover:text-primary'>
                  Депрессивные состояния
                </Link>
              </li>
              <li>
                <Link
                  href='/services/relationships'
                  className='text-sm text-muted-foreground transition-colors hover:text-primary'>
                  Отношения
                </Link>
              </li>
              <li>
                <Link
                  href='/services/burnout'
                  className='text-sm text-muted-foreground transition-colors hover:text-primary'>
                  Эмоциональное выгорание
                </Link>
              </li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h3 className='text-sm font-medium uppercase tracking-wider'>Контакты</h3>
            <ul className='space-y-3'>
              <li className='flex items-center gap-2 text-sm text-muted-foreground'>
                <Phone className='h-4 w-4' />
                <span>+7 999 326-15-63</span>
              </li>
              <li className='flex items-center gap-2 text-sm text-muted-foreground'>
                <Mail className='h-4 w-4' />
                <a href='mailto:olga_zhaltyrova@mail.ru' className='hover:text-primary'>
                  olga_zhaltyrova@mail.ru
                </a>
              </li>
              {/* <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>г. Москва, ул. Психологическая, д. 1</span>
              </li> */}
            </ul>
          </div>
        </div>

        <div className='mt-12 border-t pt-8 text-center text-sm text-muted-foreground'>
          <p>&copy; {new Date().getFullYear()} Ольга Жалтырова. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
