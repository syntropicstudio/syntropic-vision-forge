import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "cs" | "en";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: keyof typeof dict.cs) => string };

const dict = {
  cs: {
    nav_home: "Úvod",
    nav_work: "Co tvoříme",
    nav_process: "Jak to funguje",
    nav_about: "O nás",
    nav_projects: "Projekty",
    nav_reviews: "Recenze",
    nav_contact: "Kontakt",

    projects_eyebrow: "Projekty",
    projects_title: "Vybrané realizace",
    projects_text: "Ukázka projektů, na kterých jsme pracovali. Každé řešení bylo navrženo přesně podle potřeb konkrétního klienta.",
    projects_view: "Zobrazit detail",
    projects_open_site: "Otevřít web",
    projects_prev: "Předchozí",
    projects_next: "Další",
    projects_close: "Zavřít",
    projects_no_images: "K tomuto projektu zatím nejsou nahrané žádné obrázky.",
    projects_image_of: "z",

    reviews_eyebrow: "Recenze",
    reviews_title: "Co o nás říkají klienti",
    reviews_text: "Zpětná vazba od firem, se kterými jsme spolupracovali.",
    cta_start: "Začít konzultací",
    cta_secondary: "Co tvoříme",

    hero_eyebrow: "Digitální studio",
    hero_title: "Tvoříme digitální řešení, která posouvají firmy dál",
    hero_sub: "Jsme SyntropicStudio. Pomáháme firmám s tvorbou webových stránek, digitálních nástrojů, aplikací a automatizací na míru.",
    hero_extra: "Začínáme tam, kde běžné šablony končí. Navrhujeme a stavíme řešení, která dávají smysl pro váš byznys, procesy i zákazníky.",

    work_eyebrow: "Co tvoříme",
    work_title: "Od webů po chytré digitální systémy",
    work_text: "Vytváříme řešení na míru pro firmy, které chtějí působit profesionálněji, fungovat efektivněji a mít digitální nástroje připravené na růst.",
    work_1_t: "Webové stránky na míru",
    work_1_d: "Moderní prezentační weby, landing pages a firemní stránky navržené tak, aby působily profesionálně, byly přehledné a pomáhaly získávat důvěru zákazníků.",
    work_2_t: "Digitální nástroje",
    work_2_d: "Interní nástroje, klientské portály, jednoduché systémy a rozhraní, která zjednodušují každodenní práci.",
    work_3_t: "Aplikace na míru",
    work_3_d: "Webové aplikace a softwarová řešení stavěná podle konkrétních potřeb firmy, ne podle omezení hotové šablony.",
    work_4_t: "Automatizace",
    work_4_d: "Automatizace opakujících se procesů, propojení nástrojů a tvorba systémů, které šetří čas i energii.",

    proc_eyebrow: "Proces",
    proc_title: "Jednoduchý proces. Promyšlený výsledek",
    proc_1_t: "První konzultace",
    proc_1_d: "Nejprve pochopíme váš záměr, cíle, aktuální situaci a to, co má nové řešení skutečně přinést.",
    proc_2_t: "Návrh",
    proc_2_d: "Navrhneme strukturu, funkce, vizuální směr a způsob řešení tak, aby dával smysl pro vás i vaše zákazníky.",
    proc_3_t: "Realizace",
    proc_3_d: "Postavíme funkční, moderní a připravené řešení, které můžete začít používat a dále rozvíjet.",

    why_eyebrow: "Proč SyntropicStudio",
    why_title: "Technologie s lidským přístupem",
    why_text: "Věříme, že dobré digitální řešení není jen o vzhledu nebo kódu. Musí vycházet z toho, jak firma skutečně funguje, co potřebují její zákazníci a kam se chce posouvat.",
    why_v1: "Přemýšlíme strategicky, ne jen vizuálně.",
    why_v2: "Navrhujeme řešení na míru, ne univerzální šablony.",
    why_v3: "Stavíme moderně, čistě a s důrazem na detail.",
    why_v4: "Díváme se na projekt jako na začátek dlouhodobého růstu.",

    about_eyebrow: "O nás",
    about_title: "Jsme dva zakladatelé, kteří staví digitální řešení s nadšením i přesností",
    about_text: "SyntropicStudio tvoří Martin Páral a Lukáš Kořenek. Jsme zakladatelé, nadšenci do technologií a lidé, kteří chtějí firmám pomáhat tvořit smysluplná digitální řešení. Spojujeme moderní přístup, cit pro detail a chuť hledat řešení, která nejsou jen hezká na pohled, ale hlavně užitečná v praxi.",
    about_martin_role: "Zakladatel SyntropicStudio",
    about_martin_bio: "Nadšenec do technologií, digitálních řešení a moderního webového vývoje.",
    about_lukas_role: "Zakladatel SyntropicStudio",
    about_lukas_bio: "V SyntropicStudio propojuji praktické zkušenosti z IT s lidským pohledem na potřeby klienta. Baví mě hledat jednoduchá a funkční řešení tam, kde technologie mohou ušetřit čas, zpřehlednit práci nebo pomoct firmě lépe se prezentovat. Věřím, že dobrý web, aplikace nebo automatizace nemají být složité — mají být srozumitelné, promyšlené a užitečné v reálném provozu. Ke každému projektu proto přistupuji tak, abych nejdřív pochopil jeho smysl a až potom hledal nejlepší cestu k výsledku.",
    ico_label: "IČO",

    contact_eyebrow: "Kontakt",
    contact_title: "Máte nápad? Začněme konzultací",
    contact_text: "Ať už potřebujete nový web, digitální nástroj, aplikaci nebo automatizaci, napište nám. Společně zjistíme, jaké řešení bude dávat největší smysl.",
    contact_cta: "Kontaktovat SyntropicStudio",

    footer_tagline: "Webové stránky, digitální nástroje, aplikace a automatizace na míru.",
    footer_rights: "© SyntropicStudio. Všechna práva vyhrazena.",
    email_label: "Email",
  },
  en: {
    nav_home: "Home",
    nav_work: "What we create",
    nav_process: "Process",
    nav_about: "About us",
    nav_projects: "Projects",
    nav_reviews: "Reviews",
    nav_contact: "Contact",

    projects_eyebrow: "Projects",
    projects_title: "Selected work",
    projects_text: "A sample of projects we've delivered. Each solution was tailored to the specific needs of the client.",
    projects_view: "View details",
    projects_open_site: "Open website",
    projects_prev: "Previous",
    projects_next: "Next",
    projects_close: "Close",
    projects_no_images: "No images have been uploaded for this project yet.",
    projects_image_of: "of",

    reviews_eyebrow: "Reviews",
    reviews_title: "What clients say",
    reviews_text: "Feedback from companies we've collaborated with.",
    cta_start: "Start with a consultation",
    cta_secondary: "What we create",

    hero_eyebrow: "Digital studio",
    hero_title: "We create digital solutions that move businesses forward.",
    hero_sub: "We are SyntropicStudio. We help companies build custom websites, digital tools, applications and automation systems.",
    hero_extra: "We start where generic templates end. We design and build solutions that make sense for your business, processes and customers.",

    work_eyebrow: "What we create",
    work_title: "From websites to intelligent digital systems",
    work_text: "We create custom solutions for companies that want to look more professional, work more efficiently and build digital tools ready for growth.",
    work_1_t: "Custom Websites",
    work_1_d: "Modern presentation websites, landing pages and company websites designed to look professional, stay clear and build trust with customers.",
    work_2_t: "Digital Tools",
    work_2_d: "Internal tools, client portals, simple systems and interfaces that make everyday work easier.",
    work_3_t: "Custom Applications",
    work_3_d: "Web applications and software solutions built around specific business needs, not around the limits of ready-made templates.",
    work_4_t: "Automation",
    work_4_d: "Automation of repetitive processes, tool integrations and systems that save time and energy.",

    proc_eyebrow: "Process",
    proc_title: "A simple process. A thoughtful result.",
    proc_1_t: "First Consultation",
    proc_1_d: "We start by understanding your idea, goals, current situation and what the new solution should actually achieve.",
    proc_2_t: "Proposal",
    proc_2_d: "We design the structure, features, visual direction and solution approach so it makes sense for both you and your customers.",
    proc_3_t: "Implementation",
    proc_3_d: "We build a functional, modern and ready-to-use solution that can grow with your business.",

    why_eyebrow: "Why SyntropicStudio",
    why_title: "Technology with a human approach",
    why_text: "We believe a good digital solution is not only about visuals or code. It has to reflect how a company actually works, what its customers need and where the business wants to go.",
    why_v1: "We think strategically, not only visually.",
    why_v2: "We design custom solutions, not generic templates.",
    why_v3: "We build modern, clean and detail-focused products.",
    why_v4: "We see each project as the beginning of long-term growth.",

    about_eyebrow: "About",
    about_title: "We are two founders building digital solutions with passion and precision.",
    about_text: "SyntropicStudio is created by Martin Páral and Lukáš Kořenek. We are founders, technology enthusiasts and people who want to help companies build meaningful digital solutions. We combine a modern approach, attention to detail and the drive to create solutions that are not only visually impressive, but genuinely useful in practice.",
    about_martin_role: "Founder of SyntropicStudio",
    about_martin_bio: "Technology enthusiast focused on digital solutions and modern web development.",
    about_lukas_role: "Founder of SyntropicStudio",
    about_lukas_bio: "Technology enthusiast focused on automation and smart digital systems.",
    ico_label: "Company ID",

    contact_eyebrow: "Contact",
    contact_title: "Have an idea? Let's start with a consultation.",
    contact_text: "Whether you need a new website, a digital tool, an application or automation, contact us. Together, we will find the solution that makes the most sense.",
    contact_cta: "Contact SyntropicStudio",

    footer_tagline: "Custom websites, digital tools, applications and automation.",
    footer_rights: "© SyntropicStudio. All rights reserved.",
    email_label: "Email",
  },
} as const;

const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("cs");
  useEffect(() => {
    try {
      const s = localStorage.getItem("lang") as Lang | null;
      if (s === "cs" || s === "en") setLangState(s);
    } catch {}
  }, []);
  useEffect(() => {
    try { localStorage.setItem("lang", lang); } catch {}
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);
  const setLang = (l: Lang) => setLangState(l);
  const t = (k: keyof typeof dict.cs): string => dict[lang][k];
  return <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const c = useContext(I18nCtx);
  if (!c) throw new Error("useI18n must be used within I18nProvider");
  return c;
}
