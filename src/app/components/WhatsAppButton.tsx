import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useMobileDetection } from "../../hooks/useMobileDetection";

interface WhatsAppButtonProps {
  phone: string;
}

export function WhatsAppButton({ phone }: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useMobileDetection();

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phone}`, "_blank");
  };

  // Show button after delay for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, isMobile ? 500 : 1000); // Faster on mobile

    return () => clearTimeout(timer);
  }, [isMobile]);

  if (!isVisible) return null;

  if (isMobile) {
    // Mobile: Simplified version without heavy animations
    return (
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 transition-colors group cursor-pointer"
        aria-label="Contactar por WhatsApp"
      >
        <img 
          src="/whatsapp-icon.png" 
          alt="WhatsApp" 
          className="w-8 h-8"
        />

        {/* Simplified tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          ¡Escríbenos!
        </span>
      </button>
    );
  }

  // Desktop: Full animations
  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group cursor-pointer"
      aria-label="Contactar por WhatsApp"
    >
      <img 
        src="/whatsapp-icon.png" 
        alt="WhatsApp" 
        className="w-10 h-10"
      />

      {/* Pulse effect - desktop only */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />

      {/* Enhanced tooltip - desktop */}
      <span className="absolute right-full mr-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        ¡Escríbenos ahora!
      </span>
    </motion.button>
  );
}
