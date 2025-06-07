import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, Tag } from "lucide-react";
import { notFound } from "next/navigation";

// This would typically come from a CMS or database
const services = {
  anxiety: {
    title: "Работа с тревожностью",
    duration: "8-12 сессий",
    category: "Индивидуальная терапия",
    description: "Тревожность может проявляться как постоянное беспокойство, панические атаки, навязчивые мысли или фобии. Я помогу вам разобраться с причинами тревоги и освоить эффективные техники для её снижения.",
    image: "https://images.pexels.com/photos/3807738/pexels-photo-3807738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    blurDataUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAfEAACAQQCAwAAAAAAAAAAAAABAgMABAUREiEGMUH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABgRAAMBAQAAAAAAAAAAAAAAAAABAhEh/9oADAMBAAIRAxEAPwCXx/jdjdxs95cpBGBzAQFnf9Og3r350aUpWnNJvT//2Q==",
    content: [
      {
        title: "Что такое тревожность?",
        text: "Тревожность — это естественная реакция организма на стресс. Однако когда тревога становится чрезмерной, постоянной и мешает повседневной жизни, она может перерасти в тревожное расстройство. Существует несколько типов тревожных расстройств, включая генерализованное тревожное расстройство (ГТР), паническое расстройство, социальную тревожность и различные фобии."
      },
      {
        title: "Симптомы тревожности",
        text: "Тревожность может проявляться как на физическом, так и на психологическом уровне. Физические симптомы включают учащенное сердцебиение, потливость, дрожь, головокружение, проблемы с желудком и нарушения сна. Психологические симптомы могут включать постоянное беспокойство, раздражительность, трудности с концентрацией и ощущение надвигающейся опасности."
      },
      {
        title: "Мой подход к работе с тревожностью",
        text: "В работе с тревожностью я использую комплексный подход, включающий элементы когнитивно-поведенческой терапии (КПТ), техники осознанности и релаксации. КПТ помогает идентифицировать и изменить негативные мыслительные паттерны, которые способствуют тревоге. Техники осознанности и релаксации, такие как глубокое дыхание, прогрессивная мышечная релаксация и медитация, помогают снизить физические проявления тревоги и вернуть контроль над своим состоянием."
      },
      {
        title: "Результаты работы",
        text: "В результате терапии вы научитесь распознавать триггеры тревоги, управлять тревожными мыслями и физическими реакциями на стресс. Вы освоите практические техники, которые можно применять в повседневной жизни для снижения тревожности и предотвращения панических атак. Большинство клиентов отмечают значительное улучшение качества жизни, более спокойный сон, повышение уверенности в себе и способность справляться со стрессовыми ситуациями."
      }
    ]
  },
  depression: {
    title: "Терапия депрессии",
    duration: "12-20 сессий",
    category: "Индивидуальная терапия",
    description: "Депрессия может значительно ухудшить качество жизни, влияя на ваше настроение, энергию, сон и аппетит. Вместе мы разработаем стратегии для преодоления депрессивного состояния и возвращения радости жизни.",
    image: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    blurDataUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAACAgEFAQAAAAAAAAAAAAABAgADBBEFEiFBUf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECIf/aAAwDAQACEQMRAD8AsMbXmvZr8a8LXWCxLjlifdERFTTZ/9k=",
    content: [
      {
        title: "Что такое депрессия?",
        text: "Депрессия — это серьезное расстройство настроения, которое характеризуется постоянным чувством грусти, потерей интереса к деятельности, которая раньше приносила удовольствие, и различными эмоциональными и физическими проблемами, которые могут снизить способность человека функционировать на работе и дома."
      },
      {
        title: "Симптомы депрессии",
        text: "Симптомы депрессии могут варьироваться от легких до тяжелых и включают: постоянное чувство грусти или пустоты, потерю интереса к обычной деятельности, изменения аппетита и веса, проблемы со сном (бессонница или чрезмерный сон), усталость и потерю энергии, чувство вины или никчемности, трудности с мышлением и принятием решений, мысли о смерти или самоубийстве."
      },
      {
        title: "Мой подход к работе с депрессией",
        text: "Я использую интегративный подход к лечению депрессии, который включает когнитивно-поведенческую терапию (КПТ), поведенческую активацию и элементы майндфулнес-практик. КПТ помогает идентифицировать и изменить негативные мыслительные паттерны, которые поддерживают депрессивное состояние. Поведенческая активация фокусируется на увеличении участия в деятельности, которая приносит удовольствие и чувство достижения. Майндфулнес-практики помогают научиться жить в настоящем моменте и развивать принятие своих эмоций без осуждения."
      },
      {
        title: "Результаты работы",
        text: "В результате терапии вы научитесь распознавать и изменять негативные мысли, которые способствуют депрессии, восстановите интерес к приятным активностям, улучшите качество сна и уровень энергии, разовьете здоровые способы справляться со стрессом и трудными эмоциями. Большинство клиентов отмечают значительное улучшение настроения, возвращение интереса к жизни и повышение общего качества жизни."
      }
    ]
  },
  relationships: {
    title: "Гармонизация отношений",
    duration: "8-15 сессий",
    category: "Индивидуальная и парная терапия",
    description: "Отношения требуют постоянной работы и внимания. Я помогу вам улучшить коммуникацию, разрешить конфликты и создать более глубокую связь с близкими людьми, будь то партнер, дети, родители или коллеги.",
    image: "https://images.pexels.com/photos/4049992/pexels-photo-4049992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    blurDataUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAgEAACAQIGAwAAAAAAAAAAAAABAgMABAUREiExQVFx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAMAwEAAhEDEQA/AJK1xC6tbgJNMs0TdFhIKHj7qmiiiiP/2Q==",
    content: [
      {
        title: "Проблемы в отношениях",
        text: "Отношения — это динамический процесс, который требует постоянного внимания и работы. Проблемы в отношениях могут возникать из-за нарушенной коммуникации, неразрешенных конфликтов, разных ожиданий, недостатка эмоциональной близости, нарушенных границ и многих других факторов. Независимо от того, с кем у вас возникают сложности — с партнером, детьми, родителями или коллегами — терапия может помочь улучшить качество этих отношений."
      },
      {
        title: "Признаки проблем в отношениях",
        text: "Частые конфликты и ссоры, ощущение, что вас не слышат или не понимают, избегание общения, чувство одиночества даже в присутствии близкого человека, нарушение доверия, отсутствие эмоциональной или физической близости — все это может указывать на проблемы в отношениях, требующие внимания."
      },
      {
        title: "Мой подход к работе с отношениями",
        text: "Я использую подходы, основанные на научных исследованиях эффективных отношений, включая элементы эмоционально-фокусированной терапии и системной семейной терапии. Основной фокус работы — на улучшении коммуникации, развитии эмпатии и понимания, установлении здоровых границ, разрешении конфликтов и укреплении эмоциональной связи. Я работаю как с индивидуальными клиентами, так и с парами, помогая им улучшить качество отношений."
      },
      {
        title: "Результаты работы",
        text: "В результате терапии вы научитесь эффективно выражать свои потребности и слушать партнера, разрешать конфликты конструктивным образом, устанавливать здоровые границы, углублять эмоциональную близость и поддерживать баланс между близостью и автономией. Клиенты отмечают улучшение общения, снижение конфликтности, повышение уровня удовлетворенности отношениями и более глубокую эмоциональную связь с близкими людьми."
      }
    ]
  },
  burnout: {
    title: "Преодоление выгорания",
    duration: "8-12 сессий",
    category: "Индивидуальная терапия",
    description: "Эмоциональное выгорание может привести к истощению всех ресурсов организма. Я помогу вам распознать признаки выгорания, восстановить энергию и научиться устанавливать здоровые границы для предотвращения рецидивов.",
    image: "https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    blurDataUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQIGAwAAAAAAAAAAAAABAgMABAUGERITIUFRcf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oADAMBAAIRAxEAPwCZtMVurO4KQzrDI3QUyEnj1qooorUP/9k=",
    content: [
      {
        title: "Что такое эмоциональное выгорание?",
        text: "Эмоциональное выгорание — это состояние физического, эмоционального и психического истощения, вызванное длительным стрессом. Изначально термин использовался для описания состояния профессионального истощения, но сейчас признано, что выгорание может возникать в различных сферах жизни — от работы до родительства и ухода за больными родственниками."
      },
      {
        title: "Симптомы выгорания",
        text: "Симптомы выгорания включают: постоянную усталость и истощение (даже после отдыха), снижение иммунитета и частые болезни, бессонницу или нарушения сна, потерю мотивации и интереса, снижение производительности, чувство беспомощности и безнадежности, негативное или циничное отношение к работе или другим обязанностям, изоляцию и отчуждение от других."
      },
      {
        title: "Мой подход к работе с выгоранием",
        text: "Моя работа с выгоранием включает несколько этапов. Первый этап — это восстановление ресурсов организма через улучшение сна, питания и включение регулярной физической активности. Второй этап — анализ и изменение факторов, способствующих выгоранию, включая установку здоровых границ, пересмотр обязательств и изменение нездоровых паттернов поведения. Третий этап — развитие стратегий самопомощи и профилактики, включая техники управления стрессом, практики осознанности и планирование самозаботы."
      },
      {
        title: "Результаты работы",
        text: "В результате терапии вы научитесь распознавать ранние признаки выгорания и принимать меры для его предотвращения, устанавливать здоровые границы на работе и в личной жизни, разовьете практики самозаботы и восстановления энергии, научитесь управлять стрессом и повысите устойчивость к нему. Клиенты отмечают восстановление энергии и интереса к жизни, улучшение производительности, более здоровый баланс между работой и личной жизнью и повышение общего уровня удовлетворенности жизнью."
      }
    ]
  },
};

type ParamsType = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ServicePage({ params }: ParamsType) {
  const { slug } = await params;
  const service = services[slug as keyof typeof services];

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-20">
      <div className="bg-mint/30 py-12 dark:bg-accent/5 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/services" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Назад к услугам
            </Link>
          </Button>
          <h1 className="mb-6 font-playfair text-3xl font-bold md:text-4xl lg:text-5xl">
            {service.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-primary-foreground">
              <Clock className="h-4 w-4" />
              <span>{service.duration}</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-secondary/20 px-3 py-1 text-secondary-foreground">
              <Tag className="h-4 w-4" />
              <span>{service.category}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 md:grid-cols-3 lg:gap-16">
          <div className="md:col-span-2">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="lead text-xl text-muted-foreground">{service.description}</p>
              
              {service.content.map((section, index) => (
                <div key={index} className="mt-8">
                  <h2 className="font-playfair text-2xl font-semibold">{section.title}</h2>
                  <p>{section.text}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="mb-6 font-playfair text-2xl font-semibold">
                Готовы начать работу?
              </h3>
              <p className="mb-6">
                Запишитесь на бесплатную 15-минутную консультацию, чтобы обсудить ваш запрос и узнать, подходит ли вам мой подход.
              </p>
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  Записаться на консультацию <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div>
            <div className="sticky top-24 space-y-8">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={800}
                  className="h-auto w-full object-cover"
                  placeholder="blur"
                  blurDataURL={service.blurDataUrl}
                />
              </div>
              
              <div className="rounded-lg border bg-card p-6">
                <h3 className="mb-4 font-semibold">Запись на консультацию</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Заполните форму на странице контактов или забронируйте время напрямую через онлайн-календарь.
                </p>
                <Button asChild className="w-full gap-2">
                  <Link href="/contact">
                    <CalendarDays className="h-4 w-4" /> Выбрать время
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}