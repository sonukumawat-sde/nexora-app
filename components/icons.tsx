/**
 * Icon set — inline SVG, koi library nahi.
 *
 * lucide-react jaisi library 40 KB+ add karti hai jab hume sirf 30 icons
 * chahiye. Ye sab milakar 6 KB hain, tree-shaking ki zaroorat hi nahi padti,
 * aur har icon ka size/stroke hum khud control karte hain.
 *
 * Use: <Icon.agent />  ya  <Icon.arrow size={13} />
 * Data files me sirf naam store hota hai ("agent"), aur component wahan se
 * dynamically pick karta hai: const Ico = Icon[item.ic]
 */

type P = { className?: string; size?: number };

/** Sab stroke icons ke common props — repeat karne se bachta hai. */
const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export const Icon = {
  /* ---- service / industry icons ---- */

  agent: ({ size = 20 }: P) => (
    <svg {...base(size)}>
      <rect x="4" y="7" width="16" height="12" rx="3" />
      <path d="M12 3v4M9 13h.01M15 13h.01M9 16.5h6" />
    </svg>
  ),

  flow: ({ size = 20 }: P) => (
    <svg {...base(size)}>
      <rect x="3" y="3" width="6" height="6" rx="1.5" />
      <rect x="15" y="15" width="6" height="6" rx="1.5" />
      <path d="M9 6h4a2 2 0 0 1 2 2v10" />
    </svg>
  ),

  cube: ({ size = 20 }: P) => (
    <svg {...base(size)}>
      <path d="M12 2 3 7v10l9 5 9-5V7z" />
      <path d="m3 7 9 5 9-5M12 12v10" />
    </svg>
  ),

  grid: ({ size = 20 }: P) => (
    <svg {...base(size)}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  ),

  rocket: ({ size = 20 }: P) => (
    <svg {...base(size)}>
      <path d="M12 2c3.5 2.5 5.5 6.5 5.5 11L12 17l-5.5-4C6.5 8.5 8.5 4.5 12 2z" />
      <path d="M9 17c-1.5 1.5-2 4-2 5 1 0 3.5-.5 5-2" />
      <circle cx="12" cy="9" r="1.5" />
    </svg>
  ),

  pen: ({ size = 20 }: P) => (
    <svg {...base(size)}>
      <path d="M12 19l7-7-4-4-7 7-1 5z" />
      <path d="M15 5l4 4" />
    </svg>
  ),

  shield: ({ size = 20 }: P) => (
    <svg {...base(size)}>
      <path d="M12 3 4 6v6c0 4.5 3.2 8.3 8 9 4.8-.7 8-4.5 8-9V6z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),

  exit: ({ size = 20 }: P) => (
    <svg {...base(size)}>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
    </svg>
  ),

  chat: ({ size = 20 }: P) => (
    <svg {...base(size)}>
      <path d="M21 12a8 8 0 0 1-8 8H7l-4 3v-5a8 8 0 0 1 8-11h2a8 8 0 0 1 8 8z" />
    </svg>
  ),

  cart: ({ size = 20 }: P) => (
    <svg {...base(size)}>
      <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6" />
      <circle cx="10" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
    </svg>
  ),

  steth: ({ size = 20 }: P) => (
    <svg {...base(size)}>
      <path d="M5 3v6a5 5 0 0 0 10 0V3" />
      <path d="M10 14v2a5 5 0 0 0 10 0v-2" />
      <circle cx="20" cy="11" r="2" />
    </svg>
  ),

  home: ({ size = 20 }: P) => (
    <svg {...base(size)}>
      <path d="m3 10 9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M9 21v-7h6v7" />
    </svg>
  ),

  chart: ({ size = 20 }: P) => (
    <svg {...base(size)}>
      <path d="M3 21h18M6 21V11M11 21V5M16 21v-7M21 21v-4" />
    </svg>
  ),

  brief: ({ size = 20 }: P) => (
    <svg {...base(size)}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 12h18" />
    </svg>
  ),

  truck: ({ size = 20 }: P) => (
    <svg {...base(size)}>
      <path d="M2 7h11v10H2zM13 10h4l4 3.5V17h-8" />
      <circle cx="6" cy="19" r="1.4" />
      <circle cx="17" cy="19" r="1.4" />
    </svg>
  ),
  phone: ({ size = 20 }: P) => (
    <svg {...base(size)}>
      <rect x="6" y="2" width="12" height="20" rx="3" />
      <path d="M11 18h2" />
    </svg>
  ),

  /* ---- filled icon: zap ---- */

  zap: ({ size = 20 }: P) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
    </svg>
  ),

  /* ---- UI icons ---- */

  arrow: ({ size = 15 }: P) => (
    <svg {...base(size)} strokeWidth={2.2}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),

  chev: ({ size = 15 }: P) => (
    <svg {...base(size)} strokeWidth={2}>
      <path d="m9 6 6 6-6 6" />
    </svg>
  ),

  check: ({ size = 13 }: P) => (
    <svg {...base(size)} strokeWidth={2.6}>
      <path d="m5 13 4 4L19 7" />
    </svg>
  ),

  plus: ({ size = 17 }: P) => (
    <svg {...base(size)} strokeWidth={1.9}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),

  mail: ({ size = 16 }: P) => (
    <svg {...base(size)} strokeWidth={1.8}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),

  calendar: ({ size = 16 }: P) => (
    <svg {...base(size)} strokeWidth={1.8}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 11h18" />
    </svg>
  ),

  card: ({ size = 14 }: P) => (
    <svg {...base(size)} strokeWidth={1.9}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </svg>
  ),

  doc: ({ size = 14 }: P) => (
    <svg {...base(size)} strokeWidth={1.9}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
    </svg>
  ),

  rupee: ({ size = 14 }: P) => (
    <svg {...base(size)} strokeWidth={1.9}>
      <path d="M12 2v20M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),

  clock: ({ size = 14 }: P) => (
    <svg {...base(size)} strokeWidth={1.9}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),

  /* ---- social / brand icons (filled paths) ---- */

  whatsapp: ({ size = 16 }: P) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.1 14.2c-.2.6-1.2 1.2-1.7 1.2-.5 0-.9.2-3-.9s-3.4-3.6-3.5-3.8c-.1-.2-.9-1.2-.9-2.3s.6-1.6.8-1.8c.2-.2.4-.3.6-.3h.4c.2 0 .4 0 .6.4l.8 1.9c.1.2 0 .4-.1.5l-.4.5c-.1.1-.2.3-.1.5.2.3.8 1.3 1.6 2 .6.5 1.2.8 1.4.9.2.1.4 0 .5-.1l.6-.7c.2-.2.3-.2.5-.1l1.8.9c.2.1.3.2.3.4s0 .7-.2 1.3z" />
    </svg>
  ),

  linkedin: ({ size = 15 }: P) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05a4.2 4.2 0 0 1 3.78-2.08c4.04 0 4.79 2.66 4.79 6.12V21h-4v-5.5c0-1.31-.02-3-1.83-3s-2.11 1.43-2.11 2.9V21H9z" />
    </svg>
  ),

  instagram: ({ size = 15 }: P) => (
    <svg {...base(size)} strokeWidth={1.9}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),

  globe: ({ size = 15 }: P) => (
    <svg {...base(size)} strokeWidth={1.9}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18" />
    </svg>
  ),
};

export type IconName = keyof typeof Icon;