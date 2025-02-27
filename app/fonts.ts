import { Montserrat, Source_Sans_3 } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const sourceSansPro = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',
  variable: '--font-source-sans',
}); 