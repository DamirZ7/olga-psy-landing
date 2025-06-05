"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

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
    <section
      id="cta"
      className="bg-gradient-to-r from-primary/20 to-soft-blue/20 dark:from-primary/10 dark:to-soft-blue/10"
    >
      <div className="section-container py-20">
        <motion.div
          ref={ref}
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="mb-6 font-playfair text-3xl font-bold tracking-tight md:text-4xl"
          >
            Готовы сделать первый шаг к гармоничной жизни?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mb-8 text-lg text-muted-foreground"
          >
            Запишитесь на бесплатную 15-минутную консультацию, чтобы обсудить
            ваш запрос и узнать, как я могу помочь.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button asChild size="lg" className="gap-2">
              <Link href="/contact">
                Записаться на консультацию <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}