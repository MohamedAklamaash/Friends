import './globals.css';

import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: {
    template: '%s - Friends',
    default: 'Friends',
  },
  description: 'Friends | Social Media Platform',
  icons: {
    icon: '/icon___.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster
          position="top-center"
          toastOptions={{
            success: { duration: 1500 },
            style: {
              borderRadius: '12px',
              background: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(124,48,216,0.2)',
              color: '#1a1a2e',
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
