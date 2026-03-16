import { DM_Sans, Playfair_Display } from 'next/font/google';

// Body font — geometric, clean, modern
export const roboto = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
});

// Display font — editorial serif for headings & logo
export const opensans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
});

export const poppins = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
});
