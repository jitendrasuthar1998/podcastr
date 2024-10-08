import LeftSidebar from "@/components/LeftSidebar";
import MobileNav from "@/components/MobileNav";
import RightSidebar from "@/components/RightSidebar";
import type { Metadata } from "next";
import Image from "next/image";


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
    <div className="">
        <main className="relative flex bg-black-3">
        <LeftSidebar/>

        <section className="flex min-h-screen flex-1 flex-col px-4 sm:px-14">
            <div className="mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
                <div className="flex h-16 items-center justify-between md:hidden">
                    <Image  src="/icons/logo.svg" alt="menu" width={30} height={30}/>
                    <MobileNav/>
                </div>
                <div className="flex flex-col md:pb-14 text-white-1">
                    Toaster (notification popup)
                    {children}
                </div>
            </div>
        </section>
       <RightSidebar/>
      </main>
    </div>
  );
}