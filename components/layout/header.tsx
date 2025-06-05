"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Главная", href: "/" },
  { name: "Услуги", href: "/services" },
  { name: "Блог", href: "/blog" },
  { name: "Контакты", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-gray-950/90"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between p-4 md:p-6">
        <Link
          href="/"
          className="font-playfair text-xl font-semibold tracking-tight"
        >
          Ольга Жалтырова
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <div className="flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm transition-colors hover:text-primary ${
                  pathname === item.href
                    ? "font-medium text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button asChild size="sm">
              <Link href="/contact">Записаться</Link>
            </Button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-4 md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            {/* Dropdown sheet */}
            <motion.div
              key="sheet"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", stiffness: 700, damping: 40, duration: 0.25 }}
              className="fixed left-0 right-0 top-0 z-50 mx-auto mt-0 w-full max-w-md rounded-b-2xl bg-background p-6 shadow-2xl border-b border-gray-200 dark:border-gray-800"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-playfair text-xl font-semibold tracking-tight">Ольга Жалтырова</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Закрыть меню"
                  className="text-2xl"
                >
                  <X className="h-7 w-7" />
                </Button>
              </div>
              <nav className="flex flex-col gap-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-lg font-medium transition-colors rounded-lg px-3 py-3 text-center hover:bg-primary/10 hover:text-primary ${
                      pathname === item.href
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild size="lg" className="mt-4 w-full text-lg py-4">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Записаться
                  </Link>
                </Button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}