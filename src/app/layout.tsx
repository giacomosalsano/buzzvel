import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Soller Website",
  description: "Get the Sun to Power Your Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1920px]">
        {children}
      </body>
    </html>
  );
}
