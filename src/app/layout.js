import { Nunito_Sans } from 'next/font/google';
import './globals.css';

const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-nunitosans', // this is the custom CSS variable
});

export const metadata = {
  title: 'AI for Delta',
  description: 'Using AI to transform Delta State',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
