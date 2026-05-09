"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "4,99",
    description: "Hasta 25 vecinos",
    features: [
      "Envíos ilimitados",
      "Mensaje personalizado",
      "Adjunto PDF",
      "Trazabilidad completa",
      "Informe de evidencia",
      "Soporte por email",
    ],
    highlighted: false,
    cta: "Empezar gratis",
  },
  {
    name: "Estándar",
    price: "7,99",
    description: "26-60 vecinos",
    features: [
      "Todo lo del plan Básico",
      "Recordatorios automáticos",
      "Programación de envíos",
      "Soporte por chat",
    ],
    highlighted: true,
    badge: "Más popular",
    cta: "Empezar gratis",
  },
  {
    name: "Grande",
    price: "11,99",
    description: "61-150 vecinos",
    features: [
      "Todo lo del plan Estándar",
      "Multi-admin (varios usuarios)",
      "Soporte prioritario",
    ],
    highlighted: false,
    cta: "Empezar gratis",
  },
  {
    name: "Corporativo",
    price: "A medida",
    description: "+150 vecinos o gestoras grandes",
    features: [
      "SLA garantizado",
      "Onboarding personalizado",
      "Soporte telefónico",
    ],
    highlighted: false,
    cta: "Contactar",
  },
];

export default function Pricing() {
  const [communities, setCommunities] = useState(10);

  const estimatedPlan =
    communities <= 10
      ? { name: "Básico", price: 4.99 }
      : communities <= 30
      ? { name: "Estándar", price: 7.99 }
      : { name: "Grande", price: 11.99 };

  const total = (communities * estimatedPlan.price).toFixed(2);

  return (
    <section id="precios" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A3C6E] tracking-tight">
            Un precio fijo por comunidad. Sin sorpresas.
          </h2>
          <p className="mt-4 text-lg text-[#475569] max-w-2xl mx-auto">
            Repercútelo directamente a cada comunidad como gasto de administración.
            A 30 vecinos, son 0,23 EUR por propietario al mes.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 flex flex-col relative ${
                plan.highlighted
                  ? "bg-[#1A56DB] text-white shadow-xl scale-105"
                  : "bg-white border border-[#E2E8F0] shadow-sm"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#25D366] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}
              <div>
                <h3
                  className={`text-lg font-bold ${
                    plan.highlighted ? "text-white" : "text-[#1A3C6E]"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-1">
                  {plan.price !== "A medida" ? (
                    <>
                      <span
                        className={`text-3xl font-bold ${
                          plan.highlighted ? "text-white" : "text-[#1A3C6E]"
                        }`}
                      >
                        {plan.price}
                      </span>
                      <span
                        className={`text-sm ${
                          plan.highlighted ? "text-white/70" : "text-[#475569]"
                        }`}
                      >
                        EUR/mes/comunidad
                      </span>
                    </>
                  ) : (
                    <span
                      className={`text-2xl font-bold ${
                        plan.highlighted ? "text-white" : "text-[#1A3C6E]"
                      }`}
                    >
                      {plan.price}
                    </span>
                  )}
                </div>
                <p
                  className={`mt-1 text-sm ${
                    plan.highlighted ? "text-white/70" : "text-[#475569]"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? "text-white" : "text-[#15803D]"
                      }`}
                    />
                    <span className={plan.highlighted ? "text-white/90" : "text-[#475569]"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#registro"
                className={`mt-6 block text-center py-2.5 px-4 rounded-xl text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-white text-[#1A56DB] hover:bg-[#EFF6FF]"
                    : "bg-[#1A56DB] text-white hover:bg-[#1A3C6E]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
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
            ¿Cuántas comunidades gestionas?
          </label>
          <input
            type="range"
            min={1}
            max={100}
            value={communities}
            onChange={(e) => setCommunities(Number(e.target.value))}
            className="w-full accent-[#1A56DB]"
          />
          <div className="flex justify-between text-xs text-[#475569] mt-1">
            <span>1</span>
            <span className="font-semibold text-[#1A56DB]">{communities} comunidades</span>
            <span>100</span>
          </div>
          <div className="mt-6 text-center bg-[#F8FAFC] rounded-xl p-4">
            <p className="text-sm text-[#475569]">Tu plan estimado: {estimatedPlan.name}</p>
            <p className="text-4xl font-bold text-[#1A56DB] mt-1">{total} EUR<span className="text-lg font-normal text-[#475569]">/mes</span></p>
            <p className="text-xs text-[#475569] mt-1">
              ({communities} comunidades × {estimatedPlan.price} EUR)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
