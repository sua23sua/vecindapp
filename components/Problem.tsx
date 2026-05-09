import { ClipboardList, Mail, Mail as Letter, Smartphone, X, Check } from "lucide-react";

const problems = [
  {
    icon: ClipboardList,
    title: "Carteles en el portal",
    description: "Los ve menos del 30% de los vecinos. Ninguna trazabilidad.",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Tasa de apertura inferior al 20%. Va a spam. Sin acuse de recibo.",
  },
  {
    icon: Letter,
    title: "Carta certificada",
    description: "2-5 EUR por vecino. 2 horas de preparación. Inviable para avisos frecuentes.",
  },
  {
    icon: Smartphone,
    title: "Grupo de WhatsApp personal",
    description:
      "Invasión de privacidad. Caos. Te escriben a las 11 de la noche.",
  },
];

const comparison = [
  {
    situation: "Convocar una junta (30 vecinos)",
    without: "1-2 horas + 60-150 EUR",
    with: "2 minutos",
  },
  {
    situation: "Avisar de una avería urgente",
    without: "20-30 min (llamadas + carteles)",
    with: "30 segundos",
  },
  {
    situation: "Saber quién leyó el aviso",
    without: "Imposible",
    with: "En tiempo real",
  },
  {
    situation: "Prueba legal de notificación",
    without: "Solo firma en papel",
    with: "Informe PDF con timestamps",
  },
  {
    situation: "Coste por comunidad al mes",
    without: "60-150 EUR (cartas)",
    with: "5-12 EUR",
  },
];

export default function Problem() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A3C6E] tracking-tight">
            ¿Cuánto tiempo pierdes comunicándote con tus vecinos?
          </h2>
          <p className="mt-4 text-lg text-[#475569]">
            Los canales actuales fallan de formas distintas. Todos fallan.
          </p>
        </div>

        {/* Problem cards */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="bg-red-50 border border-red-200 rounded-2xl p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-1"
              >
                <Icon className="w-8 h-8 text-red-500 mb-3" />
                <h3 className="font-semibold text-[#1E293B] mb-2">{p.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{p.description}</p>
              </div>
            );
          })}
        </div>

        {/* Comparison table */}
        <div className="mt-16 overflow-x-auto rounded-2xl shadow-sm border border-[#E2E8F0]">
          <table className="w-full bg-white">
            <thead>
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#475569] border-b border-[#E2E8F0]">
                  Situación
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-red-600 border-b border-[#E2E8F0] bg-red-50">
                  <X className="w-4 h-4 inline mr-1" />
                  Sin VecindApp
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-[#15803D] border-b border-[#E2E8F0] bg-[#F0FDF4]">
                  <Check className="w-4 h-4 inline mr-1" />
                  Con VecindApp
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr
                  key={row.situation}
                  className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}
                >
                  <td className="px-6 py-4 text-sm font-medium text-[#1E293B]">
                    {row.situation}
                  </td>
                  <td className="px-6 py-4 text-sm text-red-600 text-center bg-red-50/50">
                    {row.without}
                  </td>
                  <td className="px-6 py-4 text-sm text-[#15803D] font-semibold text-center bg-[#F0FDF4]/50">
                    {row.with}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
