import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Gift } from "lucide-react";

interface ConversionPopupProps {
  config: {
    enabled: boolean;
    delay: number;
    title: string;
    message: string;
    cta: string;
  };
  theme: { primary: string };
}

export function ConversionPopup({ config, theme }: ConversionPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (!config.enabled || hasShown) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
      setHasShown(true);
    }, config.delay);

    return () => clearTimeout(timer);
  }, [config.enabled, config.delay, hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleCTA = () => {
    setIsVisible(false);
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
                aria-label="Cerrar"
              >
                <X size={24} />
              </button>

              {/* Content */}
              <div className="p-8 text-center">
                <div
                  className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: theme.primary }}
                >
                  <Gift size={40} className="text-white" />
                </div>

                <h3 className="text-2xl lg:text-3xl tracking-tight mb-4">
                  {config.title}
                </h3>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {config.message}
                </p>

                <button
                  onClick={handleCTA}
                  className="w-full px-8 py-4 rounded-full text-white text-lg font-medium transition-all hover:scale-105"
                  style={{ backgroundColor: theme.primary }}
                >
                  {config.cta}
                </button>

                <button
                  onClick={handleClose}
                  className="mt-4 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  No, gracias
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
