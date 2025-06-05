import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar } from "lucide-react";
import { blogPosts } from "../data";
import { Button } from "@/components/ui/button";

interface Params {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: Params) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return notFound();
  }

  return (
    <div className="pt-20">
      <div className="bg-mint/30 py-12 dark:bg-accent/5 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Назад к блогу
            </Link>
          </Button>
          <h1 className="mb-2 font-playfair text-3xl font-bold md:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary-foreground">
              {post.category}
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="prose mx-auto dark:prose-invert">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={450}
            className="mb-8 h-auto w-full rounded-lg object-cover"
            placeholder="blur"
            blurDataURL={post.blurDataUrl}
          />
          <p>{post.excerpt}</p>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}
