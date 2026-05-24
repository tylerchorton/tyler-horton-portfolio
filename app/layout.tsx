import type { Metadata } from "next";
import { Sora, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-plex",
});

export const metadata: Metadata = {
  title: "Tyler Horton",
  description: "Editor Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
  lang="en"
  className={`
    ${sora.variable}
    ${plex.variable}
    h-full
    antialiased
  `}
>
      <body
        className="
          min-h-full
          flex
          flex-col
          font-sans
        "
      >
        {children}
      </body>
    </html>
  );
}