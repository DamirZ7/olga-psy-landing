"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CalendarDays, MessageCircle, ClipboardList } from "lucide-react";

const steps = [
  {
    icon: CalendarDays,
    title: "Запись на консультацию",
    description: "Заполните контактную форму или забронируйте время через онлайн-календарь. Я свяжусь с вами для подтверждения и ответа на вопросы.",
  },
  {
    icon: MessageCircle,
    title: "Первая встреча",
    description: "На первой консультации мы обсудим вашу ситуацию, запрос и ожидания от терапии. Это позволит определить наиболее эффективный подход.",
  },
  {
    icon: ClipboardList,
    title: "Индивидуальный план",
    description: "Вместе мы разработаем план работы, основанный на ваших потребностях и целях. Регулярные сессии помогут отслеживать прогресс и корректировать стратегии.",
  },
];

export function ProcessSection() {
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

  return (
    <section id="process" className="bg-white dark:bg-background">
      <div className="section-container">
        <h2 className="section-title">Как проходит работа</h2>
        <p className="section-subtitle">
          Понятный процесс, ориентированный на результат
        </p>

        <motion.div
          ref={ref}
          className="grid gap-8 md:grid-cols-3"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step number */}
              <div className="absolute -top-4 left-1/2 flex h-8 w-8 -translate-x-1/2 transform items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="mb-4 mt-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                <step.icon className="h-8 w-8 text-secondary-foreground" />
              </div>

              {/* Content */}
              <h3 className="mb-3 font-playfair text-xl font-semibold">
                {step.title}
              </h3>
              <p className="text-muted-foreground">{step.description}</p>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-20 hidden h-0.5 w-[calc(50%-2rem)] -translate-y-1/2 transform bg-border md:block"></div>
              )}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-20 hidden h-0.5 w-[calc(50%-2rem)] -translate-y-1/2 transform bg-border md:block"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}