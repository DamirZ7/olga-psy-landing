"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Award, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
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

  const qualifications = [
    {
      title: "Психолог-консультант",
      institution: "Московский Государственный Университет",
      year: "2012",
      icon: GraduationCap,
    },
    {
      title: "Когнитивно-поведенческая терапия",
      institution: "Институт психотерапии и клинической психологии",
      year: "2014",
      icon: BookOpen,
    },
    {
      title: "EMDR-терапия",
      institution: "Европейская ассоциация EMDR",
      year: "2016",
      icon: Award,
    },
    {
      title: "Майндфулнес-практики",
      institution: "Международный институт осознанности",
      year: "2018",
      icon: Award,
    },
  ];

  return (
    <section id="about" className="bg-white dark:bg-background">
      <div className="section-container">
        <h2 className="section-title">Обо мне</h2>
        <p className="section-subtitle">
          Квалифицированный психолог с более чем 10-летним опытом работы
        </p>

        <motion.div
          ref={ref}
          className="grid gap-8 md:grid-cols-2"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg">
              Я — Ольга Жалтырова, психолог с клиническим образованием и большим
              опытом работы с людьми, столкнувшимися с тревожностью, депрессией,
              выгоранием и трудностями в отношениях.
            </p>
            <p>
              В своей практике я сочетаю научно-обоснованные методы
              когнитивно-поведенческой терапии, техники осознанности и
              элементы EMDR-терапии, адаптируя их под уникальные потребности
              каждого клиента.
            </p>
            <p>
              Я твердо верю, что каждый человек обладает внутренними ресурсами
              для преодоления жизненных трудностей. Моя задача — помочь вам
              обнаружить эти ресурсы и развить навыки, которые позволят
              справляться с трудностями самостоятельно.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="mb-6 font-playfair text-xl font-semibold">
              Образование и квалификация
            </h3>
            <div className="grid gap-4">
              {qualifications.map((item, index) => (
                <Card key={index}>
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.institution}, {item.year}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}