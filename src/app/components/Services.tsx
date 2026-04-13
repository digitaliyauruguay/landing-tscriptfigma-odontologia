import { motion } from "motion/react";
import {
  Sparkles,
  Smile,
  Shield,
  Heart,
  Star,
  Clock,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Smile,
  Shield,
  Heart,
  Star,
  Clock,
};

interface Service {
  icon: string;
  title: string;
  description: string;
  price: string;
}

interface ServicesProps {
  services: Service[];
  theme: { primary: string; secondary: string };
}

export function Services({ services, theme }: ServicesProps) {
  return (
    <section id="servicios" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl tracking-tight mb-4"
            style={{ color: theme.primary }}
          >
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tratamientos de vanguardia para cada necesidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-2xl transition-all hover:shadow-xl border border-gray-100"
                style={{
                  backgroundColor: "white",
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: theme.secondary }}
                >
                  {Icon && <Icon size={28} style={{ color: theme.primary }} />}
                </div>
                <h3 className="text-xl mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <p
                  className="text-lg"
                  style={{ color: theme.primary }}
                >
                  {service.price}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
