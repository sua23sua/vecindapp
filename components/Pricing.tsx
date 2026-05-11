"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const baseFeatures = [
  "Envíos ilimitados",
  "Personalización de mensajes",
  "PDF adjunto",
  "Trazabilidad 5 estados",
  "Confirmación automática de vecinos",
  "Certificado de notificación oficial",
  "LOPD automática",
  "Importación Excel (cualquier formato)",
  "Mapeador visual de columnas",
  "Conexión WhatsApp por QR",
  "Soporte email",
];

const plusExtra = [
  "Recordatorios automáticos",
  "Programación de envíos",
  "Historial avanzado con métricas",
  "Exportación CSV",
  "Multi-admin",
  "Soporte chat prioritario",
];

const plans = [
  { name: "Starter",     owners: "Hasta 50 propietarios",   base: "19", plus: "29" },
  { name: "Profesional", owners: "Hasta 150 propietarios",  base: "39", plus: "59", popular: true },
  { name: "Avanzado",    owners: "Hasta 300 propietarios",  base: "69", plus: "99" },
  { name: "Gestoría",    owners: "Hasta 600 propietarios",  base: "119", plus: "169" },
  { name: "Corporativo", owners: "Hasta 1.500 propietarios", base: "199", plus: "279" },
];

const calcPlan = (owners: number) => {
  if (owners <= 50)   return { name: "Starter",     base: 19,  plus: 29 };
  if (owners <= 150)  return { name: "Profesional", base: 39,  plus: 59 };
  if (owners <= 300)  return { name: "Avanzado",    base: 69,  plus: 99 };
  if (owners <= 600)  return { name: "Gestoría",    base: 119, plus: 169 };
  if (owners <= 1500) return { name: "Corporativo", base: 199, plus: 279 };
  return null;
};

export default function Pricing() {
  const [version, setVersion] = useState<"base" | "plus">("base");
  const [owners, setOwners] = useState(100);

  const estimated = calcPlan(owners);

  return (
    <section id="precios" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A3C6E] tracking-tight">
            Un precio por propietarios gestionados. Sin sorpresas.
          </h2>
          <p className="mt-4 text-lg text-[#475569] max-w-2xl mx-auto">
            El plan se ajusta al total de propietarios que gestionas, no al número de comunidades.
          </p>
        </div>

        {/* Base / Plus toggle */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex bg-white border border-[#E2E8F0] rounded-xl p-1 gap-1">
            <button
              onClick={() => setVersion("base")}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                version === "base"
                  ? "bg-[#1A56DB] text-white shadow-sm"
                  : "text-[#475569] hover:text-[#1A3C6E]"
              }`}
            >
              Base
            </button>
            <button
              onClick={() => setVersion("plus")}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                version === "plus"
                  ? "bg-[#1A56DB] text-white shadow-sm"
                  : "text-[#475569] hover:text-[#1A3C6E]"
              }`}
            >
              Plus ✨
            </button>
          </div>
        </div>

        {/* What's included */}
        <div className="mt-6 max-w-3xl mx-auto bg-white rounded-2xl border border-[#E2E8F0] p-6">
          <div className="grid sm:grid-cols-2 gap-3">
            {baseFeatures.map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm text-[#475569]">
                <Check className="w-4 h-4 text-[#15803D] flex-shrink-0" />
                {f}
              </div>
            ))}
            {version === "plus" &&
              plusExtra.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-[#1A56DB] font-medium">
                  <Check className="w-4 h-4 text-[#1A56DB] flex-shrink-0" />
                  {f}
                </div>
              ))}
          </div>
        </div>

        {/* Pricing table */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {plans.map((plan) => {
            const price = version === "base" ? plan.base : plan.plus;
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-6 flex flex-col text-center ${
                  plan.popular
                    ? "bg-[#1A56DB] text-white shadow-xl ring-2 ring-[#1A56DB]"
                    : "bg-white border border-[#E2E8F0] shadow-sm"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#25D366] text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                    Más popular
                  </span>
                )}
                <h3 className={`text-base font-bold ${plan.popular ? "text-white" : "text-[#1A3C6E]"}`}>
                  {plan.name}
                </h3>
                <p className={`mt-1 text-xs ${plan.popular ? "text-white/70" : "text-[#475569]"}`}>
                  {plan.owners}
                </p>
                <div className="mt-4 flex-1 flex flex-col items-center justify-center">
                  <span className={`text-3xl font-bold ${plan.popular ? "text-white" : "text-[#1A3C6E]"}`}>
                    {price}€
                  </span>
                  <span className={`text-xs mt-1 ${plan.popular ? "text-white/70" : "text-[#475569]"}`}>
                    /mes
                  </span>
                </div>
                <a
                  href="https://vecindapp-app.vercel.app/register"
                  className={`mt-5 block py-2 px-4 rounded-xl text-xs font-semibold transition-colors ${
                    plan.popular
                      ? "bg-white text-[#1A56DB] hover:bg-[#EFF6FF]"
                      : "bg-[#1A56DB] text-white hover:bg-[#1A3C6E]"
                  }`}
                >
                  Empezar gratis
                </a>
              </div>
            );
          })}
        </div>

        {/* Free months banner */}
        <div className="mt-8 bg-[#F0FDF4] border border-[#15803D]/20 rounded-2xl px-6 py-4 text-center">
          <p className="text-[#15803D] font-semibold">
            🎉 Los primeros 3 meses son completamente gratis. Sin tarjeta de crédito. Sin permanencia.
          </p>
        </div>

        {/* Calculator */}
        <div className="mt-12 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-8 max-w-lg mx-auto">
          <h3 className="text-lg font-bold text-[#1A3C6E] text-center mb-6">
            Calcula tu coste mensual
          </h3>
          <label className="block text-sm font-medium text-[#475569] mb-2">
            ¿Cuántos propietarios gestionas en total?
          </label>
          <input
            type="range"
            min={10}
            max={1500}
            step={10}
            value={owners}
            onChange={(e) => setOwners(Number(e.target.value))}
            className="w-full accent-[#1A56DB]"
          />
          <div className="flex justify-between text-xs text-[#475569] mt-1">
            <span>10</span>
            <span className="font-semibold text-[#1A56DB]">{owners} propietarios</span>
            <span>1.500</span>
          </div>
          {estimated ? (
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="text-center bg-[#F8FAFC] rounded-xl p-4">
                <p className="text-xs text-[#475569] mb-1">Base</p>
                <p className="text-2xl font-bold text-[#1A56DB]">{estimated.base}<span className="text-sm font-normal text-[#475569]"> €/mes</span></p>
                <p className="text-xs text-[#475569] mt-1">{estimated.name}</p>
                <p className="mt-2 text-xs font-semibold text-[#15803D] bg-[#F0FDF4] rounded-lg px-2 py-1">
                  {(estimated.base / owners).toFixed(3)} €/propietario
                </p>
              </div>
              <div className="text-center bg-[#EFF6FF] rounded-xl p-4 border border-[#1A56DB]/20">
                <p className="text-xs text-[#475569] mb-1">Plus ✨</p>
                <p className="text-2xl font-bold text-[#1A56DB]">{estimated.plus}<span className="text-sm font-normal text-[#475569]"> €/mes</span></p>
                <p className="text-xs text-[#475569] mt-1">{estimated.name}</p>
                <p className="mt-2 text-xs font-semibold text-[#15803D] bg-[#F0FDF4] rounded-lg px-2 py-1">
                  {(estimated.plus / owners).toFixed(3)} €/propietario
                </p>
              </div>
            </div>
          ) : (
            <div className="mt-6 text-center bg-[#F8FAFC] rounded-xl p-4">
              <p className="text-sm text-[#475569]">Plan Corporativo — precio a medida</p>
              <a href="https://vecindapp-app.vercel.app/register" className="mt-2 inline-block text-sm font-semibold text-[#1A56DB] hover:underline">
                Contacta con nosotros →
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
