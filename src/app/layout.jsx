import Footer from '@/components/Footer';
import { GridBackground } from '@/components/GridBackground';
import Navbar from '@/components/NavBar';
import { ThemeProvider } from '@/components/ThemeProvider';
import localFont from 'next/font/local';
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

export const metadata = {
  title: 'Prospera',
  description: 'Real estate investing, simplified',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <GridBackground>
            <Navbar />
            {children}
          </GridBackground>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
