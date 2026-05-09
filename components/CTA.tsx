"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ email: "", name: "", company: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("vecindapp_registered", JSON.stringify(form));
    setSubmitted(true);
  };

  return (
    <section id="registro" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1A3C6E] tracking-tight">
          Empieza hoy. Primera factura en 3 meses.
        </h2>
        <p className="mt-4 text-lg text-[#475569]">
          Únete a los primeros administradores que ya usan VecindApp.
        </p>

        {submitted ? (
          <div className="mt-10 bg-[#F0FDF4] border border-[#15803D]/20 rounded-2xl p-10">
            <p className="text-4xl mb-4">🎉</p>
            <h3 className="text-2xl font-bold text-[#15803D]">¡Gracias!</h3>
            <p className="mt-2 text-[#475569]">
              Te avisamos pronto. Estarás entre los primeros en acceder a VecindApp.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-10 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-8 text-left space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-[#1E293B] mb-1">
                Email profesional
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="tu@administracion.es"
                className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#1A56DB] transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1E293B] mb-1">
                Nombre y apellidos
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Juan García López"
                className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#1A56DB] transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1E293B] mb-1">
                Nombre de la gestoría/administración
              </label>
              <input
                type="text"
                required
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="Administraciones García S.L."
                className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#1A56DB] transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-[#1A56DB] text-white font-semibold rounded-xl hover:bg-[#1A3C6E] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Crear mi cuenta gratis <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-center text-xs text-[#475569]">
              Sin tarjeta · Sin permanencia · Cancela cuando quieras
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
