"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    content:
      "Работа с Ольгой помогла мне преодолеть хроническую тревогу, которая преследовала меня годами. Её подход сочетает профессионализм с искренней заботой. Теперь у меня есть инструменты, чтобы справляться с тревожными мыслями самостоятельно.",
    author: "Елена М.",
  },
  {
    id: 2,
    content:
      "После выгорания на работе я чувствовал себя совершенно опустошенным. Ольга помогла мне понять причины выгорания и восстановить внутренние ресурсы. Благодаря нашей работе я нашел новый баланс между карьерой и личной жизнью.",
    author: "Сергей К.",
  },
  {
    id: 3,
    content:
      "Когда мы с мужем оказались на грани развода, обратились к Ольге. Её поддержка и профессиональные рекомендации помогли нам восстановить коммуникацию и вернуть теплоту в отношения. Очень благодарна за её работу.",
    author: "Анна Д.",
  },
  {
    id: 4,
    content:
      "После потери близкого человека я впала в глубокую депрессию. Ольга помогла мне пройти через горе, не избегая болезненных чувств. Её подход был бережным и при этом очень эффективным. Сейчас я снова могу радоваться жизни.",
    author: "Ольга П.",
  },
  {
    id: 5,
    content:
      "Панические атаки полностью разрушали мою жизнь. После нескольких месяцев работы с Ольгой их частота значительно снизилась, а затем они прекратились совсем. Я получил ценные навыки управления тревогой, которые использую до сих пор.",
    author: "Михаил Т.",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Calculate visible testimonials (current, next, next+1 for desktop)
  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="bg-ivory dark:bg-accent/5">
      <div className="section-container">
        <h2 className="section-title">Отзывы клиентов</h2>
        <p className="section-subtitle">
          Истории людей, которым я помогла
        </p>

        <motion.div
          ref={ref}
          className="relative"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {visibleTestimonials.map((testimonial, index) => (
              <Card
                key={`${testimonial.id}-${index}`}
                className="overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-start">
                    <Quote className="h-10 w-10 text-primary/30" />
                  </div>
                  <p className="mb-6 italic text-muted-foreground">
                    "{testimonial.content}"
                  </p>
                  <p className="font-semibold">{testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <div className="mt-8 flex justify-center gap-4">
            <Button
              onClick={prevSlide}
              size="icon"
              variant="outline"
              className="rounded-full"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              onClick={nextSlide}
              size="icon"
              variant="outline"
              className="rounded-full"
              aria-label="Следующий отзыв"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}