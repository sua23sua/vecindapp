"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Los vecinos tienen que instalarse alguna aplicación?",
    answer:
      "No. Reciben el mensaje directamente en WhatsApp. Sin registro, sin descargas.",
  },
  {
    question: "¿Qué pasa si un vecino no tiene WhatsApp?",
    answer:
      "El sistema lo marca como fallido en el panel. Puedes contactarle por otro medio. No afecta al resto del envío.",
  },
  {
    question: "¿Puedo enviar a varias comunidades a la vez?",
    answer:
      "Sí. Seleccionas las que quieras y el mensaje se personaliza para cada vecino con su nombre y su piso.",
  },
  {
    question: "¿El informe de evidencia tiene valor legal?",
    answer:
      "Recoge los timestamps de entrega y lectura de WhatsApp más las respuestas de los propietarios. Es una prueba documental sólida ante cualquier disputa sobre notificaciones.",
  },
  {
    question: "¿Qué pasa si WhatsApp me bloquea?",
    answer:
      "El sistema envía con pausas para evitarlo. Si ocurriera, recuperar la cuenta tarda 5-15 minutos. Todos tus datos quedan intactos.",
  },
  {
    question: "¿Puedo probarlo antes de pagar?",
    answer:
      "Sí. Los primeros 3 meses son completamente gratis, sin tarjeta de crédito.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A3C6E] tracking-tight">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-[#1E293B] pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#1A56DB] flex-shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-[#475569] leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
