"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Leaf, Eye } from "lucide-react";

const methods = [
  {
    icon: Brain,
    title: "Когнитивно-поведенческая терапия (КПТ)",
    description: "Научно доказанный метод, помогающий изменить негативные мыслительные паттерны и поведение, влияющие на ваше эмоциональное состояние.",
  },
  {
    icon: Leaf,
    title: "Майндфулнес",
    description: "Практики осознанности помогают вернуться в настоящий момент, снизить тревогу и научиться принимать свои мысли и чувства без осуждения.",
  },
  {
    icon: Eye,
    title: "EMDR-терапия",
    description: "Метод десенсибилизации и переработки с помощью движений глаз, эффективный при работе с травматическим опытом и навязчивыми мыслями.",
  },
];

export function MethodsSection() {
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
    <section id="methods" className="bg-soft-blue/10 dark:bg-secondary/20">
      <div className="section-container">
        <h2 className="section-title">Методы работы</h2>
        <p className="section-subtitle">
          Сочетание современных подходов для достижения максимального результата
        </p>

        <motion.div
          ref={ref}
          className="grid gap-8 md:grid-cols-3"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {methods.map((method, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm dark:bg-card"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                <method.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-4 font-playfair text-xl font-semibold">
                {method.title}
              </h3>
              <p className="text-muted-foreground">{method.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}