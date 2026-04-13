import { motion } from "motion/react";
import { Phone, MessageCircle } from "lucide-react";

interface HeroProps {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
    image: string;
  };
  theme: { primary: string; primaryHover: string };
  contact: { phone: string; whatsapp: string };
}

export function Hero({ hero, theme, contact }: HeroProps) {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${contact.whatsapp}`, "_blank");
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 lg:pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero.image}
          alt="Clínica Dental"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-7xl tracking-tight mb-6"
            style={{ color: theme.primary }}
          >
            {hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={scrollToContact}
              className="px-8 py-4 rounded-full text-white text-lg font-medium transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              style={{ backgroundColor: theme.primary }}
            >
              <Phone size={20} />
              {hero.cta}
            </button>
            <button
              onClick={openWhatsApp}
              className="px-8 py-4 rounded-full bg-green-500 text-white text-lg font-medium transition-all hover:scale-105 hover:bg-green-600 flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle size={20} />
              {hero.ctaSecondary}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
