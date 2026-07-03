import logo from "@/assets/syntropic-logo.asset.json";

export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        backgroundColor: "currentColor",
        WebkitMaskImage: `url(${logo.url})`,
        maskImage: `url(${logo.url})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
      aria-hidden
    />
  );
}
