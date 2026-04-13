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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [honeypot, setHoneypot] = useState("");

  const clearFieldError = (fieldName: string) => {
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[fieldName];
      return newErrors;
    });
    
    // Clear form status if there are no more errors
    if (formStatus === "success" || formStatus === "error") {
      setFormStatus("idle");
    }
  };

  const handleFieldChange = (fieldName: string) => {
    clearFieldError(fieldName);
  };

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {};
    
    // Name validation
    const name = formData.get('name') as string;
    if (!name || name.trim().length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/.test(name)) {
      newErrors.name = 'El nombre solo puede contener letras y caracteres válidos';
    } else if (name.trim().length > 50) {
      newErrors.name = 'El nombre no puede exceder 50 caracteres';
    }
    
    // Phone validation
    const phone = formData.get('phone') as string;
    if (!phone || phone.trim().length < 8) {
      newErrors.phone = 'El teléfono debe tener al menos 8 dígitos';
    } else if (!/^[+]?[\d\s\-\(\)]+$/.test(phone)) {
      newErrors.phone = 'El teléfono solo puede contener números y caracteres válidos';
    }
    
    // Email validation
    const email = formData.get('email') as string;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = 'Por favor, introduce un email válido';
    }
    
    // Service validation
    const service = formData.get('service') as string;
    if (!service || service === '') {
      newErrors.service = 'Por favor, selecciona un servicio';
    }
    
    // Message validation
    const message = formData.get('message') as string;
    if (!message || message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    } else if (message.trim().length > 500) {
      newErrors.message = 'El mensaje no puede exceder 500 caracteres';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Bot protection - check honeypot
    if (honeypot) {
      console.log('Bot detected - honeypot field filled');
      return;
    }
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Validate form
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length > 0) {
      return;
    }
    
    setFormStatus("sending");

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
        setErrors({});
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
            {/* Honeypot field for bot protection - hidden from users */}
            <input
              type="text"
              name="honeypot"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              style={{ display: 'none' }}
              aria-hidden="true"
            />

            <div>
              <label htmlFor="name" className="block mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                onChange={() => handleFieldChange('name')}
                className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                style={{ "--tw-ring-color": theme.primary } as React.CSSProperties}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
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
                onChange={() => handleFieldChange('phone')}
                className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                style={{ "--tw-ring-color": theme.primary } as React.CSSProperties}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
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
                onChange={() => handleFieldChange('email')}
                className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                style={{ "--tw-ring-color": theme.primary } as React.CSSProperties}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="service" className="block mb-2">
                Servicio de interés
              </label>
              <select
                id="service"
                name="service"
                required
                onChange={() => handleFieldChange('service')}
                className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 ${
                  errors.service ? 'border-red-500' : 'border-gray-300'
                }`}
                style={{ "--tw-ring-color": theme.primary } as React.CSSProperties}
              >
                <option value="">Selecciona un servicio</option>
                <option value="blanqueamiento">Blanqueamiento Dental</option>
                <option value="ortodoncia">Ortodoncia Invisible</option>
                <option value="implantes">Implantes Dentales</option>
                <option value="general">Odontología General</option>
                <option value="diseno">Diseño de Sonrisa</option>
                <option value="urgencias">Urgencias Dentales</option>
                <option value="otro">Otro</option>
              </select>
              {errors.service && (
                <p className="mt-1 text-sm text-red-600">{errors.service}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                onChange={() => handleFieldChange('message')}
                className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                style={{ "--tw-ring-color": theme.primary } as React.CSSProperties}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
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
