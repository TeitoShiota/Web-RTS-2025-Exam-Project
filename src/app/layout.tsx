import type { Metadata } from "next";
import "@/styles/globals.scss";
import PrimaryNav from "@/containers/PrimaryNav";


export const metadata: Metadata = {
  title: "Trainer",
  description: "Train like a pro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PrimaryNav />
        {children}
      </body>
    </html>
  );
}
