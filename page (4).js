@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-display: "Fraunces", Georgia, serif;
  --font-body: "Public Sans", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", monospace;
}

@layer base {
  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    @apply bg-ink-900 text-paper font-body antialiased;
    background-image:
      radial-gradient(ellipse 80% 50% at 50% -10%, rgba(21, 224, 160, 0.08), transparent),
      radial-gradient(circle at 100% 0%, rgba(255, 176, 32, 0.04), transparent 40%);
    background-attachment: fixed;
  }
  ::selection {
    @apply bg-signal text-ink-900;
  }
}

@layer components {
  .container-content {
    @apply max-w-content mx-auto px-6 sm:px-8;
  }

  .btn-primary {
    @apply inline-flex items-center justify-center gap-2 rounded-full bg-signal px-7 py-3.5
           text-ink-900 font-semibold text-[15px] tracking-tight
           transition-all duration-200 hover:bg-signal-dark
           hover:shadow-[0_0_32px_rgba(21,224,160,0.35)] active:scale-[0.98];
  }

  .btn-ghost {
    @apply inline-flex items-center justify-center gap-2 rounded-full border border-slate-600
           px-7 py-3.5 text-paper font-medium text-[15px] tracking-tight
           transition-all duration-200 hover:border-signal hover:text-signal;
  }

  .eyebrow {
    @apply inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.18em]
           text-signal;
  }

  .card {
    @apply rounded-2xl border border-ink-600 bg-ink-800/60 backdrop-blur-sm
           transition-all duration-300;
  }

  .card-hover:hover {
    @apply border-signal/40 -translate-y-1
           shadow-[0_16px_48px_-12px_rgba(0,0,0,0.6)];
  }

  .grain::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 1;
  }

  .reveal {
    animation: fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  @media (prefers-reduced-motion: reduce) {
    .reveal {
      animation: none;
    }
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
  .gradient-text {
    background: linear-gradient(120deg, #F7F8FA 0%, #15E0A0 55%, #F7F8FA 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
