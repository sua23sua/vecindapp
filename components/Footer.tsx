import { MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1E293B] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-6 h-6 text-[#1A56DB]" />
              <span className="text-xl font-bold">VecindApp</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              La plataforma de comunicación para administradores de fincas en España.
            </p>
          </div>

          {/* Col 2: Producto */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Producto
            </h4>
            <ul className="space-y-3">
              {["Cómo funciona", "Funcionalidades", "Precios", "FAQ"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-").replace("ó", "o")}`}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {[
                "Política de privacidad",
                "Términos de uso",
                "Aviso legal",
                "Política de cookies",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contacto */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hola@vecindapp.es"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  hola@vecindapp.es
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/40">
            © 2026 VecindApp · Todos los derechos reservados · Hecho con ❤️ en España
          </p>
        </div>
      </div>
    </footer>
  );
}
