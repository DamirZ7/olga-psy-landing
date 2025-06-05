import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

import { blogPosts } from "./data";

// This would typically come from a CMS or database

export default function BlogPage() {
  return (
    <div className="pt-20">
      <div className="bg-mint/30 py-12 dark:bg-accent/5 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h1 className="mb-6 text-center font-playfair text-4xl font-bold md:text-5xl">
            Блог
          </h1>
          <p className="mx-auto mb-0 max-w-2xl text-center text-lg text-muted-foreground">
            Полезные статьи о психологии, самопомощи и личностном росте
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="h-full overflow-hidden transition-shadow hover:shadow-md">
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
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary-foreground">
                    {post.category}
                  </span>
                </div>
                <h2 className="mt-2 line-clamp-2 font-playfair text-xl font-semibold">
                  {post.title}
                </h2>
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
          ))}
        </div>
      </div>
    </div>
  );
}