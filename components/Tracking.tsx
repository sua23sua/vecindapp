const statusSteps = [
  { num: 1, status: "Enviado",    display: "1 tick gris",       meaning: "Llegó al servidor de WhatsApp",    color: "bg-gray-400",    textColor: "text-gray-600"    },
  { num: 2, status: "Entregado",  display: "2 ticks grises",    meaning: "El móvil del vecino lo recibió",   color: "bg-gray-500",    textColor: "text-gray-600"    },
  { num: 3, status: "Leído",      display: "2 ticks azules ✓✓", meaning: "El vecino abrió el mensaje",       color: "bg-[#1A56DB]",   textColor: "text-[#1A56DB]"   },
  { num: 4, status: "Confirmado", display: "El vecino responde",meaning: "Prueba explícita de recepción",    color: "bg-[#15803D]",   textColor: "text-[#15803D]"   },
  { num: "!", status: "Fallido",  display: "Sin entrega",       meaning: "Alerta para seguimiento manual",   color: "bg-red-500",     textColor: "text-red-600"     },
];

const tracking = [
  { name: "María García",  piso: "1A", leido: "10:34 ✓", confirmado: "10:41 ✓ \"Ok\"",      status: "confirmed" },
  { name: "Josep Martí",   piso: "2B", leido: "10:38 ✓", confirmado: "10:52 ✓ \"RECIBIDO\"", status: "confirmed" },
  { name: "Carles Soler",  piso: "3A", leido: "12:20 ✓", confirmado: "Pendiente",             status: "read"      },
  { name: "Miquel Roca",   piso: "4B", leido: "Sin leer", confirmado: "—",                    status: "unread"    },
];

export default function Tracking() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A3C6E] tracking-tight">
            Sabes exactamente quién leyó tu aviso
          </h2>
          <p className="mt-4 text-lg text-[#475569]">
            Por primera vez, tienes prueba documental de cada notificación enviada.
          </p>
        </div>

        {/* Status steps */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {statusSteps.map((s) => (
            <div key={s.status} className="rounded-2xl border border-[#E2E8F0] p-5 text-center">
              <div className={`w-10 h-10 rounded-full ${s.color} text-white flex items-center justify-center text-sm font-bold mx-auto mb-3`}>
                {s.num}
              </div>
              <p className={`font-semibold ${s.textColor}`}>{s.status}</p>
              <p className="text-xs text-[#475569] mt-1">{s.display}</p>
              <p className="text-xs text-[#475569] mt-2 leading-relaxed">{s.meaning}</p>
            </div>
          ))}
        </div>

        {/* Mock panel */}
        <div className="mt-12 max-w-2xl mx-auto bg-white rounded-2xl border border-[#E2E8F0] shadow-md overflow-hidden">
          <div className="bg-[#1A3C6E] px-6 py-4">
            <p className="text-white font-semibold">Seguimiento: Convocatoria Junta Mayo</p>
            <p className="text-white/70 text-sm">C/ Gran Vía 42 · 32 propietarios · 14 may 10:32</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#475569] uppercase">Propietario</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#475569] uppercase">Piso</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#475569] uppercase">Leído</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#475569] uppercase">Confirmado</th>
                </tr>
              </thead>
              <tbody>
                {tracking.map((row) => (
                  <tr key={row.name} className="border-b border-[#E2E8F0] last:border-0">
                    <td className="px-6 py-3 text-sm font-medium text-[#1E293B]">{row.name}</td>
                    <td className="px-6 py-3 text-sm text-[#475569]">{row.piso}</td>
                    <td className={`px-6 py-3 text-sm font-medium ${row.status === "unread" ? "text-[#475569]" : "text-[#1A56DB]"}`}>
                      {row.leido}
                    </td>
                    <td className={`px-6 py-3 text-sm font-medium ${row.status === "confirmed" ? "text-[#15803D]" : "text-[#475569]"}`}>
                      {row.confirmado}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 bg-[#F8FAFC] flex items-center justify-between gap-4">
            <p className="text-xs text-[#475569]">2 confirmados · 1 leído · 1 pendiente · 0 fallidos</p>
            <button className="py-2 px-4 bg-[#1A56DB] text-white text-sm font-semibold rounded-xl hover:bg-[#1A3C6E] transition-colors whitespace-nowrap">
              Certificado de notificación
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
