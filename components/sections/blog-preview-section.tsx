"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const blogPosts = [
  {
    slug: "managing-anxiety-everyday-techniques",
    title: "Управление тревогой: техники для повседневной жизни",
    excerpt: "Простые, но эффективные стратегии, которые помогут справиться с тревожностью в повседневных ситуациях.",
    date: "10 мая 2023",
    image: "https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    blurDataUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAABBAIDAQAAAAAAAAAAAAABAAIDBAURIUFRYf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8AsONxc2UtAGSey7d8oiJtGf/Z",
  },
  {
    slug: "burnout-recovery-self-care",
    title: "Восстановление после выгорания: практики самопомощи",
    excerpt: "Как распознать признаки выгорания и какие шаги предпринять для восстановления эмоционального баланса.",
    date: "2 апреля 2023",
    image: "https://images.pexels.com/photos/3771836/pexels-photo-3771836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    blurDataUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAdEAABBAMBAQAAAAAAAAAAAAABAAIDBBEhQVES/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAWEQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhEDEQA/AJ7E1pCyGTlxGHDzuiiLFl//2Q==",
  },
  {
    slug: "healthy-relationships-boundaries",
    title: "Здоровые отношения: важность личных границ",
    excerpt: "Как устанавливать и поддерживать здоровые границы в отношениях с партнёром, семьёй и коллегами.",
    date: "15 марта 2023",
    image: "https://images.pexels.com/photos/5699466/pexels-photo-5699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    blurDataUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAABBAIDAQAAAAAAAAAAAAABAAIDBAURIUFRYf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8AsONxc2UtAGSey7d8oiJtGf/Z",
  },
];

export function BlogPreviewSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="blog-preview" className="bg-secondary/30 dark:bg-secondary/10">
      <div className="section-container">
        <h2 className="section-title">Блог</h2>
        <p className="section-subtitle">
          Полезные статьи о психологии и самопомощи
        </p>

        <motion.div
          ref={ref}
          className="grid gap-6 md:grid-cols-3"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {blogPosts.map((post) => (
            <motion.div key={post.slug} variants={itemVariants}>
              <Card className="h-full overflow-hidden transition-shadow hover:shadow-md">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    placeholder="blur"
                    blurDataURL={post.blurDataUrl}
                  />
                </div>
                <CardHeader className="p-4 pb-0">
                  <div className="mb-2 text-sm text-muted-foreground">
                    {post.date}
                  </div>
                  <h3 className="line-clamp-2 font-playfair text-xl font-semibold">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <p className="line-clamp-3 text-muted-foreground">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button asChild variant="link" className="px-0">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-2"
                    >
                      Читать полностью <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link href="/blog" className="flex items-center gap-2">
              Все статьи <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}