import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Phone, MessageCircle, Leaf, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

// Add CSS animation for fade-in effect
const fadeInAnimation = `
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in {
    animation: fade-in 0.6s ease-out forwards;
  }
`;

interface HeroProps {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
    image: string;
  };
  theme: { 
    primary: string; 
    primaryHover: string;
    secondary: string;
    accent: string;
    gradient: string;
    organic: string;
    dark: string;
    light: string;
  };
  contact: { phone: string; whatsapp: string };
}

export function Hero({ hero, theme, contact }: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const dentistImages = [
    "https://images.pexels.com/photos/6627413/pexels-photo-6627413.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/3946835/pexels-photo-3946835.jpeg?auto=compress&cs=tinysrgb&w=400", 
    "https://images.pexels.com/photos/4687401/pexels-photo-4687401.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/5622232/pexels-photo-5622232.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/15688027/pexels-photo-15688027.jpeg?auto=compress&cs=tinysrgb&w=400"
  ];

  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${contact.whatsapp}`, "_blank");
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % dentistImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + dentistImages.length) % dentistImages.length);
  };

  // Auto-rotate images every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{fadeInAnimation}</style>
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: theme.secondary }}
      >
      {/* Organic Background Elements - Optimized for mobile */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        {/* Floating organic shapes - desktop only */}
        <div
          className="absolute top-1/4 right-10 w-32 h-32 rounded-full opacity-10"
          style={{ 
            background: theme.gradient,
            filter: "blur(60px)"
          }}
        />
        
        <div
          className="absolute top-1/2 right-20 w-24 h-24 rounded-full opacity-15"
          style={{ 
            background: theme.accent,
            filter: "blur(40px)"
          }}
        />
        
        <div
          className="absolute bottom-1/4 right-32 w-20 h-20 rounded-full opacity-10"
          style={{ 
            background: theme.organic,
            filter: "blur(50px)"
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-32 w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
          
          {/* Left Side - Text and Buttons */}
          <div className="flex-1 lg:flex-initial lg:w-1/2">
            {/* Organic decorative element */}
            <div
              className="h-1 rounded-full mb-6 lg:mb-8 w-20 opacity-0 animate-fade-in"
              style={{ backgroundColor: theme.accent }}
            />

            <div
              className="flex items-center gap-2 lg:gap-3 mb-4 lg:mb-6 opacity-0 animate-fade-in"
            >
              <Leaf size={20} style={{ color: theme.primary }} />
              <span 
                className="text-xs lg:text-sm font-medium uppercase tracking-wider"
                style={{ color: theme.primary }}
              >
                Sonrisas Naturales
              </span>
            </div>

            <h1
              className="text-3xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight opacity-0 animate-fade-in"
              style={{ 
                color: theme.primary,
                background: theme.gradient,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {hero.title}
            </h1>

            <p
              className="text-base lg:text-xl mb-6 lg:mb-8 leading-relaxed opacity-0 animate-fade-in"
              style={{ color: theme.dark }}
            >
              {hero.subtitle}
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 lg:gap-6 items-stretch sm:items-start opacity-0 animate-fade-in"
            >
              <button
                onClick={scrollToContact}
                className="group relative px-4 lg:px-6 py-2.5 lg:py-4 rounded-xl lg:rounded-2xl text-white text-sm lg:text-base font-medium transition-all duration-300 flex items-center justify-center gap-2 lg:gap-3 overflow-hidden shadow-xl hover:shadow-2xl flex-1 min-w-0 cursor-pointer w-full"
                style={{ backgroundColor: theme.primary }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: theme.gradient }}
                />
                <span className="relative z-10 flex items-center gap-2 lg:gap-3">
                  <Sparkles size={14} />
                  <span className="text-xs lg:text-sm">{hero.cta}</span>
                </span>
              </button>
            
              <button
                onClick={openWhatsApp}
                className="group px-4 lg:px-6 py-2.5 lg:py-4 rounded-xl lg:rounded-2xl border-2 transition-all duration-300 flex items-center justify-center gap-2 lg:gap-3 hover:scale-105 flex-1 min-w-0 cursor-pointer w-full"
                style={{ 
                  borderColor: theme.accent,
                  color: theme.accent,
                  backgroundColor: "transparent"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.accent;
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = theme.accent;
                }}
              >
                <MessageCircle size={14} />
                <span className="text-xs lg:text-sm">{hero.ctaSecondary}</span>
              </button>
            </div>
          </div>

          {/* Right Side - Photo Carousel */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative w-full h-48 lg:h-80 rounded-2xl overflow-hidden shadow-2xl"
              style={{ backgroundColor: theme.light }}
            >
              {/* Carousel Images */}
              <div className="relative w-full h-full">
                {dentistImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Dental work ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft size={16} style={{ color: theme.primary }} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-colors cursor-pointer hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight size={16} style={{ color: theme.primary }} />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                {dentistImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-1.5 h-1.5 rounded-full transition-colors cursor-pointer ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
