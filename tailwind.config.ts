import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "20px",
      screens: {
        "2xl": "1765px",
      },
    },
    extend: {
      screens: {
        xs: "375px",
        sm: "600px",
        sd: "700px",
        md: "750px",
        mg: "800px",
        "3xl": "1650px",
        "4xl": "2000px",
      },
      boxShadow: {
        custom: "0px 12px 12px 0px rgba(42, 124, 48, 0.34)",
      },
      backgroundImage: {
        "xs-banner-img":
          "url('https://firebasestorage.googleapis.com/v0/b/forest-estate.appspot.com/o/image-1.png?alt=media&token=d45c89c1-c934-4b2d-8de3-4a694c3a9e89')",
        "banner-img":
          "url('https://firebasestorage.googleapis.com/v0/b/forest-estate.appspot.com/o/Image-00.png?alt=media&token=931ba83f-a513-4a78-b6b0-efaa6c202510')",
      },

      colors: {
        title: "rgb(30,30,30)",
        primary: "rgb(68,124,42)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
