import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { LogoMark } from "./Logo";

const sections = [
  { id: "home", key: "nav_home" as const },
  { id: "work", key: "nav_work" as const },
  { id: "process", key: "nav_process" as const },
  { id: "about", key: "nav_about" as const },
  { id: "contact", key: "nav_contact" as const },
];

export function Nav() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass border border-border" : "border border-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-2.5 text-foreground">
            <LogoMark className="h-7 w-7" />
            <span className="text-sm tracking-tight font-medium">SyntropicStudio</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(s.key)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex items-center rounded-full border border-border p-0.5 text-xs">
              {(["cs", "en"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 rounded-full transition-colors uppercase tracking-wider ${
                    lang === l ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-pressed={lang === l}
                >
                  {l === "cs" ? "CZ" : "EN"}
                </button>
              ))}
            </div>
            <a
              href="mailto:syntropicstudio26@gmail.com"
              className="hidden sm:inline-flex items-center rounded-full bg-foreground text-background px-4 py-2 text-xs font-medium hover:bg-foreground/90 transition-colors"
            >
              {t("cta_start")}
            </a>
            <button
              className="md:hidden text-foreground p-1"
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {open ? (
                  <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
                ) : (
                  <>
                    <path d="M4 8h16" strokeLinecap="round" />
                    <path d="M4 16h16" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass border border-border rounded-2xl p-4 flex flex-col gap-1">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                {t(s.key)}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
