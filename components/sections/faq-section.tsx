"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Сколько длится сеанс психотерапии?",
    answer:
      "Стандартная продолжительность сеанса составляет 50 минут. Для первой консультации рекомендую выделить 1,5 часа, чтобы у нас было достаточно времени для знакомства и обсуждения вашего запроса.",
  },
  {
    question: "Как часто нужно посещать психолога?",
    answer:
      "Обычно терапевтические сессии проводятся один раз в неделю. Такая периодичность позволяет поддерживать непрерывность процесса и обеспечивает достаточно времени для практики новых навыков между сессиями. В некоторых случаях мы можем скорректировать частоту встреч в соответствии с вашими потребностями.",
  },
  {
    question: "Сколько сеансов потребуется для решения моей проблемы?",
    answer:
      "Продолжительность терапии индивидуальна и зависит от характера проблемы, её глубины и вашей вовлеченности в процесс. Краткосрочная терапия может занять 8-12 сессий, работа с более глубокими проблемами может потребовать 20-30 сессий или более. Мы будем регулярно оценивать прогресс и корректировать план работы.",
  },
  {
    question: "Проводите ли вы консультации онлайн?",
    answer:
      "Да, я провожу консультации как очно в кабинете, так и онлайн через защищенные платформы для видеосвязи. Онлайн-формат особенно удобен, если вы часто путешествуете, проживаете в другом городе или предпочитаете заниматься из дома.",
  },
  {
    question: "Что делать, если я не могу прийти на сеанс?",
    answer:
      "Если вам нужно отменить или перенести сеанс, пожалуйста, сообщите мне об этом не менее чем за 24 часа до назначенного времени. При отмене менее чем за 24 часа сеанс считается проведенным и оплачивается полностью.",
  },
  {
    question: "Как понять, подходит ли мне психолог?",
    answer:
      "Комфорт и доверие в отношениях с психологом — важные факторы успешной терапии. Я предлагаю начать с бесплатной 15-минутной консультации, чтобы вы могли задать вопросы и определить, насколько вам комфортно со мной работать. Помните, что иногда требуется 2-3 сессии, чтобы сформировать терапевтический альянс.",
  },
];

export function FaqSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section id="faq" className="bg-white dark:bg-background">
      <div className="section-container">
        <h2 className="section-title">Часто задаваемые вопросы</h2>
        <p className="section-subtitle">
          Ответы на распространенные вопросы о психотерапии
        </p>

        <motion.div
          ref={ref}
          className="mx-auto max-w-3xl"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}