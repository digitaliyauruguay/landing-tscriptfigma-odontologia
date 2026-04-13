import { motion } from "motion/react";
import {
  Sparkles,
  Smile,
  Shield,
  Heart,
  Star,
  Clock,
  LucideIcon,
  Leaf,
  ChevronRight,
} from "lucide-react";
import { useMobileDetection } from "../../hooks/useMobileDetection";

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
  theme: { 
    primary: string; 
    secondary: string;
    accent: string;
    gradient: string;
    organic: string;
    dark: string;
    light: string;
  };
}

export function Services({ services, theme }: ServicesProps) {
  const isMobile = useMobileDetection();
  return (
    <section 
      id="servicios" 
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: theme.light }}
    >
      {/* Organic background decoration - Conditional animations */}
      <div className="absolute inset-0 z-0">
        {isMobile ? (
          <div
            className="absolute top-40 left-20 w-72 h-72 rounded-full opacity-20"
            style={{ 
              background: theme.gradient,
              filter: "blur(100px)"
            }}
          />
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute top-40 left-20 w-72 h-72 rounded-full"
            style={{ 
              background: theme.gradient,
              filter: "blur(100px)"
            }}
          />
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with organic design - Conditional animations */}
        {isMobile ? (
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Leaf size={28} style={{ color: theme.primary }} />
              <div
                className="h-1 rounded-full w-16"
                style={{ backgroundColor: theme.accent }}
              />
              <Leaf size={28} style={{ color: theme.primary }} />
            </div>
            
            <h2
              className="text-4xl lg:text-7xl font-bold mb-6"
              style={{ color: theme.primary }}
            >
              Nuestros Servicios
            </h2>
            <p 
              className="text-lg lg:text-2xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: theme.dark }}
            >
              Tratamientos naturales y avanzados para transformar tu sonrisa
            </p>
          </div>
        ) : (
          // Desktop: Full animations
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Leaf size={28} style={{ color: theme.primary }} />
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-1 rounded-full"
                style={{ backgroundColor: theme.accent }}
              />
              <Leaf size={28} style={{ color: theme.primary }} />
            </div>
            
            <h2
              className="text-5xl lg:text-7xl font-bold mb-6"
              style={{ color: theme.primary }}
            >
              Nuestros Servicios
            </h2>
            <p 
              className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: theme.dark }}
            >
              Tratamientos naturales y avanzados para transformar tu sonrisa
            </p>
          </motion.div>
        )}

        {/* Asymmetric organic layout */}
        <div className="relative">
          {/* Featured service card - Conditional animations */}
          {isMobile ? (
            <div className="mb-12">
              {services.slice(0, 1).map((service) => {
                const Icon = iconMap[service.icon];
                return (
                  <div
                    key={service.title}
                    className="relative p-8 rounded-3xl overflow-hidden shadow-2xl"
                    style={{ 
                      background: theme.gradient,
                      color: "white"
                    }}
                  >
                    <div className="relative z-10 flex flex-col gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          {Icon && <Icon size={32} className="text-white" />}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                          <p className="text-base opacity-90">{service.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xl font-bold">{service.price}</span>
                      </div>
                    </div>
                    
                    {/* Decorative element - Mobile: Simplified */}
                    <div
                      className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-white/10"
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            // Desktop: Full animations
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              {services.slice(0, 1).map((service, index) => {
                const Icon = iconMap[service.icon];
                return (
                  <div
                    key={service.title}
                    className="relative p-12 rounded-3xl overflow-hidden shadow-2xl"
                    style={{ 
                      background: theme.gradient,
                      color: "white"
                    }}
                  >
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            {Icon && <Icon size={40} className="text-white" />}
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
                            <p className="text-lg opacity-90">{service.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="text-2xl font-bold">{service.price}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative element */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-white/10"
                    />
                  </div>
                );
              })}
            </motion.div>
          )}

          {/* Grid of remaining services with organic variations - Conditional animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.slice(1).map((service, index) => {
              const Icon = iconMap[service.icon];
              const isEven = index % 2 === 0;
              
              if (isMobile) {
                // Mobile: Simplified version
                return (
                  <div
                    key={service.title}
                    className="group relative p-6 rounded-2xl transition-all duration-300 hover:shadow-xl border-2"
                    style={{
                      backgroundColor: theme.secondary,
                      borderColor: "transparent",
                      transform: isEven ? "rotate(-0.5deg)" : "rotate(0.5deg)"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = theme.accent;
                      e.currentTarget.style.transform = "rotate(0deg) scale(1.02)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "transparent";
                      e.currentTarget.style.transform = isEven ? "rotate(-0.5deg)" : "rotate(0.5deg)";
                    }}
                  >
                    {/* Organic corner decoration - Mobile: Simplified */}
                    <div 
                      className="absolute top-0 right-0 w-16 h-16 rounded-bl-full opacity-20"
                      style={{ backgroundColor: theme.accent }}
                    />
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-6">
                        <div 
                          className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                          style={{ backgroundColor: theme.organic }}
                        >
                          {Icon && <Icon size={28} style={{ color: theme.primary }} />}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold mb-2" style={{ color: theme.primary }}>
                            {service.title}
                          </h3>
                          <p 
                            className="text-gray-600 leading-relaxed mb-4 text-sm"
                            style={{ color: theme.dark }}
                          >
                            {service.description}
                          </p>
                          <div className="flex items-center">
                            <span 
                              className="text-lg font-semibold"
                              style={{ color: theme.accent }}
                            >
                              {service.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                // Desktop: Full animations
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative p-8 rounded-2xl transition-all duration-300 hover:shadow-xl border-2"
                    style={{
                      backgroundColor: theme.secondary,
                      borderColor: "transparent",
                      transform: isEven ? "rotate(-0.5deg)" : "rotate(0.5deg)"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = theme.accent;
                      e.currentTarget.style.transform = "rotate(0deg) scale(1.02)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "transparent";
                      e.currentTarget.style.transform = isEven ? "rotate(-0.5deg)" : "rotate(0.5deg)";
                    }}
                  >
                    {/* Organic corner decoration */}
                    <div 
                      className="absolute top-0 right-0 w-16 h-16 rounded-bl-full opacity-20"
                      style={{ backgroundColor: theme.accent }}
                    />
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-6">
                        <div 
                          className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                          style={{ backgroundColor: theme.organic }}
                        >
                          {Icon && <Icon size={32} style={{ color: theme.primary }} />}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2" style={{ color: theme.primary }}>
                            {service.title}
                          </h3>
                          <p 
                            className="text-gray-600 leading-relaxed mb-4"
                            style={{ color: theme.dark }}
                          >
                            {service.description}
                          </p>
                          <div className="flex items-center">
                            <span 
                              className="text-lg font-semibold"
                              style={{ color: theme.accent }}
                            >
                              {service.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
