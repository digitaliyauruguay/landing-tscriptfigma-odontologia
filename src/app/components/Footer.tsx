import { Phone, Mail, MapPin } from "lucide-react";

interface FooterProps {
  brand: { name: string; logo: string };
  contact: {
    phone: string;
    email: string;
    address: string;
    mapsUrl: string;
  };
  theme: { primary: string };
}

export function Footer({ brand, contact, theme }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">{brand.logo}</span>
              <span className="text-xl">{brand.name}</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transformando sonrisas con tecnología de vanguardia y atención
              personalizada desde hace más de 15 años.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2">
              {["servicios", "nosotros", "testimonios", "preguntas-frecuentes", "contacto"].map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        document
                          .getElementById(item)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-gray-400 hover:text-white transition-colors capitalize cursor-pointer hover:scale-105"
                    >
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={18} />
                <a
                  href={`tel:${contact.phone}`}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={18} />
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="mt-1" />
                <a
                  href={contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors cursor-pointer hover:scale-105"
                >
                  {contact.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            © {currentYear} {brand.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
