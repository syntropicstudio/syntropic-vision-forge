import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { Nav } from "@/components/site/Nav";
import { LogoMark } from "@/components/site/Logo";
import { Reveal } from "@/components/site/Reveal";
import { sectionToggles, projects, reviews, aboutPeople } from "@/lib/site-config";

export const Route = createFileRoute("/")({
  component: () => (
    <I18nProvider>
      <Page />
    </I18nProvider>
  ),
});

const MAIL = "mailto:syntropicstudio26@gmail.com";

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
              href="#contact"
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
  const { t, lang } = useI18n();
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
          {aboutPeople.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div className="card-premium card-premium-hover p-8 h-full">
                <div className="flex items-center gap-5">
                  <div className="relative">
                    {p.photo ? (
                      <img
                        src={p.photo}
                        alt={p.name}
                        className="h-16 w-16 rounded-full border border-border object-cover"
                      />
                    ) : (
                      <div className="h-16 w-16 rounded-full border border-border flex items-center justify-center font-display text-xl text-foreground bg-elevated">
                        {p.initials}
                      </div>
                    )}
                    <LogoMark className="absolute -bottom-1 -right-1 h-5 w-5 text-foreground bg-background rounded-full p-0.5" />
                  </div>
                  <div>
                    <div className="font-display text-2xl tracking-tight">{p.name}</div>
                    <div className="text-xs text-muted-foreground mt-1 uppercase tracking-[0.16em]">{p.role[lang]}</div>
                  </div>
                </div>
                <p className="mt-6 text-sm text-muted-foreground leading-relaxed">{p.bio[lang]}</p>
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
        {aboutPeople.map((p) => (
          <div key={p.name} className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{p.name}</div>
            <div className="mt-3 text-sm">
              <span className="text-muted-foreground">{t("ico_label")}: </span>
              <span className="font-mono text-foreground/80">{p.ico}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-7xl px-6 mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>{t("footer_rights")}</span>
      </div>
    </footer>
  );
}

function Projects() {
  const { t, lang } = useI18n();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [imgIndex, setImgIndex] = useState(0);
  const active = projects.find((p) => p.id === activeId) ?? null;
  const images = active?.images ?? [];

  const openProject = (id: string) => {
    setActiveId(id);
    setImgIndex(0);
  };
  const close = () => setActiveId(null);
  const prev = () => setImgIndex((i) => (images.length ? (i - 1 + images.length) % images.length : 0));
  const next = () => setImgIndex((i) => (images.length ? (i + 1) % images.length : 0));

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, images.length]);

  return (
    <section id="projects" className="relative py-28 sm:py-36 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Reveal><Eyebrow>{t("projects_eyebrow")}</Eyebrow></Reveal>
            <Reveal delay={80}>
              <div className="mt-5"><SectionTitle>{t("projects_title")}</SectionTitle></div>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">{t("projects_text")}</p>
            </Reveal>
          </div>
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
            {projects.map((p, i) => {
              const cover = p.images?.[0];
              const count = p.images?.length ?? 0;
              return (
                <Reveal key={p.id} delay={i * 80}>
                  <button
                    type="button"
                    onClick={() => openProject(p.id)}
                    className="card-premium card-premium-hover p-5 h-full group block text-left w-full cursor-pointer"
                    aria-label={p.title[lang]}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-elevated">
                      {cover ? (
                        <img src={cover} alt={p.title[lang]} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_30%_20%,hsl(var(--foreground)/0.08),transparent_60%)]">
                          <LogoMark className="h-16 w-16 text-foreground/40" />
                        </div>
                      )}
                      <span className="absolute top-3 left-3 text-[10px] tracking-[0.2em] uppercase text-muted-foreground bg-background/70 backdrop-blur px-2 py-1 rounded-full border border-border">
                        {p.tag[lang]}
                      </span>
                      {count > 1 && (
                        <span className="absolute top-3 right-3 text-[10px] tracking-wider text-foreground bg-background/70 backdrop-blur px-2 py-1 rounded-full border border-border">
                          {count} ★
                        </span>
                      )}
                    </div>
                    <div className="mt-5 flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-xl tracking-tight text-foreground">{p.title[lang]}</h3>
                      {p.year && <span className="text-[10px] tracking-[0.2em] text-muted-foreground">{p.year}</span>}
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description[lang]}</p>
                    <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-foreground/80 group-hover:text-foreground transition-colors">
                      {t("projects_view")}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="transition-transform group-hover:translate-x-0.5">
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-background/85 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-background shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              aria-label={t("projects_close")}
              className="absolute top-4 right-4 z-10 h-9 w-9 rounded-full border border-border bg-background/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              </svg>
            </button>

            <div className="relative w-full aspect-[16/9] bg-elevated border-b border-border overflow-hidden">
              {images.length > 0 ? (
                <>
                  <img
                    key={imgIndex}
                    src={images[imgIndex]}
                    alt={`${active.title[lang]} – ${imgIndex + 1}`}
                    className="h-full w-full object-cover"
                  />
                  {images.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={prev}
                        aria-label={t("projects_prev")}
                        className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-border bg-background/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                          <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        onClick={next}
                        aria-label={t("projects_next")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-border bg-background/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[11px] tracking-wider text-foreground bg-background/80 backdrop-blur px-3 py-1 rounded-full border border-border">
                        {imgIndex + 1} {t("projects_image_of")} {images.length}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-6">
                  <LogoMark className="h-16 w-16 text-foreground/40" />
                  <p className="text-sm text-muted-foreground max-w-sm">{t("projects_no_images")}</p>
                </div>
              )}
            </div>

            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto p-4 border-b border-border">
                {images.map((src, k) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setImgIndex(k)}
                    className={`shrink-0 h-16 w-24 rounded-md overflow-hidden border transition-all ${
                      k === imgIndex ? "border-foreground opacity-100" : "border-border opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={src} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground border border-border rounded-full px-2.5 py-1">
                  {active.tag[lang]}
                </span>
                {active.year && (
                  <span className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground">{active.year}</span>
                )}
              </div>
              <h3 className="mt-4 font-display text-3xl sm:text-4xl tracking-tight text-foreground">
                {active.title[lang]}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
                {active.description[lang]}
              </p>
              {active.url && (
                <a
                  href={active.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-foreground/90 transition-colors"
                >
                  {t("projects_open_site")}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Reviews() {
  const { t, lang } = useI18n();
  return (
    <section id="reviews" className="relative py-28 sm:py-36 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal><Eyebrow>{t("reviews_eyebrow")}</Eyebrow></Reveal>
        <Reveal delay={80}>
          <div className="mt-5 max-w-3xl"><SectionTitle>{t("reviews_title")}</SectionTitle></div>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">{t("reviews_text")}</p>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-3 gap-4">
          {reviews.map((r, i) => (
            <Reveal key={r.id} delay={i * 100}>
              <figure className="card-premium card-premium-hover p-7 h-full flex flex-col">
                <div className="flex items-center gap-1 text-foreground">
                  {Array.from({ length: r.rating ?? 5 }).map((_, k) => (
                    <svg key={k} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-5 text-foreground/90 leading-relaxed">
                  „{r.quote[lang]}"
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center font-display text-sm text-foreground bg-elevated">
                    {r.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <div className="text-sm text-foreground">{r.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{r.role[lang]}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
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
        {sectionToggles.showProjects && <Projects />}
        {sectionToggles.showReviews && <Reviews />}
        <Why />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
