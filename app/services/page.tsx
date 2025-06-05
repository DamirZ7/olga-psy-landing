import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "anxiety",
    title: "Тревожность",
    shortDescription: "Помощь в преодолении панических атак, фобий и генерализованного тревожного расстройства.",
    description: "Тревожность может проявляться как постоянное беспокойство, панические атаки, навязчивые мысли или фобии. Я помогу вам разобраться с причинами тревоги и освоить эффективные техники для её снижения.",
    image: "https://images.pexels.com/photos/3807738/pexels-photo-3807738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    blurDataUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAfEAACAQQCAwAAAAAAAAAAAAABAgMABAUREiEGMUH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABgRAAMBAQAAAAAAAAAAAAAAAAABAhEh/9oADAMBAAIRAxEAPwCXx/jdjdxs95cpBGBzAQFnf9Og3r350aUpWnNJvT//2Q==",
  },
  {
    id: "depression",
    title: "Депрессия",
    shortDescription: "Терапия депрессивных состояний и работа с хронической усталостью и потерей интереса к жизни.",
    description: "Депрессия может значительно ухудшить качество жизни, влияя на ваше настроение, энергию, сон и аппетит. Вместе мы разработаем стратегии для преодоления депрессивного состояния и возвращения радости жизни.",
    image: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    blurDataUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAACAgEFAQAAAAAAAAAAAAABAgADBBEFEiFBUf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECIf/aAAwDAQACEQMRAD8AsMbXmvZr8a8LXWCxLjlifdERFTTZ/9k=",
  },
  {
    id: "relationships",
    title: "Отношения",
    shortDescription: "Помощь в налаживании отношений с партнёром, детьми, родителями и коллегами.",
    description: "Отношения требуют постоянной работы и внимания. Я помогу вам улучшить коммуникацию, разрешить конфликты и создать более глубокую связь с близкими людьми, будь то партнер, дети, родители или коллеги.",
    image: "https://images.pexels.com/photos/4049992/pexels-photo-4049992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    blurDataUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAgEAACAQIGAwAAAAAAAAAAAAABAgMABAUREiExQVFx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAMAwEAAhEDEQA/AJK1xC6tbgJNMs0TdFhIKHj7qmiiiiP/2Q==",
  },
  {
    id: "burnout",
    title: "Выгорание",
    shortDescription: "Восстановление эмоционального баланса и профилактика профессионального выгорания.",
    description: "Эмоциональное выгорание может привести к истощению всех ресурсов организма. Я помогу вам распознать признаки выгорания, восстановить энергию и научиться устанавливать здоровые границы для предотвращения рецидивов.",
    image: "https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    blurDataUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQIGAwAAAAAAAAAAAAABAgMABAUGERITIUFRcf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oADAMBAAIRAxEAPwCZtMVurO4KQzrDI3QUyEnj1qooorUP/9k=",
  },
  {
    id: "grief",
    title: "Переживание утраты",
    shortDescription: "Поддержка в процессе горевания и адаптации к потере близкого человека.",
    description: "Потеря близкого человека — один из самых тяжелых опытов в жизни. Я предлагаю безопасное пространство для проживания горя и помогаю найти способы адаптироваться к жизни после утраты, сохраняя память о близком человеке.",
    image: "https://images.pexels.com/photos/236277/pexels-photo-236277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    blurDataUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAACAgEFAQAAAAAAAAAAAAABAgADBBEFEiFBUf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECIf/aAAwDAQACEQMRAD8AsMbXmvZr8a8LXWCxLjlifdERFTTZ/9k=",
  },
  {
    id: "self-esteem",
    title: "Самооценка",
    shortDescription: "Работа с низкой самооценкой и развитие здорового отношения к себе.",
    description: "Низкая самооценка может ограничивать вас во многих сферах жизни. Я помогу вам исследовать источники негативного самовосприятия, преодолеть внутреннего критика и развить более позитивное и реалистичное отношение к себе.",
    image: "https://images.pexels.com/photos/10679233/pexels-photo-10679233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    blurDataUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQIGAwAAAAAAAAAAAAABAgMABAUGERITIUFRcf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oADAMBAAIRAxEAPwCZtMVurO4KQzrDI3QUyEnj1qooorUP/9k=",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <div className="bg-mint/30 py-12 dark:bg-accent/5 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h1 className="mb-6 text-center font-playfair text-4xl font-bold md:text-5xl">
            Мои услуги
          </h1>
          <p className="mx-auto mb-0 max-w-2xl text-center text-lg text-muted-foreground">
            Я предлагаю профессиональную психологическую помощь в различных сферах
            жизни, используя современные научно-обоснованные методы.
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.id} className="h-full overflow-hidden transition-shadow hover:shadow-md">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    placeholder="blur"
                    blurDataURL={service.blurDataUrl}
                  />
                </div>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{service.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="link" className="px-0">
                    <Link
                      href={`/services/${service.id}`}
                      className="flex items-center gap-2"
                    >
                      Подробнее <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href="/contact">Записаться</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}