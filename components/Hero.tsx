import { ArrowRight, Check } from "lucide-react";

const kpis = [
  { value: ">98%", label: "Tasa de apertura WhatsApp" },
  { value: "0 EUR", label: "Coste por mensaje enviado" },
  { value: "<10 min", label: "Tiempo hasta primer envío" },
  { value: "+140.000", label: "Comunidades en España" },
];

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1A3C6E] tracking-tight leading-tight">
              Notifica a todos tus vecinos por WhatsApp en{" "}
              <span className="text-[#1A56DB]">2 clics</span>
            </h1>
            <p className="mt-6 text-lg text-[#475569] leading-relaxed">
              El administrador de fincas que usa VecindApp tarda 2 minutos en
              convocar una junta. El que no, tarda 2 horas y no puede demostrar
              que lo hizo.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://vecindapp-app.vercel.app/register"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#1A56DB] text-white text-base font-semibold rounded-xl hover:bg-[#1A3C6E] transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Empieza gratis 3 meses
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-[#1A56DB] text-base font-semibold hover:text-[#1A3C6E] transition-colors"
              >
                Ver cómo funciona <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              {["Sin tarjeta de crédito", "Sin permanencia", "Los primeros 3 meses gratis"].map(
                (badge) => (
                  <div key={badge} className="flex items-center gap-2 text-sm text-[#475569]">
                    <Check className="w-4 h-4 text-[#15803D]" />
                    <span>{badge}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right: WhatsApp mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-72 rounded-2xl overflow-hidden shadow-2xl border border-[#E2E8F0]">
              {/* Phone header - WhatsApp style */}
              <div className="bg-[#128C7E] px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">GV</span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Comunidad C/ Gran Vía 42</p>
                  <p className="text-white/70 text-xs">Administrador</p>
                </div>
              </div>

              {/* Chat area */}
              <div className="bg-[#ECE5DD] p-4 min-h-56">
                {/* Message bubble */}
                <div className="bg-[#DCF8C6] rounded-2xl rounded-tl-none p-4 shadow-sm max-w-xs">
                  <p className="text-[#1E293B] text-sm leading-relaxed">
                    Estimada María García, piso 1A:
                    <br />
                    <br />
                    Le convocamos a la Junta General del 28 de mayo a las
                    18:00h.
                  </p>
                  <div className="mt-2 flex items-center gap-2 bg-white/60 rounded-lg p-2">
                    <span className="text-2xl">📎</span>
                    <div>
                      <p className="text-xs font-semibold text-[#1E293B]">Convocatoria.pdf</p>
                      <p className="text-xs text-[#475569]">248 KB</p>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-end items-center gap-1">
                    <span className="text-xs text-[#475569]">10:34</span>
                    <span className="text-xs text-[#1A56DB] font-bold">✓✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* KPI cards */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="bg-[#F8FAFC] rounded-2xl p-6 text-center border border-[#E2E8F0]"
            >
              <p className="text-3xl font-bold text-[#1A56DB]">{kpi.value}</p>
              <p className="mt-1 text-sm text-[#475569]">{kpi.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
