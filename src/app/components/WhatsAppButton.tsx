import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

interface WhatsAppButtonProps {
  phone: string;
}

export function WhatsAppButton({ phone }: WhatsAppButtonProps) {
  const openWhatsApp = () => {
    window.open(`https://wa.me/${phone}`, "_blank");
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} className="text-white" />

      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        ¡Escríbenos ahora!
      </span>
    </motion.button>
  );
}
