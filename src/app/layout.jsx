import { ThemeProvider } from '@/components/ThemeProvider';
import localFont from 'next/font/local';
import { Toaster } from '@/components/ui/sonner';
import { Poppins } from 'next/font/google';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Prospera.',
  description: 'Real estate investing, simplified',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${poppins.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
          <Toaster richColors position='top-center' />
        </ThemeProvider>
      </body>
    </html>
  );
}
