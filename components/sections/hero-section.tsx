"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-mint/30 to-white dark:from-accent/10 dark:to-background pt-20">
      <div className="section-container flex flex-col items-center justify-center min-h-[calc(100vh-5rem)]">
        <motion.div
          className="grid gap-12 md:grid-cols-2 md:gap-8 lg:gap-16 items-center"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center md:items-start md:text-left">
            <h1 className="mb-6 font-playfair text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Помогаю справиться с тревогой, стрессом и выгоранием
            </h1>
            <p className="mb-8 max-w-md text-lg text-muted-foreground md:text-xl">
              Найдите внутреннюю гармонию и повысьте качество жизни с помощью
              персонализированной психологической поддержки.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  Бесплатная 15-минутная консультация
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">Узнать о моих услугах</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative mx-auto aspect-square w-full max-w-md rounded-full md:ml-auto"
          >
            <div className="absolute inset-0 rounded-full bg-soft-blue/20 dark:bg-soft-blue/10"></div>
            <Image
              src="/images/logo_2.jpg"
              alt="Ольга Жалтырова"
              width={500}
              height={500}
              className="rounded-full object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQIGAwAAAAAAAAAAAAABAgMABAUGERITIUFRcf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oADAMBAAIRAxEAPwCZtMVurO4KQzrDI3QUyEnj1qooorUP/9k="
              priority
            />
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}