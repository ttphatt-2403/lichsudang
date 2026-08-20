// ─────────────────────────────────────────────────────────────────────────────
// DESIGN TOKENS
// ─────────────────────────────────────────────────────────────────────────────
export const C = {
  bg:      "#f5e6c8",
  bg2:     "#ede0b8",
  ivory:   "#faf6ed",
  brown:   "#8b6b3f",
  dark:    "#3e2f1c",
  red:     "#8B1A1A",   // brick / dark red
  redMid:  "#A32020",   // slightly brighter for hover
  accent:  "#c9a45c",
  muted:   "#9a8060",
  border:  "rgba(139,107,63,0.3)",
  serif:   "'Playfair Display', Georgia, serif",
  body:    "'EB Garamond', Garamond, serif",
  sans:    "'Be Vietnam Pro', sans-serif",
  ease:    "cubic-bezier(0.25,0.8,0.25,1)",
  get tr() { return `all 0.3s ${this.ease}`; },
} as const;
