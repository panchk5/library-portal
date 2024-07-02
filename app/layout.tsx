import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from "@mui/material/styles";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "McMaster Libraries",
  description: "Central hub for all library resources at McMaster University (student hub).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body >
        <AppRouterCacheProvider>
          {/* <ThemeProvider theme={theme}> */}
        {children}
          {/* </ThemeProvider> */}
        </AppRouterCacheProvider>
        </body>
    </html>
  );
}
