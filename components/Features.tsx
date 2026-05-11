import {
  MessageCircle,
  BarChart3,
  FileText,
  Zap,
  Shield,
  ClipboardCheck,
  Upload,
  QrCode,
} from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "WhatsApp nativo",
    description:
      "Los vecinos reciben un mensaje normal de WhatsApp. Sin apps extra. Sin registro. Conectas tu número escaneando un QR en menos de 30 segundos.",
    color: "#25D366",
  },
  {
    icon: BarChart3,
    title: "Trazabilidad completa",
    description:
      "Enviado → Entregado → Leído → Confirmado. Con timestamp exacto de cada estado. Sabes quién ha leído y quién no en tiempo real.",
    color: "#1A56DB",
  },
  {
    icon: FileText,
    title: "Adjunto de PDFs",
    description:
      "Actas, convocatorias, presupuestos. Se envían junto al mensaje de WhatsApp. El vecino los abre desde el propio chat.",
    color: "#D97706",
  },
  {
    icon: Upload,
    title: "Importación flexible de Excel",
    description:
      "¿Tu Excel tiene columnas distintas? No hay problema. El sistema detecta las columnas automáticamente o te deja mapearlas tú con un selector visual.",
    color: "#7C3AED",
  },
  {
    icon: Zap,
    title: "Variables dinámicas",
    description:
      "{{nombre}}, {{vivienda}}, {{comunidad}}, {{fecha_junta}}. Escribes el mensaje una vez y cada vecino recibe uno personalizado.",
    color: "#1A56DB",
  },
  {
    icon: Shield,
    title: "LOPD automática",
    description:
      "Texto legal en el primer mensaje. Sistema de baja por palabra clave. Sin configuración adicional.",
    color: "#15803D",
  },
  {
    icon: ClipboardCheck,
    title: "Certificado de notificación",
    description:
      "Exporta un documento oficial con membrete, resumen estadístico y tabla de evidencias. Quién recibió, quién leyó, quién confirmó y a qué hora.",
    color: "#1A3C6E",
  },
  {
    icon: QrCode,
    title: "Conexión por QR",
    description:
      "Conectas tu número de trabajo desde Ajustes escaneando un QR, igual que WhatsApp Web. Sin configuraciones técnicas.",
    color: "#0891B2",
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
          <p className="mt-4 text-lg text-[#475569] max-w-2xl mx-auto">
            Diseñado específicamente para administradores de fincas. Sin curva de aprendizaje.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <h3 className="text-base font-semibold text-[#1E293B]">{f.title}</h3>
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
