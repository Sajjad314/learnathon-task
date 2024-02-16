import {
  DM_Sans,
  Dancing_Script,
  Inter,
  Libre_Baskerville,
  Manrope,
  Metrophobic,
  Open_Sans,
  Poppins,
  Roboto,
} from "next/font/google";

export const dmSans = DM_Sans({
  display: "swap",
  adjustFontFallback: false,
  subsets: ["latin"],
});

export const dancingScript = Dancing_Script({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

export const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metroPhobic = Metrophobic({
  weight: ["400"],
  subsets: ["latin"],
});

export const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const inter = Inter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const openSans = Open_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const manrope = Manrope({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
