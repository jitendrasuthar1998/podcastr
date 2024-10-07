import LeftSidebar from "@/components/LeftSidebar";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Podcastr",
    description: "Generate your podcast using ai",
    icons:{
      icon:"/icons/logo.svg"
    }
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        <LeftSidebar/>
        {children}
        <p className="text-white-1">right sidebar</p>
      </main>
  );
}