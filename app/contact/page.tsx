"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CalendlyEmbed } from "@/components/calendly-embed";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });
      if (res.ok) {
        setFormStatus("success");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <div className="pt-20">
      <div className="bg-mint/30 py-12 dark:bg-accent/5 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h1 className="mb-6 text-center font-playfair text-4xl font-bold md:text-5xl">
            Свяжитесь со мной
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-muted-foreground">
            Запишитесь на бесплатную 15-минутную консультацию или оставьте
            сообщение, и я свяжусь с вами в ближайшее время.
          </p>

          <motion.div
            ref={ref}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm dark:bg-card"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-playfair text-xl font-semibold">
                Телефон
              </h3>
              <p className="text-muted-foreground">+7 999 326-15-63</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Пн-Пт: 9:00 - 19:00
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm dark:bg-card"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-playfair text-xl font-semibold">
                Email
              </h3>
              <p className="text-muted-foreground">olga_zhaltyrova@mail.ru</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Отвечаю в течение 24 часов
              </p>
            </motion.div>

            {/* <motion.div
              variants={itemVariants}
              className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm dark:bg-card md:col-span-2 lg:col-span-1"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-playfair text-xl font-semibold">
                Адрес
              </h3>
              <p className="text-muted-foreground">
                г. Москва, ул. Психологическая, д. 1
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Метро "Гармония", выход 3
              </p>
            </motion.div> */}
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-playfair text-3xl font-bold">
              Оставьте сообщение
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    placeholder="Ваше имя"
                    required
                    disabled={formStatus !== "idle"}
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@mail.ru"
                    required
                    disabled={formStatus !== "idle"}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  disabled={formStatus !== "idle"}
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Сообщение</Label>
                <Textarea
                  id="message"
                  placeholder="Расскажите, чем я могу вам помочь"
                  rows={5}
                  required
                  disabled={formStatus !== "idle"}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                disabled={formStatus !== "idle"}
                className="w-full gap-2"
              >
                {formStatus === "submitting" ? (
                  "Отправка..."
                ) : formStatus === "success" ? (
                  "Отправлено!"
                ) : (
                  <>
                    Отправить <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
              {formStatus === "success" && (
                <p className="text-center text-sm text-green-600 dark:text-green-400">
                  Спасибо за сообщение! Я свяжусь с вами в ближайшее время.
                </p>
              )}
              {formStatus === "error" && (
                <p className="text-center text-sm text-red-600 dark:text-red-400">
                  Произошла ошибка. Пожалуйста, попробуйте еще раз.
                </p>
              )}
            </form>
          </div>

          <div>
            <h2 className="mb-6 font-playfair text-3xl font-bold">
              Запись на консультацию
            </h2>
            <div className="rounded-lg border shadow-sm">
              <CalendlyEmbed url="https://calendly.com/olgazhaltyrova/30min" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}