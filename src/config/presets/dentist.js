export const dentistConfig = {
  // BRANDING
  brand: {
    name: "Clínica Dental Sonrisa",
    tagline: "Tu sonrisa perfecta comienza aquí",
    logo: "🦷", // Se puede reemplazar con imagen
  },

  // THEMING
  theme: {
    primary: "#8B5A3C", // Warm terracotta - earthy confidence
    primaryHover: "#6B4423",
    secondary: "#F5E6D3", // Creamy beige - natural warmth
    accent: "#D4A574", // Sandy gold - organic luxury
    dark: "#2C1810", // Deep earth brown
    light: "#FEFAF6", // Warm off-white
    gradient: "linear-gradient(135deg, #8B5A3C 0%, #D4A574 100%)", // Organic gradient
    organic: "#E8D5C4", // Soft clay tone
  },

  // HERO
  hero: {
    title: "Tu Sonrisa Perfecta Empieza Aquí",
    subtitle: "Odontología moderna con tecnología de última generación. Primera consulta sin cargo.",
    cta: "Reservar Consulta Gratis",
    ctaSecondary: "WhatsApp",
    image: "https://images.unsplash.com/photo-1606811971618-4486d9d36ba5?w=1200&auto=format&fit=crop", // Dentista profesional
  },

  // SERVICES
  services: [
    {
      icon: "Sparkles",
      title: "Blanqueamiento Dental",
      description: "Sonrisa blanca y brillante en una sola sesión con tecnología LED.",
      price: "Desde $8,999",
    },
    {
      icon: "Smile",
      title: "Ortodoncia Invisible",
      description: "Alineadores transparentes para corregir tu sonrisa sin brackets.",
      price: "Desde $24,999",
    },
    {
      icon: "Shield",
      title: "Implantes Dentales",
      description: "Recupera tus dientes con implantes de titanio de por vida.",
      price: "Desde $15,999",
    },
    {
      icon: "Heart",
      title: "Odontología General",
      description: "Limpiezas, obturaciones y tratamientos preventivos.",
      price: "Desde $499",
    },
    {
      icon: "Star",
      title: "Diseño de Sonrisa",
      description: "Transformación completa con carillas de porcelana.",
      price: "Desde $35,999",
    },
    {
      icon: "Clock",
      title: "Urgencias Dentales",
      description: "Atención inmediata para dolor y emergencias las 24hs.",
      price: "Consultar",
    },
  ],

  // ABOUT
  about: {
    title: "Más de 15 Años Transformando Sonrisas",
    description: "Somos un equipo de especialistas comprometidos con tu salud bucal. Utilizamos tecnología de vanguardia y técnicas mínimamente invasivas para garantizar tu comodidad y los mejores resultados.",
    features: [
      "Doctores certificados con especialidades",
      "Tecnología 3D y radiografía digital",
      "Planes de financiamiento sin intereses",
      "Garantía en todos nuestros tratamientos",
    ],
    stats: [
      { number: "15+", label: "Años de experiencia" },
      { number: "8,500+", label: "Pacientes felices" },
      { number: "98%", label: "Satisfacción" },
      { number: "24/7", label: "Urgencias" },
    ],
  },

  // TESTIMONIALS
  testimonials: [
    {
      name: "María González",
      role: "Blanqueamiento + Carillas",
      content: "Increíble experiencia. El Dr. Ramírez me dio la sonrisa que siempre soñé. Sin dolor y resultados inmediatos.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop",
    },
    {
      name: "Carlos Mendoza",
      role: "Implantes Dentales",
      content: "Después de años sin poder masticar bien, los implantes me cambiaron la vida. Altamente recomendados.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop",
    },
    {
      name: "Ana Rodríguez",
      role: "Ortodoncia Invisible",
      content: "Nadie notó que llevaba ortodoncia. En 8 meses tenía los dientes perfectamente alineados.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop",
    },
  ],

  // FAQ
  faq: [
    {
      question: "¿Cómo empiezo mi transformación dental hoy?",
      answer: "¡Fácil! Reserva tu consulta gratuita haciendo clic en 'Reservar Consulta Gratis' o llámanos al WhatsApp. En tu primera visita evaluamos tu caso y creamos un plan personalizado.",
    },
    {
      question: "¿Qué métodos de pago aceptan para los tratamientos?",
      answer: "Aceptamos efectivo, tarjetas de crédito/débito, y ofrecemos planes de financiamiento de 3 a 24 meses sin intereses. También trabajamos con las principales aseguradoras dentales.",
    },
    {
      question: "¿Qué tan rápido puedo ver resultados con blanqueamiento dental?",
      answer: "Verás resultados inmediatos después de la primera sesión de 1 hora. El efecto completo se desarrolla en 48-72 horas, durando de 1 a 3 años con buenos cuidados.",
    },
    {
      question: "¿Es doloroso el proceso de ortodoncia invisible?",
      answer: "No, los alineadores son cómodos y se ajustan gradualmente. Solo sentirás una leve presión los primeros días que desaparece rápidamente. Nuestros pacientes lo describen como 'casi invisible'.",
    },
    {
      question: "¿Qué incluye la garantía en los implantes dentales?",
      answer: "Todos nuestros implantes tienen garantía de por vida. Esto cubre cualquier defecto de fabricación y te da tranquilidad total en tu inversión. Además, ofrecemos seguimiento gratuito por 10 años.",
    },
    {
      question: "¿Cómo sé qué tratamiento es ideal para mí?",
      answer: "En tu consulta gratuita realizamos un diagnóstico completo con tecnología 3D. Te explicamos todas las opciones, sus beneficios y costos, para que tomes la mejor decisión informada. Sin compromiso.",
    },
  ],

  // CONTACT
  contact: {
    phone: "5512345678",
    whatsapp: "5512345678",
    email: "contacto@clinicasonrisa.com",
    address: "Av. Reforma 123, Col. Centro, CDMX",
    mapsUrl: "https://maps.google.com/?q=Av.+Reforma+123+CDMX",
    schedule: "Lun-Vie: 9am-8pm | Sáb: 9am-3pm",
    formspreeId: "xyklywda", // Formspree endpoint para pruebas
  },

  // POPUP CONFIG
  popup: {
    enabled: true,
    delay: 6000, // 6 segundos
    title: "¡Última Oportunidad! 🎁",
    message: "Reserva tu consulta GRATIS en las próximas 24hs y obtén 20% de descuento en tu primer tratamiento.",
    cta: "Quiero mi descuento",
  },

  // SOCIAL PROOF
  socialProof: {
    trustBadges: ["Certificación ADA", "ISO 9001", "Garantía Total"],
    googleRating: 4.9,
    googleReviews: 340,
  },
};
