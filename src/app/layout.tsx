import type { Metadata } from "next";
import { display, body } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Form & Function London | Planning Permission Consultants",
    template: "%s | Form & Function London",
  },
  description:
    "End-to-end planning permission for London homeowners, landlords and investors — advice, surveys, drawings and council submission handled by one team, start to finish.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
