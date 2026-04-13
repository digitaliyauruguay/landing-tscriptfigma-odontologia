import { motion } from "motion/react";
import { Check } from "lucide-react";

interface AboutProps {
  about: {
    title: string;
    description: string;
    features: string[];
    stats: Array<{ number: string; label: string }>;
  };
  theme: { primary: string; secondary: string };
}

export function About({ about, theme }: AboutProps) {
  return (
    <section id="nosotros" className="py-24 lg:py-32" style={{ backgroundColor: theme.secondary }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl lg:text-5xl tracking-tight mb-6"
              style={{ color: theme.primary }}
            >
              {about.title}
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {about.description}
            </p>

            <ul className="space-y-4">
              {about.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div
                    className="mt-1 p-1 rounded-full"
                    style={{ backgroundColor: theme.primary }}
                  >
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="text-lg text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-8"
          >
            {about.stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-8 bg-white rounded-2xl shadow-lg"
              >
                <div
                  className="text-5xl lg:text-6xl tracking-tight mb-2"
                  style={{ color: theme.primary }}
                >
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
