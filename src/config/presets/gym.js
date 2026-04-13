export const gymConfig = {
  // BRANDING
  brand: {
    name: "FitZone Gym",
    tagline: "Transforma tu cuerpo, transforma tu vida",
    logo: "💪",
  },

  // THEMING
  theme: {
    primary: "#EF4444", // Red - energía y fuerza
    primaryHover: "#DC2626",
    secondary: "#FEF2F2", // Red light
    accent: "#F97316", // Orange - motivación
    dark: "#0F172A",
    light: "#FFFFFF",
  },

  // HERO
  hero: {
    title: "Alcanza Tu Mejor Versión",
    subtitle: "Entrenamiento personalizado, nutrición y resultados garantizados. Primera clase gratis.",
    cta: "Empieza Hoy",
    ctaSecondary: "WhatsApp",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&auto=format&fit=crop",
  },

  // SERVICES
  services: [
    {
      icon: "Dumbbell",
      title: "Entrenamiento Personal",
      description: "Rutinas personalizadas con coach dedicado para maximizar resultados.",
      price: "Desde $1,200/mes",
    },
    {
      icon: "Users",
      title: "Clases Grupales",
      description: "CrossFit, Spinning, Yoga, Zumba y más. Todas incluidas.",
      price: "Desde $800/mes",
    },
    {
      icon: "Apple",
      title: "Plan Nutricional",
      description: "Asesoría con nutriólogo certificado y plan de comidas.",
      price: "Desde $600/mes",
    },
    {
      icon: "TrendingUp",
      title: "Transformación 90 días",
      description: "Programa completo: gym + nutrición + seguimiento.",
      price: "$4,999",
    },
    {
      icon: "Clock",
      title: "Acceso 24/7",
      description: "Entrena cuando quieras con acceso ilimitado al gimnasio.",
      price: "Incluido",
    },
    {
      icon: "Trophy",
      title: "Desafíos y Retos",
      description: "Competencias mensuales con premios y reconocimientos.",
      price: "Gratis",
    },
  ],

  // ABOUT
  about: {
    title: "Más de 10 Años Transformando Vidas",
    description: "Somos el gimnasio #1 de la zona con más de 2,000 miembros activos. Equipamiento de última generación, entrenadores certificados y una comunidad que te motiva.",
    features: [
      "Equipamiento de marcas premium",
      "Entrenadores certificados internacionalmente",
      "Clases grupales ilimitadas",
      "Regaderas y lockers premium",
    ],
    stats: [
      { number: "10+", label: "Años de experiencia" },
      { number: "2,000+", label: "Miembros activos" },
      { number: "50+", label: "Clases/semana" },
      { number: "24/7", label: "Acceso" },
    ],
  },

  // TESTIMONIALS
  testimonials: [
    {
      name: "Roberto Sánchez",
      role: "Perdió 15kg en 3 meses",
      content: "El mejor gym de mi vida. Los entrenadores son increíbles y el ambiente te motiva a seguir. Ya bajé 15kg y me siento genial.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop",
    },
    {
      name: "Laura Martínez",
      role: "Transformación 90 días",
      content: "Nunca había logrado ser constante hasta que llegué a FitZone. El programa de transformación cambió mi vida por completo.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&auto=format&fit=crop",
    },
    {
      name: "Diego Torres",
      role: "Ganó 8kg de músculo",
      content: "Llevaba años entrenando sin resultados. Aquí me dieron un plan real y funcional. En 6 meses gané 8kg de músculo puro.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop",
    },
  ],

  // FAQ
  faq: [
    {
      question: "¿La primera clase es realmente gratis?",
      answer: "Sí, puedes venir a probar cualquier clase grupal o hacer un tour por las instalaciones sin costo. Solo reserva tu lugar.",
    },
    {
      question: "¿Qué incluye la membresía?",
      answer: "Acceso ilimitado al gimnasio, todas las clases grupales, regaderas, lockers, wifi y estacionamiento. El entrenamiento personal y nutrición tienen costo adicional.",
    },
    {
      question: "¿Tienen plan familiar?",
      answer: "Sí, ofrecemos descuentos del 20% para familias de 2 personas y 30% para 3 o más.",
    },
    {
      question: "¿Puedo congelar mi membresía?",
      answer: "Sí, puedes congelar tu membresía por 15 días al año sin costo adicional presentando justificante médico.",
    },
    {
      question: "¿Tienen estacionamiento?",
      answer: "Sí, tenemos estacionamiento privado gratuito para todos los miembros.",
    },
    {
      question: "¿Necesito experiencia previa?",
      answer: "No, tenemos programas para todos los niveles: principiantes, intermedios y avanzados. Te asignamos un entrenador que te guía en tu primera semana.",
    },
  ],

  // CONTACT
  contact: {
    phone: "5512345678",
    whatsapp: "5512345678",
    email: "hola@fitzonegym.com",
    address: "Av. Insurgentes 456, Col. Roma, CDMX",
    mapsUrl: "https://maps.google.com/?q=Av.+Insurgentes+456+CDMX",
    schedule: "Lun-Vie: 5am-11pm | Sáb-Dom: 7am-9pm",
    formspreeId: "YOUR_FORMSPREE_ID",
  },

  // POPUP CONFIG
  popup: {
    enabled: true,
    delay: 7000,
    title: "🔥 Oferta por Tiempo Limitado",
    message: "Inscríbete hoy y obtén 50% de descuento en tu primer mes + plan nutricional gratis.",
    cta: "Quiero mi descuento",
  },

  // SOCIAL PROOF
  socialProof: {
    trustBadges: ["Entrenadores Certificados", "Equipamiento Premium", "Garantía de Resultados"],
    googleRating: 4.8,
    googleReviews: 520,
  },
};
