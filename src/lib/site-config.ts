// ============================================================================
// SyntropicStudio – konfigurace obsahu
// ----------------------------------------------------------------------------
// Přepínače sekcí: nastav na `false` pro skrytí sekce na webu.
// Section toggles: set to `false` to hide the section from the site.
// ============================================================================

export const sectionToggles = {
  showProjects: true,
  showReviews: true,
};

// ---- Projekty / Projects ---------------------------------------------------
// Přidávej sem realizované projekty. `image` může být importovaný asset
// nebo URL. Když nevyplníš, zobrazí se dekorativní placeholder.
export type Project = {
  id: string;
  title: { cs: string; en: string };
  tag: { cs: string; en: string };
  description: { cs: string; en: string };
  image?: string;
  url?: string;
  year?: string;
};

export const projects: Project[] = [
  {
    id: "sample-1",
    title: { cs: "Firemní web – Studio Aurora", cs_placeholder: "" as never, en: "Corporate site – Studio Aurora" },
    tag: { cs: "Web na míru", en: "Custom website" },
    description: {
      cs: "Moderní prezentační web pro architektonické studio s důrazem na typografii, prostor a rychlé načítání.",
      en: "A modern presentation site for an architecture studio focused on typography, whitespace and fast loading.",
    },
    year: "2025",
  },
  {
    id: "sample-2",
    title: { cs: "Klientský portál – NovaFlow", en: "Client portal – NovaFlow" },
    tag: { cs: "Digitální nástroj", en: "Digital tool" },
    description: {
      cs: "Interní portál pro správu zakázek, sledování stavů a komunikaci mezi týmem a klienty na jednom místě.",
      en: "An internal portal for managing orders, tracking statuses and streamlining team-to-client communication.",
    },
    year: "2025",
  },
  {
    id: "sample-3",
    title: { cs: "Automatizace onboardingu – Kettel", en: "Onboarding automation – Kettel" },
    tag: { cs: "Automatizace", en: "Automation" },
    description: {
      cs: "Propojení CRM, e-mailingu a interních tabulek. Onboarding nového klienta zkrácen z hodin na minuty.",
      en: "Integrated CRM, mailing and internal spreadsheets. Client onboarding cut from hours down to minutes.",
    },
    year: "2026",
  },
];

// ---- Recenze / Reviews -----------------------------------------------------
export type Review = {
  id: string;
  name: string;
  role: { cs: string; en: string };
  quote: { cs: string; en: string };
  rating?: number; // 1–5
};

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Tereza Nováková",
    role: { cs: "Zakladatelka, Studio Aurora", en: "Founder, Studio Aurora" },
    quote: {
      cs: "SyntropicStudio nám postavili web, který přesně vystihuje náš přístup. Skvělá komunikace, cit pro detail a rychlé dodání.",
      en: "SyntropicStudio built a website that perfectly captures our approach. Great communication, attention to detail, fast delivery.",
    },
    rating: 5,
  },
  {
    id: "r2",
    name: "Petr Malý",
    role: { cs: "COO, NovaFlow", en: "COO, NovaFlow" },
    quote: {
      cs: "Portál nám ušetřil desítky hodin měsíčně. Řešení bylo navrženo přesně podle našich procesů, ne naopak.",
      en: "The portal saved us tens of hours every month. It was designed around our processes, not the other way around.",
    },
    rating: 5,
  },
  {
    id: "r3",
    name: "Klára Havlíčková",
    role: { cs: "Marketing Lead, Kettel", en: "Marketing Lead, Kettel" },
    quote: {
      cs: "Automatizace onboardingu je přesně to, co jsme potřebovali. Profesionální přístup od první konzultace až po předání.",
      en: "The onboarding automation is exactly what we needed. Professional from the first consultation to handover.",
    },
    rating: 5,
  },
];
