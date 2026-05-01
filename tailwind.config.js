/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        border: "hsl(var(--border))",
      },
      fontFamily: {
        sans: ['"Open Sans"', "system-ui", "sans-serif"],
        display: ['"Poppins"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gradient-hero":
          "linear-gradient(135deg, hsl(var(--primary) / 0.92), hsl(var(--secondary) / 0.85))",
        "gradient-warm":
          "linear-gradient(90deg, hsl(var(--accent)), hsl(45 95% 65%))",
        "gradient-cta":
          "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-glow)))",
      },
      boxShadow: {
        soft: "0 4px 20px -4px hsl(var(--primary) / 0.15)",
        glow: "0 10px 40px -10px hsl(var(--primary) / 0.4)",
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out both",
        "fade-up": "fade-up 0.7s ease-out both",
      },
      keyframes: {
        "fade-in": { from: { opacity: 0 }, to: { opacity: 1 } },
        "fade-up": {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
