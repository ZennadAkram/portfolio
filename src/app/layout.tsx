import Script from 'next/script';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

import './globals.css';
import Header from '@/components/layout/header';
import { Providers } from '@/lib/providers';
//import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

const title = 'Akram Zennad | Full Stack & AI Developer From Constantine, Algeria.';
const description =
  'Full stack and mobile developer (Flutter, React.js, Django REST, AI Agents) building modern apps for web and mobile, based in Constantine, Algeria.';
const url = 'https://akramzennad.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    'Frontend Develope',
    'Full Stack Developer',
    'React Developer',
    'Flutter Developer',
    'Python Developer',
    'Javascript Developer',
    'Typescript Developer',
    'Django Rest Framework Developer',
    'AI agents Developer'
  ],
  creator: 'Akram Zennad',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    siteName: title,
    images: [
      {
        url: '/images/06.png',
      },
    ],
  },
 /* twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@shahsagarm',
    images: '/images/open-graph-sagar.png',
  },
  */
 /* icons: {
    icon: '/az-icon.png',
    
    apple: '/apple-touch-icon.png',
  },
  */
  
};

const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      {googleAnalyticsId ? (
        <head>
          
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="Me5HgE5oFWMoikFflOc33R56k8OGRuo11G6SiWPfBGU"
        />
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          ></Script>
          <Script id="google-anayltics-script">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${googleAnalyticsId}');
          `}
          </Script>
        </head>
      ) : null}
      <body className={`${inter.className} bg-gray text-gray-600 antialiased`}>
        <Providers>
          <Header />
          <main className="flex min-h-screen w-full flex-col">{children}</main>
         {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
