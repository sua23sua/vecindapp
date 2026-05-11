import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="registro" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1A3C6E] tracking-tight">
          Empieza hoy. Primera factura en 3 meses.
        </h2>
        <p className="mt-4 text-lg text-[#475569]">
          Únete a los primeros administradores que ya usan VecindApp.
        </p>

        <div className="mt-10 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-8 space-y-4">
          <a
            href="https://vecindapp-app.vercel.app/register"
            className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-[#1A56DB] text-white text-lg font-semibold rounded-xl hover:bg-[#1A3C6E] transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Crear mi cuenta gratis <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="https://vecindapp-app.vercel.app/login"
            className="w-full flex items-center justify-center gap-2 py-3 px-6 border border-[#E2E8F0] text-[#475569] font-medium rounded-xl hover:border-[#1A56DB] hover:text-[#1A56DB] transition-all duration-200"
          >
            Ya tengo cuenta → Iniciar sesión
          </a>
          <p className="text-center text-xs text-[#475569]">
            Sin tarjeta · Sin permanencia · Cancela cuando quieras
          </p>
        </div>
      </div>
    </section>
  );
}
