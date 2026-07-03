import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { Nav } from "@/components/site/Nav";
import { LogoMark } from "@/components/site/Logo";
import { Reveal } from "@/components/site/Reveal";
import { sectionToggles, projects, reviews } from "@/lib/site-config";

export const Route = createFileRoute("/")({
  component: () => (
    <I18nProvider>
      <Page />
    </I18nProvider>
  ),
});

const MAIL = "mailto:syntropicstudio26@gmail.com";
const MARTIN_ICO = "[DOPLNIT IČO]";
const LUKAS_ICO = "[DOPLNIT IČO]";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
      <span className="h-px w-6 bg-border" />
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-tight text-gradient">
      {children}
    </h2>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section id="home" className="relative overflow-hidden pt-40 pb-28 sm:pt-48 sm:pb-40 bg-grain">
      {/* decorative logo */}
      <div className="pointer-events-none absolute -right-24 top-24 opacity-[0.06] animate-float hidden md:block">
        <LogoMark className="h-[520px] w-[520px] text-foreground" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px hairline" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <Eyebrow>{t("hero_eyebrow")} · SyntropicStudio</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.98] tracking-tight text-gradient max-w-5xl">
            {t("hero_title")}
          </h1>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {t("hero_sub")}
          </p>
        </Reveal>
        <Reveal delay={260}>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground/80 leading-relaxed">
            {t("hero_extra")}
          </p>
        </Reveal>
        <Reveal delay={360}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={MAIL}
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              {t("cta_start")}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground hover:bg-secondary transition-colors"
            >
              {t("cta_secondary")}
            </a>
          </div>
        </Reveal>

        {/* Marquee-ish capabilities */}
        <Reveal delay={500}>
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline rounded-2xl overflow-hidden border border-border">
            {[
              { k: "01", v: t("work_1_t") },
              { k: "02", v: t("work_2_t") },
              { k: "03", v: t("work_3_t") },
              { k: "04", v: t("work_4_t") },
            ].map((c) => (
              <div key={c.k} className="bg-background px-6 py-6">
                <div className="text-[10px] tracking-[0.22em] text-muted-foreground">{c.k}</div>
                <div className="mt-2 text-sm text-foreground">{c.v}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Work() {
  const { t } = useI18n();
  const cards = [
    { t: t("work_1_t"), d: t("work_1_d") },
    { t: t("work_2_t"), d: t("work_2_d") },
    { t: t("work_3_t"), d: t("work_3_d") },
    { t: t("work_4_t"), d: t("work_4_d") },
  ];
  return (
    <section id="work" className="relative py-28 sm:py-36 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Reveal><Eyebrow>{t("work_eyebrow")}</Eyebrow></Reveal>
            <Reveal delay={80}>
              <div className="mt-5"><SectionTitle>{t("work_title")}</SectionTitle></div>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">{t("work_text")}</p>
            </Reveal>
          </div>
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
            {cards.map((c, i) => (
              <Reveal key={c.t} delay={i * 80}>
                <div className="card-premium card-premium-hover p-7 h-full group">
                  <div className="flex items-start justify-between">
                    <LogoMark className="h-7 w-7 text-foreground/70 group-hover:text-foreground transition-colors" />
                    <span className="text-[10px] tracking-[0.22em] text-muted-foreground">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-2xl tracking-tight text-foreground">{c.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const { t } = useI18n();
  const steps = [
    { n: "01", t: t("proc_1_t"), d: t("proc_1_d") },
    { n: "02", t: t("proc_2_t"), d: t("proc_2_d") },
    { n: "03", t: t("proc_3_t"), d: t("proc_3_d") },
  ];
  return (
    <section id="process" className="relative py-28 sm:py-36 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal><Eyebrow>{t("proc_eyebrow")}</Eyebrow></Reveal>
        <Reveal delay={80}>
          <div className="mt-5 max-w-3xl"><SectionTitle>{t("proc_title")}</SectionTitle></div>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-3 gap-px bg-hairline rounded-2xl overflow-hidden border border-border">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="bg-background p-8 h-full min-h-[260px] relative">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-5xl text-foreground/90">{s.n}</span>
                  <span className="h-px flex-1 mx-4 bg-border" />
                  <LogoMark className="h-4 w-4 text-muted-foreground" />
                </div>
                <h3 className="mt-10 text-lg font-medium text-foreground">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  const { t } = useI18n();
  const values = [t("why_v1"), t("why_v2"), t("why_v3"), t("why_v4")];
  return (
    <section className="relative py-28 sm:py-36 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-6">
          <Reveal><Eyebrow>{t("why_eyebrow")}</Eyebrow></Reveal>
          <Reveal delay={80}>
            <div className="mt-5"><SectionTitle>{t("why_title")}</SectionTitle></div>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-muted-foreground max-w-lg leading-relaxed">{t("why_text")}</p>
          </Reveal>
        </div>
        <div className="md:col-span-6 md:pl-8">
          <ul className="divide-y divide-border border-y border-border">
            {values.map((v, i) => (
              <Reveal key={i} delay={i * 80}>
                <li className="flex items-start gap-5 py-6">
                  <span className="font-display text-2xl text-foreground/50 min-w-[2.5rem]">0{i + 1}</span>
                  <span className="text-foreground/90 leading-relaxed">{v}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="relative py-28 sm:py-36 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal><Eyebrow>{t("about_eyebrow")}</Eyebrow></Reveal>
        <Reveal delay={80}>
          <div className="mt-5 max-w-4xl"><SectionTitle>{t("about_title")}</SectionTitle></div>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 max-w-2xl text-muted-foreground leading-relaxed">{t("about_text")}</p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-4">
          {[
            { name: "Martin Páral", role: t("about_martin_role"), bio: t("about_martin_bio"), ico: MARTIN_ICO, initials: "MP" },
            { name: "Lukáš Kořenek", role: t("about_lukas_role"), bio: t("about_lukas_bio"), ico: LUKAS_ICO, initials: "LK" },
          ].map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div className="card-premium card-premium-hover p-8 h-full">
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <div className="h-16 w-16 rounded-full border border-border flex items-center justify-center font-display text-xl text-foreground bg-elevated">
                      {p.initials}
                    </div>
                    <LogoMark className="absolute -bottom-1 -right-1 h-5 w-5 text-foreground bg-background rounded-full p-0.5" />
                  </div>
                  <div>
                    <div className="font-display text-2xl tracking-tight">{p.name}</div>
                    <div className="text-xs text-muted-foreground mt-1 uppercase tracking-[0.16em]">{p.role}</div>
                  </div>
                </div>
                <p className="mt-6 text-sm text-muted-foreground leading-relaxed">{p.bio}</p>
                <div className="mt-6 pt-6 border-t border-border flex items-center justify-between text-xs">
                  <span className="text-muted-foreground uppercase tracking-[0.16em]">{t("ico_label")}</span>
                  <span className="font-mono text-foreground/80">{p.ico}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useI18n();
  return (
    <section id="contact" className="relative py-28 sm:py-40 border-t border-border overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grain" />
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-[0.05]">
        <LogoMark className="h-[480px] w-[480px] text-foreground" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal><div className="flex justify-center"><Eyebrow>{t("contact_eyebrow")}</Eyebrow></div></Reveal>
        <Reveal delay={80}>
          <h2 className="mt-6 font-display text-4xl sm:text-6xl md:text-7xl leading-[1.02] tracking-tight text-gradient">
            {t("contact_title")}
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 mx-auto max-w-xl text-muted-foreground leading-relaxed">{t("contact_text")}</p>
        </Reveal>
        <Reveal delay={240}>
          <a
            href={MAIL}
            className="group mt-12 inline-flex items-center gap-3 rounded-full bg-foreground text-background px-7 py-4 text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            <span>{t("contact_cta")}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="transition-transform group-hover:translate-x-0.5">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-7 w-7 text-foreground" />
            <span className="text-sm font-medium tracking-tight">SyntropicStudio</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            {t("footer_tagline")}
          </p>
          <a href={MAIL} className="mt-6 inline-flex items-center gap-2 text-sm text-foreground hover:text-muted-foreground transition-colors">
            <span className="text-muted-foreground text-xs uppercase tracking-[0.18em]">{t("email_label")}:</span>
            syntropicstudio26@gmail.com
          </a>
        </div>
        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Martin Páral</div>
          <div className="mt-3 text-sm">
            <span className="text-muted-foreground">{t("ico_label")}: </span>
            <span className="font-mono text-foreground/80">{MARTIN_ICO}</span>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Lukáš Kořenek</div>
          <div className="mt-3 text-sm">
            <span className="text-muted-foreground">{t("ico_label")}: </span>
            <span className="font-mono text-foreground/80">{LUKAS_ICO}</span>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>{t("footer_rights")}</span>
        <span className="font-mono">SYNTROPIC / STUDIO</span>
      </div>
    </footer>
  );
}

function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Work />
        <Process />
        <Why />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
