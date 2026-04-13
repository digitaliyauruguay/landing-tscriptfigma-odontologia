export const dentistConfig = {
  // BRANDING
  brand: {
    name: "Clínica Dental Sonrisa",
    tagline: "Tu sonrisa perfecta comienza aquí",
    logo: "🦷", // Se puede reemplazar con imagen
  },

  // THEMING
  theme: {
    primary: "#0EA5E9", // Sky blue - confianza profesional
    primaryHover: "#0284C7",
    secondary: "#F0F9FF", // Sky light - limpieza
    accent: "#10B981", // Green - salud
    dark: "#0F172A",
    light: "#FFFFFF",
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
      question: "¿La primera consulta es realmente gratis?",
      answer: "Sí, tu primera consulta incluye revisión completa, diagnóstico y plan de tratamiento sin costo. Solo pagas si decides continuar.",
    },
    {
      question: "¿Aceptan seguros dentales?",
      answer: "Sí, trabajamos con las principales aseguradoras. También ofrecemos planes de financiamiento desde 3 hasta 24 meses sin intereses.",
    },
    {
      question: "¿Los tratamientos son dolorosos?",
      answer: "Utilizamos anestesia local y técnicas modernas para minimizar cualquier molestia. La mayoría de nuestros pacientes reportan tratamientos sin dolor.",
    },
    {
      question: "¿Cuánto dura un blanqueamiento dental?",
      answer: "El tratamiento dura 1 hora. Los resultados pueden durar de 1 a 3 años dependiendo de tus hábitos alimenticios y cuidado dental.",
    },
    {
      question: "¿Tienen estacionamiento?",
      answer: "Sí, contamos con estacionamiento gratuito para pacientes justo en frente de la clínica.",
    },
    {
      question: "¿Atienden urgencias los fines de semana?",
      answer: "Sí, tenemos guardia 24/7 para urgencias. Llama a nuestro número de WhatsApp y te atenderemos de inmediato.",
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
    formspreeId: "YOUR_FORMSPREE_ID", // Reemplazar con el ID real de Formspree
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
