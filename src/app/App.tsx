import { dentistConfig } from "../config/presets/dentist";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { ConversionPopup } from "./components/ConversionPopup";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar brand={dentistConfig.brand} theme={dentistConfig.theme} />

      <Hero
        hero={dentistConfig.hero}
        theme={dentistConfig.theme}
        contact={dentistConfig.contact}
      />

      <Services
        services={dentistConfig.services}
        theme={dentistConfig.theme}
      />

      <About about={dentistConfig.about} theme={dentistConfig.theme} />

      <Testimonials
        testimonials={dentistConfig.testimonials}
        theme={dentistConfig.theme}
      />

      <FAQ faq={dentistConfig.faq} theme={dentistConfig.theme} />

      <Contact
        contact={dentistConfig.contact}
        theme={dentistConfig.theme}
        brandName={dentistConfig.brand.name}
      />

      <Footer
        brand={dentistConfig.brand}
        contact={dentistConfig.contact}
        theme={dentistConfig.theme}
      />

      <WhatsAppButton phone={dentistConfig.contact.whatsapp} />

      <ConversionPopup
        config={dentistConfig.popup}
        theme={dentistConfig.theme}
      />
    </div>
  );
}