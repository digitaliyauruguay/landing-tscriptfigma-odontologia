import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

interface ContactProps {
  contact: {
    phone: string;
    email: string;
    address: string;
    mapsUrl: string;
    schedule: string;
    formspreeId: string;
  };
  theme: { primary: string; primaryHover: string };
  brandName: string;
}

export function Contact({ contact, theme, brandName }: ContactProps) {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        `https://formspree.io/f/${contact.formspreeId}`,
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setFormStatus("success");
        form.reset();
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl tracking-tight mb-4"
            style={{ color: theme.primary }}
          >
            Reserva Tu Consulta Gratis
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos listos para transformar tu sonrisa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div
                className="p-3 rounded-xl"
                style={{ backgroundColor: theme.primary }}
              >
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg mb-1">Teléfono</h3>
                <a
                  href={`tel:${contact.phone}`}
                  className="text-gray-600 hover:opacity-70"
                >
                  {contact.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="p-3 rounded-xl"
                style={{ backgroundColor: theme.primary }}
              >
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg mb-1">Email</h3>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-gray-600 hover:opacity-70"
                >
                  {contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="p-3 rounded-xl"
                style={{ backgroundColor: theme.primary }}
              >
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg mb-1">Dirección</h3>
                <a
                  href={contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:opacity-70"
                >
                  {contact.address}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="p-3 rounded-xl"
                style={{ backgroundColor: theme.primary }}
              >
                <Clock size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg mb-1">Horarios</h3>
                <p className="text-gray-600">{contact.schedule}</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2"
                style={{ "--tw-ring-color": theme.primary } as React.CSSProperties}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2"
                style={{ "--tw-ring-color": theme.primary } as React.CSSProperties}
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2"
                style={{ "--tw-ring-color": theme.primary } as React.CSSProperties}
              />
            </div>

            <div>
              <label htmlFor="service" className="block mb-2">
                Servicio de interés
              </label>
              <select
                id="service"
                name="service"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2"
                style={{ "--tw-ring-color": theme.primary } as React.CSSProperties}
              >
                <option value="">Selecciona un servicio</option>
                <option value="blanqueamiento">Blanqueamiento Dental</option>
                <option value="ortodoncia">Ortodoncia Invisible</option>
                <option value="implantes">Implantes Dentales</option>
                <option value="general">Odontología General</option>
                <option value="diseno">Diseño de Sonrisa</option>
                <option value="urgencias">Urgencias Dentales</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2"
                style={{ "--tw-ring-color": theme.primary } as React.CSSProperties}
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === "sending"}
              className="w-full px-8 py-4 rounded-full text-white text-lg font-medium transition-all hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: theme.primary }}
            >
              {formStatus === "sending" ? (
                "Enviando..."
              ) : formStatus === "success" ? (
                "✓ Mensaje enviado"
              ) : formStatus === "error" ? (
                "Error - Intenta de nuevo"
              ) : (
                <>
                  <Send size={20} />
                  Enviar consulta
                </>
              )}
            </button>

            {formStatus === "success" && (
              <p className="text-center text-green-600">
                ¡Gracias! Te contactaremos pronto.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
