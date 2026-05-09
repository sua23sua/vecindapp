"use client";

import { useState, useEffect } from "react";
import { MessageSquare, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-[#1A56DB]" />
            <span className="text-xl font-bold text-[#1A3C6E]">VecindApp</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#como-funciona"
              className="text-sm font-medium text-[#475569] hover:text-[#1A56DB] transition-colors"
            >
              Cómo funciona
            </a>
            <a
              href="#funcionalidades"
              className="text-sm font-medium text-[#475569] hover:text-[#1A56DB] transition-colors"
            >
              Funcionalidades
            </a>
            <a
              href="#precios"
              className="text-sm font-medium text-[#475569] hover:text-[#1A56DB] transition-colors"
            >
              Precios
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-[#475569] hover:text-[#1A56DB] transition-colors"
            >
              FAQ
            </a>
            <a
              href="#registro"
              className="inline-flex items-center px-4 py-2 bg-[#1A56DB] text-white text-sm font-semibold rounded-xl hover:bg-[#1A3C6E] transition-colors"
            >
              Empieza gratis
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#475569]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#E2E8F0] px-4 py-4 flex flex-col gap-4">
          <a
            href="#como-funciona"
            className="text-sm font-medium text-[#475569]"
            onClick={() => setMenuOpen(false)}
          >
            Cómo funciona
          </a>
          <a
            href="#funcionalidades"
            className="text-sm font-medium text-[#475569]"
            onClick={() => setMenuOpen(false)}
          >
            Funcionalidades
          </a>
          <a
            href="#precios"
            className="text-sm font-medium text-[#475569]"
            onClick={() => setMenuOpen(false)}
          >
            Precios
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-[#475569]"
            onClick={() => setMenuOpen(false)}
          >
            FAQ
          </a>
          <a
            href="#registro"
            className="inline-flex items-center justify-center px-4 py-2 bg-[#1A56DB] text-white text-sm font-semibold rounded-xl"
            onClick={() => setMenuOpen(false)}
          >
            Empieza gratis
          </a>
        </div>
      )}
    </nav>
  );
}
