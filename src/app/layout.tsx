import "./globals.css";
import "@radix-ui/themes/styles.css";

import { Inter } from "next/font/google";
import { Theme } from "@radix-ui/themes";

import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social media tools for grow your personal brand",
  description:
    "Social media tools is an all-in-one content creation tool that helps professionals build and grow their personal brands.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme appearance="light" accentColor="lime">
          {children}
        </Theme>
      </body>
    </html>
  );
}
