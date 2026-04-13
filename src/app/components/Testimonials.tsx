import { motion } from "motion/react";
import { Star, Quote, Heart } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
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

export function Testimonials({ testimonials, theme }: TestimonialsProps) {
  return (
    <section 
      id="testimonios" 
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: theme.light }}
    >
      {/* Organic background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute top-32 left-32 w-80 h-80 rounded-full"
          style={{ 
            background: theme.gradient,
            filter: "blur(100px)"
          }}
        />
        
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute bottom-40 right-40 w-72 h-72 rounded-full"
          style={{ 
            background: theme.accent,
            filter: "blur(80px)"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Organic header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <Heart size={28} style={{ color: theme.primary }} />
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-1 rounded-full"
              style={{ backgroundColor: theme.accent }}
            />
            <Heart size={28} style={{ color: theme.primary }} />
          </div>
          
          <h2
            className="text-5xl lg:text-7xl font-bold mb-6"
            style={{ color: theme.primary }}
          >
            Historias de Sonrisas
          </h2>
          <p 
            className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: theme.dark }}
          >
            Las experiencias reales de nuestros pacientes transformados
          </p>
        </motion.div>

        {/* Asymmetric organic testimonial layout */}
        <div className="relative">
          {/* Featured testimonial */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            {testimonials.slice(0, 1).map((testimonial) => (
              <div
                key={testimonial.name}
                className="relative p-10 rounded-3xl overflow-hidden shadow-2xl"
                style={{ 
                  background: theme.gradient,
                  color: "white"
                }}
              >
                {/* Quote icon decoration */}
                <Quote 
                  size={80} 
                  className="absolute top-4 right-4 opacity-10"
                />
                
                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-2 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={24}
                        fill="white"
                        stroke="white"
                        className="drop-shadow-sm"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-lg lg:text-xl mb-8 leading-relaxed font-medium">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-3 border-white/30"
                      />
                      <div 
                        className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: theme.accent }}
                      >
                        <Heart size={12} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xl font-bold">{testimonial.name}</div>
                      <div className="text-white/80">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Grid of remaining testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.slice(1).map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl transition-all duration-300 hover:shadow-xl border-2"
                style={{
                  backgroundColor: theme.secondary,
                  borderColor: "transparent",
                  transform: index % 2 === 0 ? "rotate(-1deg)" : "rotate(1deg)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = theme.accent;
                  e.currentTarget.style.transform = "rotate(0deg) scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "transparent";
                  e.currentTarget.style.transform = index % 2 === 0 ? "rotate(-1deg)" : "rotate(1deg)";
                }}
              >
                {/* Organic corner decoration */}
                <div 
                  className="absolute top-0 right-0 w-12 h-12 rounded-bl-full opacity-20"
                  style={{ backgroundColor: theme.accent }}
                />
                
                {/* Quote icon */}
                <Quote 
                  size={32} 
                  className="mb-4 opacity-30"
                  style={{ color: theme.primary }}
                />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill={theme.accent}
                      stroke={theme.accent}
                    />
                  ))}
                </div>

                {/* Content */}
                <p 
                  className="mb-6 leading-relaxed"
                  style={{ color: theme.dark }}
                >
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2"
                    style={{ borderColor: theme.accent }}
                  />
                  <div>
                    <div 
                      className="font-semibold"
                      style={{ color: theme.primary }}
                    >
                      {testimonial.name}
                    </div>
                    <div 
                      className="text-sm opacity-80"
                      style={{ color: theme.dark }}
                    >
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-20 right-20 w-16 h-16 rounded-full opacity-15"
          style={{ backgroundColor: theme.primary }}
        />
      </div>
    </section>
  );
}
