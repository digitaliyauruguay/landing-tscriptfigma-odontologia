import { motion } from "motion/react";
import { Check, Leaf, Award, Users, Clock, TrendingUp } from "lucide-react";
import { useMobileDetection } from "../../hooks/useMobileDetection";

interface AboutProps {
  about: {
    title: string;
    description: string;
    features: string[];
    stats: Array<{ number: string; label: string }>;
  };
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

const statIcons = [Users, Clock, Award, TrendingUp];

export function About({ about, theme }: AboutProps) {
  const isMobile = useMobileDetection();
  return (
    <section 
      id="nosotros" 
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: theme.organic }}
    >
      {/* Organic background elements - Conditional animations */}
      <div className="absolute inset-0 z-0">
        {isMobile ? (
          // Mobile: Static elements for performance
          <>
            <div
              className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-20"
              style={{ 
                background: theme.gradient,
                filter: "blur(120px)"
              }}
            />
            <div
              className="absolute bottom-20 left-20 w-80 h-80 rounded-full opacity-15"
              style={{ 
                background: theme.accent,
                filter: "blur(80px)"
              }}
            />
          </>
        ) : (
          // Desktop: Full animations
          <>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.4 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="absolute top-20 right-20 w-96 h-96 rounded-full"
              style={{ 
                background: theme.gradient,
                filter: "blur(120px)"
              }}
            />
            
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.3 }}
              className="absolute bottom-20 left-20 w-80 h-80 rounded-full"
              style={{ 
                background: theme.accent,
                filter: "blur(80px)"
              }}
            />
          </>
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Content section - Conditional animations */}
          {isMobile ? (
            <div className="lg:col-span-7">
              {/* Organic header - Mobile: Simplified */}
              <div className="flex items-center gap-4 mb-8">
                <Leaf size={32} style={{ color: theme.primary }} />
                <div
                  className="h-1 rounded-full w-20"
                  style={{ backgroundColor: theme.accent }}
                />
              </div>
              
              <h2
                className="text-4xl lg:text-7xl font-bold mb-8 leading-tight"
                style={{ color: theme.primary }}
              >
                {about.title}
              </h2>
              
              <p 
                className="text-lg lg:text-2xl mb-12 leading-relaxed"
                style={{ color: theme.dark }}
              >
                {about.description}
              </p>

              {/* Organic features list - Mobile: Simplified */}
              <div className="space-y-6">
                {about.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-4 group"
                  >
                    <div 
                      className="flex-shrink-0 p-3 rounded-full transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: theme.primary }}
                    >
                      <Check size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <span 
                        className="text-lg lg:text-xl font-medium"
                        style={{ color: theme.dark }}
                      >
                        {feature}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // Desktop: Full animations
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              {/* Organic header */}
              <div className="flex items-center gap-4 mb-8">
                <Leaf size={32} style={{ color: theme.primary }} />
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="h-1 rounded-full"
                  style={{ backgroundColor: theme.accent }}
                />
              </div>
              
              <h2
                className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
                style={{ color: theme.primary }}
              >
                {about.title}
              </h2>
              
              <p 
                className="text-xl lg:text-2xl mb-12 leading-relaxed"
                style={{ color: theme.dark }}
              >
                {about.description}
              </p>

              {/* Organic features list */}
              <div className="space-y-6">
                {about.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="flex items-center gap-4 group"
                  >
                    <div 
                      className="flex-shrink-0 p-3 rounded-full transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: theme.primary }}
                    >
                      <Check size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <span 
                        className="text-lg lg:text-xl font-medium"
                        style={{ color: theme.dark }}
                      >
                        {feature}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Stats section with organic design - Conditional animations */}
          {isMobile ? (
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Background organic shape - Mobile: Simplified */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-80"
                  style={{ 
                    background: theme.gradient,
                    transform: "rotate(3deg)"
                  }}
                />
                
                <div className="relative z-10 p-8 rounded-3xl bg-white/95 backdrop-blur-sm shadow-2xl">
                  <h3 
                    className="text-xl font-bold mb-8 text-center"
                    style={{ color: theme.primary }}
                  >
                    Nuestros Logros
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {about.stats.map((stat, index) => {
                      const Icon = statIcons[index];
                      return (
                        <div
                          key={stat.label}
                          className="text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105"
                          style={{ 
                            backgroundColor: theme.secondary,
                            transform: index % 2 === 0 ? "rotate(-1deg)" : "rotate(1deg)"
                          }}
                        >
                          <div 
                            className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                            style={{ backgroundColor: theme.organic }}
                          >
                            {Icon && <Icon size={24} style={{ color: theme.primary }} />}
                          </div>
                          <div
                            className="text-2xl lg:text-4xl font-bold mb-2"
                            style={{ color: theme.primary }}
                          >
                            {stat.number}
                          </div>
                          <div 
                            className="text-sm font-medium"
                            style={{ color: theme.dark }}
                          >
                            {stat.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Desktop: Full animations
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <div className="relative">
                {/* Background organic shape */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="absolute inset-0 rounded-3xl"
                  style={{ 
                    background: theme.gradient,
                    transform: "rotate(3deg)"
                  }}
                />
                
                <div className="relative z-10 p-8 rounded-3xl bg-white/95 backdrop-blur-sm shadow-2xl">
                  <h3 
                    className="text-2xl font-bold mb-8 text-center"
                    style={{ color: theme.primary }}
                  >
                    Nuestros Logros
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {about.stats.map((stat, index) => {
                      const Icon = statIcons[index];
                      return (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.1 * index }}
                          className="text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105"
                          style={{ 
                            backgroundColor: theme.secondary,
                            transform: index % 2 === 0 ? "rotate(-1deg)" : "rotate(1deg)"
                          }}
                        >
                          <div 
                            className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                            style={{ backgroundColor: theme.organic }}
                          >
                            {Icon && <Icon size={24} style={{ color: theme.primary }} />}
                          </div>
                          <div
                            className="text-3xl lg:text-4xl font-bold mb-2"
                            style={{ color: theme.primary }}
                          >
                            {stat.number}
                          </div>
                          <div 
                            className="text-sm font-medium"
                            style={{ color: theme.dark }}
                          >
                            {stat.label}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Floating decorative elements - Conditional animations */}
        {isMobile ? (
          <div
            className="absolute top-32 left-130 w-16 h-16 rounded-full opacity-20"
            style={{ backgroundColor: theme.accent }}
          />
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute top-32 left-130 w-16 h-16 rounded-full opacity-20"
            style={{ backgroundColor: theme.accent }}
          />
        )}
      </div>
    </section>
  );
}
