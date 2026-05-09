const stats = [
  { value: "13.000+", label: "Administradores colegiados en España" },
  { value: "140.000+", label: "Comunidades de propietarios" },
  { value: "2 min", label: "Para convocar una junta con VecindApp" },
  { value: "98%", label: "Tasa de apertura en WhatsApp" },
];

export default function Testimonial() {
  return (
    <section className="py-20 bg-[#1A3C6E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            La única herramienta diseñada específicamente para administradores de fincas
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Combina WhatsApp masivo personalizado con trazabilidad legal. No es
            un hack. Es la solución que el sector necesitaba.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-bold text-white">{s.value}</p>
              <p className="mt-2 text-sm text-white/60">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 bg-white/10 rounded-2xl p-8 max-w-2xl mx-auto text-center">
          <p className="text-xl text-white font-medium italic leading-relaxed">
            "Antes tardaba dos horas en preparar las cartas certificadas para una
            convocatoria. Ahora lo hago en dos minutos desde el panel."
          </p>
          <div className="mt-4">
            <p className="text-white font-semibold">— Administrador de Fincas</p>
            <p className="text-white/60 text-sm">Madrid · 35 comunidades gestionadas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
