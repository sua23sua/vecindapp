import {
  MessageCircle,
  BarChart3,
  FileText,
  Zap,
  Shield,
  ClipboardCheck,
} from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "WhatsApp nativo",
    description:
      "Los vecinos reciben un mensaje normal de WhatsApp. Sin apps extra. Sin registro.",
    color: "#25D366",
  },
  {
    icon: BarChart3,
    title: "Trazabilidad completa",
    description:
      "Enviado → Entregado → Leído → Confirmado. Con timestamp de cada estado.",
    color: "#1A56DB",
  },
  {
    icon: FileText,
    title: "Adjunto de PDFs",
    description:
      "Actas, convocatorias, presupuestos. Hasta 16 MB por envío.",
    color: "#D97706",
  },
  {
    icon: Zap,
    title: "Variables dinámicas",
    description:
      "{{nombre}}, {{vivienda}}, {{comunidad}}. Personalización masiva sin esfuerzo.",
    color: "#1A56DB",
  },
  {
    icon: Shield,
    title: "LOPD automática",
    description:
      "Texto legal en el primer mensaje. Sistema de baja por palabra clave. Automático.",
    color: "#15803D",
  },
  {
    icon: ClipboardCheck,
    title: "Informe de evidencia",
    description:
      "Exporta un PDF con la lista de quién leyó y confirmó. Valor legal ante disputas.",
    color: "#1A3C6E",
  },
];

export default function Features() {
  return (
    <section id="funcionalidades" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A3C6E] tracking-tight">
            Todo lo que necesitas. Nada que no necesitas.
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: f.color + "20" }}
                >
                  <Icon className="w-6 h-6" style={{ color: f.color }} />
                </div>
                <h3 className="text-lg font-semibold text-[#1E293B]">{f.title}</h3>
                <p className="mt-2 text-[#475569] text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
