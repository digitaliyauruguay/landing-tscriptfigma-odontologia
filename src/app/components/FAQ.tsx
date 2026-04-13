import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faq: FAQItem[];
  theme: { primary: string; secondary: string };
}

export function FAQ({ faq, theme }: FAQProps) {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="preguntas-frecuentes" className="py-24 lg:py-32" style={{ backgroundColor: theme.secondary }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl tracking-tight mb-4"
            style={{ color: theme.primary }}
          >
            Resuelve Tus Dudas
          </h2>
          <p className="text-xl text-gray-600">
            Preguntas clave para tomar acción
          </p>
        </div>

        <div className="space-y-4">
          {faq.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors cursor-pointer hover:scale-102"
              >
                <span className="text-lg pr-4">{item.question}</span>
                <ChevronDown
                  size={24}
                  className={`transition-transform flex-shrink-0 ${
                    openItems.includes(index) ? "rotate-180" : ""
                  }`}
                  style={{ color: theme.primary }}
                />
              </button>

              <AnimatePresence>
                {openItems.includes(index) && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
