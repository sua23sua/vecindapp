const steps = [
  {
    num: "01",
    emoji: "📶",
    title: "Conectas tu WhatsApp una sola vez",
    detail:
      "Escaneas un código QR igual que con WhatsApp Web. 30 segundos. El número queda conectado permanentemente para tus comunidades.",
    tip: "Usa un número específico para la administración, no tu móvil personal.",
  },
  {
    num: "02",
    emoji: "📥",
    title: "Importas tus vecinos desde el Excel que ya tienes",
    detail:
      "Arrastras el archivo y el sistema importa, limpia y normaliza todos los teléfonos automáticamente. Formatos aceptados: 612345678, +34 612 345 678, 0034612345678. Vista previa antes de confirmar.",
    tip: null,
  },
  {
    num: "03",
    emoji: "✏️",
    title: "Redactas el mensaje personalizado",
    detail:
      "Escribes una vez. Cada vecino recibe su nombre y su piso. Variables disponibles: {{nombre}}, {{vivienda}}, {{comunidad}}, {{fecha_junta}}. Preview en tiempo real de cómo queda el mensaje.",
    tip: null,
  },
  {
    num: "04",
    emoji: "📎",
    title: "Adjuntas el PDF (si hace falta)",
    detail:
      "El acta, la convocatoria, el presupuesto... lo arrastras y se envía junto al mensaje.",
    tip: null,
  },
  {
    num: "05",
    emoji: "🚀",
    title: "Pulsas Enviar. El sistema hace el resto.",
    detail:
      "Cierra el ordenador. El sistema envía uno a uno con pausas para evitar bloqueos. Para 30 vecinos: ~6 minutos en background.",
    tip: null,
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A3C6E] tracking-tight">
            Del login al primer aviso en menos de 10 minutos
          </h2>
        </div>

        {/* Step indicators */}
        <div className="mt-12 hidden lg:flex items-center justify-center gap-0">
          {steps.map((step, i) => (
            <div key={step.num} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-md"
                  style={{
                    background: `hsl(${220 + i * 20}, ${70 - i * 5}%, ${45 + i * 5}%)`,
                  }}
                >
                  {step.emoji}
                </div>
                <span className="mt-2 text-xs font-bold text-[#1A56DB]">{step.num}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="w-16 h-0.5 bg-gradient-to-r from-[#1A56DB] to-[#25D366] mx-1" />
              )}
            </div>
          ))}
        </div>

        {/* Step details */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          {steps.map((step) => (
            <div
              key={step.num}
              className="flex gap-6 bg-[#F8FAFC] rounded-2xl p-6 border border-[#E2E8F0] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-[#1A56DB] text-white flex items-center justify-center font-bold text-lg">
                  {step.num}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A3C6E]">{step.title}</h3>
                <p className="mt-2 text-[#475569] leading-relaxed">{step.detail}</p>
                {step.tip && (
                  <p className="mt-3 text-sm text-[#1A56DB] bg-[#EFF6FF] rounded-lg px-3 py-2 inline-block">
                    💡 {step.tip}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
