# 🚀 Landing Page Escalable - Sistema de Presets

Este proyecto implementa el **framework completo de 5 fases** para crear landing pages de alta conversión que puedes replicar para cualquier negocio en minutos.

## 📋 Las 5 Fases Implementadas

### ✅ FASE 1 - CREACIÓN DEL PRODUCTO
Landing completa con componentes modulares:
- ✅ Navbar (fijo, responsive)
- ✅ Hero (full-bleed, CTA claros)
- ✅ Services (grid animado)
- ✅ About (stats + features)
- ✅ Testimonials (prueba social)
- ✅ FAQ (múltiples abiertos)
- ✅ Contact (Formspree integrado)
- ✅ Footer (completo)

### ✅ FASE 2 - CONVERSIÓN
- ✅ Popup temporizador (6-7 segundos)
- ✅ WhatsApp flotante siempre visible
- ✅ CTAs con íconos y hover effects
- ✅ Scroll suave entre secciones
- ✅ FAQ antes del formulario
- ✅ Animaciones con Framer Motion

### ✅ FASE 3 - CAPTURA DE LEADS
- ✅ Formulario con Formspree (sin backend)
- ✅ Validación integrada
- ✅ Estados visuales (enviando/éxito/error)
- ✅ Email directo al cliente

### ✅ FASE 4 - TEMPLATE ESCALABLE
- ✅ Sistema de presets en `/src/config/presets/`
- ✅ Cambio de nicho sin tocar componentes
- ✅ Dos ejemplos: `dentist.js` y `gym.js`

### ✅ FASE 5 - THEMING
- ✅ Colores configurables por preset
- ✅ Variables CSS en `theme.css`
- ✅ Cambio de estética en segundos

---

## 🔄 Cómo Cambiar de Nicho (2 minutos)

### Opción 1: Usar preset existente

1. Abre `/src/app/App.tsx`
2. Cambia la primera línea:

```tsx
// De esto:
import { dentistConfig } from "../config/presets/dentist";

// A esto:
import { gymConfig } from "../config/presets/gym";
```

3. Cambia todas las referencias de `dentistConfig` a `gymConfig`
4. ¡Listo! La landing ahora es para un gym

---

### Opción 2: Crear nuevo preset

1. Copia `/src/config/presets/dentist.js`
2. Renombra a tu nicho: `restaurant.js`, `spa.js`, etc.
3. Edita el contenido:

```js
export const restaurantConfig = {
  brand: {
    name: "Restaurante La Casa",
    tagline: "Sabor auténtico mexicano",
    logo: "🌮",
  },
  
  theme: {
    primary: "#D97706", // Naranja cálido
    primaryHover: "#B45309",
    secondary: "#FEF3C7", // Amarillo claro
    // ...
  },
  
  hero: {
    title: "El Mejor Sabor de México",
    subtitle: "Recetas tradicionales con ingredientes frescos...",
    // ...
  },
  
  // Actualiza servicios, testimonios, FAQ, contacto...
};
```

4. Importa en `App.tsx`:

```tsx
import { restaurantConfig } from "../config/presets/restaurant";
```

---

## 🎨 Theming Rápido

### Cambiar colores del tema:

En tu preset (ej: `dentist.js`):

```js
theme: {
  primary: "#0EA5E9",      // Color principal (botones, títulos)
  primaryHover: "#0284C7", // Hover de botones
  secondary: "#F0F9FF",    // Fondos suaves
  accent: "#10B981",       // Acentos (opcional)
}
```

### Colores recomendados por nicho:

- **Dentista**: Azul (#0EA5E9) - confianza
- **Gym**: Rojo (#EF4444) - energía
- **Spa**: Violeta (#8B5CF6) - relax
- **Restaurante**: Naranja (#D97706) - calidez
- **Tech**: Índigo (#6366F1) - innovación
- **Abogado**: Azul oscuro (#1E40AF) - seriedad

---

## 📦 Estructura de Archivos

```
src/
├── app/
│   ├── App.tsx                    # ← Cambia el import del preset aquí
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── About.tsx
│       ├── Testimonials.tsx
│       ├── FAQ.tsx
│       ├── Contact.tsx
│       ├── Footer.tsx
│       ├── WhatsAppButton.tsx
│       └── ConversionPopup.tsx
│
├── config/
│   └── presets/
│       ├── dentist.js             # ← Preset dentista
│       ├── gym.js                 # ← Preset gym
│       └── [tu-nicho].js          # ← Crea nuevos aquí
│
└── styles/
    └── theme.css                  # Variables CSS base
```

---

## ⚙️ Configurar Formspree (Captura de Leads)

1. Ve a [formspree.io](https://formspree.io)
2. Crea una cuenta gratis
3. Crea un nuevo formulario
4. Copia el ID del formulario (ej: `xyzabc123`)
5. Pégalo en tu preset:

```js
contact: {
  formspreeId: "xyzabc123", // ← Tu ID aquí
  // ...
}
```

6. Ahora los mensajes del formulario llegan a tu email

---

## 🎯 Checklist de Personalización

Cuando crees un preset nuevo, personaliza:

- [ ] Brand (nombre, tagline, logo)
- [ ] Theme (colores primary, secondary)
- [ ] Hero (título, subtítulo, imagen)
- [ ] Services (6 servicios con íconos)
- [ ] About (historia, features, stats)
- [ ] Testimonials (3 testimonios reales)
- [ ] FAQ (6 preguntas específicas del nicho)
- [ ] Contact (teléfono, WhatsApp, email, dirección)
- [ ] Popup (mensaje, timing)
- [ ] Formspree ID

---

## 🚀 Resultado

Con este sistema puedes:

1. **Crear** una landing completa en 10 minutos
2. **Cambiar** de nicho en 2 minutos
3. **Personalizar** colores en segundos
4. **Capturar** leads sin backend
5. **Convertir** con popup + WhatsApp + FAQ

---

## 📊 Métricas de Conversión Incluidas

- ✅ WhatsApp flotante (siempre visible)
- ✅ Popup temporizador (6-7s delay)
- ✅ CTA en Hero (doble: formulario + WhatsApp)
- ✅ FAQ antes del contacto (elimina objeciones)
- ✅ Testimonios con fotos reales
- ✅ Stats de credibilidad
- ✅ Formulario simple (sin fricción)

---

**Creado con el Framework de 5 Fases para Landing Pages Escalables**
